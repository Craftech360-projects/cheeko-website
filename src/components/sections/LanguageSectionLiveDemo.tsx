'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Loader2, PhoneOff, Volume2 } from 'lucide-react';
import type { ConnectionState, Room, RemoteTrack } from 'livekit-client';
import { assets } from '@/data/assets';

type ConnectionStage = 'idle' | 'connecting' | 'connected' | 'error';

export type LanguageDemoOption = {
  id: string;
  name: string;
  nativeLabel: string;
  greetingNative: string;
  greetingLatin: string;
  greetingEnglish: string;
};

type LiveKitTokenResponse = {
  token?: string;
  url?: string;
  error?: string;
};

type Props = {
  selectedLanguage: LanguageDemoOption;
};

export function LanguageSectionLiveDemo({ selectedLanguage }: Props) {
  const [connectionStage, setConnectionStage] = useState<ConnectionStage>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [audioBlocked, setAudioBlocked] = useState(false);
  const roomRef = useRef<Room | null>(null);
  const audioElementRef = useRef<HTMLMediaElement | null>(null);

  const disconnect = useCallback(async () => {
    if (roomRef.current) await roomRef.current.disconnect();
    roomRef.current = null;

    if (audioElementRef.current) {
      audioElementRef.current.remove();
      audioElementRef.current = null;
    }

    setAudioBlocked(false);
    setConnectionStage('idle');
    setErrorMessage(null);
  }, []);

  const connect = useCallback(async () => {
    setConnectionStage('connecting');
    setErrorMessage(null);
    setAudioBlocked(false);

    try {
      const livekit = await import('livekit-client');
      const room = new livekit.Room({ adaptiveStream: true, dynacast: true });
      roomRef.current = room;

      // Must happen from tap flow on mobile browsers so remote audio is allowed.
      try {
        await room.startAudio();
      } catch {
        // Ignore; we'll retry once connected.
      }

      room.on(livekit.RoomEvent.AudioPlaybackStatusChanged, () => {
        if (!room.canPlaybackAudio) {
          setAudioBlocked(true);
          setErrorMessage('Sound is blocked by browser. Tap "Enable Sound".');
          return;
        }
        setAudioBlocked(false);
        setErrorMessage((prev) =>
          prev === 'Sound is blocked by browser. Tap "Enable Sound".' ? null : prev
        );
      });

      const params = new URLSearchParams({ name: 'Friend', language: selectedLanguage.name });
      const tokenResponse = await fetch(`/api/livekit-gemini-token?${params.toString()}`, {
        method: 'GET',
        cache: 'no-store'
      });

      const tokenData = (await tokenResponse.json()) as LiveKitTokenResponse;
      if (!tokenResponse.ok) throw new Error(tokenData.error || 'Unable to start demo right now.');
      if (!tokenData.token || !tokenData.url) throw new Error('Demo token response is incomplete.');

      room.on(livekit.RoomEvent.TrackSubscribed, (track: RemoteTrack) => {
        if (track.kind !== 'audio') return;
        if (audioElementRef.current) {
          audioElementRef.current.remove();
          audioElementRef.current = null;
        }

        const mediaElement = track.attach();
        mediaElement.autoplay = true;
        mediaElement.playsInline = true;
        mediaElement.style.display = 'none';
        document.body.appendChild(mediaElement);
        audioElementRef.current = mediaElement;
        void mediaElement.play().catch(() => {
          setAudioBlocked(true);
          setErrorMessage('Sound is blocked by browser. Tap "Enable Sound".');
        });
      });

      room.on(livekit.RoomEvent.TrackUnsubscribed, (track: RemoteTrack) => {
        track.detach().forEach((element: HTMLElement) => element.remove());
      });

      room.on(livekit.RoomEvent.ConnectionStateChanged, (state: ConnectionState) => {
        if (state === livekit.ConnectionState.Disconnected) {
          setConnectionStage('idle');
        }
      });

      await room.connect(tokenData.url, tokenData.token);
      await room.startAudio().catch(() => undefined);

      try {
        await room.localParticipant.setMicrophoneEnabled(true);
      } catch {
        setErrorMessage('Microphone permission is blocked. Please allow mic and retry.');
      }

      setConnectionStage('connected');
    } catch (error) {
      setConnectionStage('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to connect demo.');
      if (roomRef.current) await roomRef.current.disconnect();
      roomRef.current = null;
    }
  }, [selectedLanguage.name]);

  useEffect(() => {
    return () => {
      if (roomRef.current) roomRef.current.disconnect().catch(() => undefined);
      if (audioElementRef.current) audioElementRef.current.remove();
    };
  }, []);

  const onButtonClick = async () => {
    if (connectionStage === 'connected') {
      const room = roomRef.current;
      if (room && !room.canPlaybackAudio) {
        try {
          await room.startAudio();
          setAudioBlocked(false);
          setErrorMessage(null);
        } catch {
          setAudioBlocked(true);
          setErrorMessage('Sound is blocked by browser. Tap "Enable Sound".');
        }
        return;
      }
      await disconnect();
      return;
    }
    if (connectionStage === 'connecting') return;
    await connect();
  };

  const buttonLabel =
    connectionStage === 'connecting'
      ? 'Connecting...'
      : connectionStage === 'connected' && audioBlocked
        ? 'Enable Sound'
        : connectionStage === 'connected'
        ? 'End Demo'
        : connectionStage === 'error'
          ? 'Retry'
          : 'Tap to Listen';

  return (
    <div className="language-laptop-fit__demo-card relative mx-auto w-full max-w-[720px] overflow-hidden rounded-[1.6rem] shadow-[0_10px_16px_rgba(0,0,0,0.24)]">
      <Image
        src={assets.product.languagePanelBg}
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 1024px) 92vw, 900px"
        className="object-cover"
      />
      <div className="language-laptop-fit__demo-body relative z-10 p-5 sm:p-6 lg:px-9 lg:py-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#fde8d2] text-cheeko-orange">
            <Volume2 className="h-6 w-6" />
          </span>
          <p className="language-laptop-fit__demo-speaking text-lg font-medium text-[#5f5f5f] sm:text-xl lg:text-[1.8rem]">
            Speaking:{' '}
            <span className="font-semibold text-cheeko-orange">
              {selectedLanguage.name} ({selectedLanguage.nativeLabel})
            </span>
          </p>
        </div>

        <div className="language-laptop-fit__demo-row mt-6 grid grid-cols-[auto_1fr] items-center gap-4 sm:gap-6 lg:mt-7 lg:gap-6">
          <button
            type="button"
            onClick={onButtonClick}
            disabled={connectionStage === 'connecting'}
            className="language-laptop-fit__demo-action inline-flex h-[7.25rem] w-[6rem] flex-col items-center justify-center rounded-[1.1rem] bg-[#ff7a0c] text-white shadow-[0_10px_14px_rgba(255,122,12,0.35)] disabled:cursor-not-allowed disabled:opacity-70 lg:h-[9.5rem] lg:w-[7.5rem] lg:rounded-[1.35rem]"
            aria-label="Tap to listen"
          >
            {connectionStage === 'connecting' ? (
              <Loader2 className="h-7 w-7 animate-spin lg:h-8 lg:w-8" />
            ) : connectionStage === 'connected' && !audioBlocked ? (
              <PhoneOff className="h-7 w-7 lg:h-8 lg:w-8" />
            ) : (
              <Volume2 className="h-7 w-7 lg:h-8 lg:w-8" />
            )}
            <span className="language-laptop-fit__demo-action-label mt-2 text-[1rem] font-medium leading-[1.02] lg:text-[1.2rem]">{buttonLabel}</span>
          </button>

          <div className="min-w-0">
            <p className="language-laptop-fit__demo-native text-[1.6rem] font-medium leading-[1.12] text-[#1f1f1f] sm:text-[1.9rem] lg:text-[2.5rem]">
              {selectedLanguage.greetingNative}
            </p>
            <div className="language-laptop-fit__demo-divider mt-3 h-2 w-24 rounded-full bg-[#f57ea5] lg:mt-4 lg:h-[0.34rem] lg:w-24" />
            <p className="language-laptop-fit__demo-latin mt-3 text-[1.08rem] font-medium text-[#4f4f4f] sm:text-[1.2rem] lg:mt-4 lg:text-[1.65rem]">
              {selectedLanguage.greetingLatin}
            </p>
            <p className="language-laptop-fit__demo-english mt-2 text-[1rem] font-medium text-[#767676] sm:text-[1.15rem] lg:mt-3 lg:text-[1.5rem]">
              {selectedLanguage.greetingEnglish}
            </p>
            {errorMessage ? <p className="mt-3 text-sm font-medium text-[#c53030]">{errorMessage}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
