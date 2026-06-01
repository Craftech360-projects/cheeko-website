import { AccessToken, AgentDispatchClient, RoomServiceClient } from 'livekit-server-sdk';
import { NextRequest, NextResponse } from 'next/server';

function safeValue(input: string | null, fallback: string): string {
  if (!input) return fallback;
  const trimmed = input.trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

export async function GET(request: NextRequest) {
  const name = safeValue(request.nextUrl.searchParams.get('name'), 'Friend');
  const language = safeValue(request.nextUrl.searchParams.get('language'), 'English');

  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const livekitUrl = process.env.LIVEKIT_URL || process.env.NEXT_PUBLIC_LIVEKIT_URL;

  if (!apiKey || !apiSecret || !livekitUrl) {
    return NextResponse.json({ error: 'LiveKit credentials not configured' }, { status: 500 });
  }

  const httpUrl = livekitUrl
    .replace('wss://', 'https://')
    .replace('ws://', 'http://');
  const roomName = `cheeko-gemini-${Date.now()}`;
  const participantIdentity = `user-${Math.random().toString(36).slice(2, 9)}`;

  const roomService = new RoomServiceClient(httpUrl, apiKey, apiSecret);
  try {
    await roomService.createRoom({ name: roomName, emptyTimeout: 60 * 5 });
  } catch (error) {
    console.log(`Room creation warning: ${error}`);
  }

  const agentDispatch = new AgentDispatchClient(httpUrl, apiKey, apiSecret);
  try {
    const shouldDispatch = process.env.ENABLE_AGENT_DISPATCH === 'true';
    if (shouldDispatch) {
      await agentDispatch.createDispatch(roomName, '');
      console.log(`Agent dispatched to room: ${roomName}`);
    } else {
      console.log('Agent dispatch skipped (ENABLE_AGENT_DISPATCH not set).');
    }
  } catch (error) {
    console.log(`Agent dispatch warning: ${error}`);
  }

  const tokenBuilder = new AccessToken(apiKey, apiSecret, {
    identity: participantIdentity,
    name,
    metadata: JSON.stringify({ language, name }),
    ttl: '10m'
  });

  tokenBuilder.addGrant({
    roomJoin: true,
    room: roomName,
    canPublish: true,
    canSubscribe: true,
    canPublishData: true
  });

  const token = await tokenBuilder.toJwt();

  return NextResponse.json({
    token,
    roomName,
    participantIdentity,
    url: livekitUrl
  });
}
