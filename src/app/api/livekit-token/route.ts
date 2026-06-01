import { AccessToken } from 'livekit-server-sdk';
import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;

  if (!apiKey || !apiSecret) {
    return NextResponse.json({ error: 'LiveKit credentials not configured' }, { status: 500 });
  }

  const roomName = `cheeko-demo-${Date.now()}`;
  const participantIdentity = `user-${Math.random().toString(36).slice(2, 9)}`;

  const tokenBuilder = new AccessToken(apiKey, apiSecret, {
    identity: participantIdentity,
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
    url: process.env.LIVEKIT_URL || process.env.NEXT_PUBLIC_LIVEKIT_URL
  });
}

