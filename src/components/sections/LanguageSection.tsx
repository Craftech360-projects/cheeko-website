'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/data/assets';
import { siteContent } from '@/data/site-content';
import { LanguageSectionLiveDemo, type LanguageDemoOption } from './LanguageSectionLiveDemo';

const LANGUAGE_OPTIONS: LanguageDemoOption[] = [
  {
    id: 'hindi',
    name: 'Hindi',
    nativeLabel: 'हिंदी',
    greetingNative: 'नमस्ते! आपका नाम क्या है?',
    greetingLatin: 'Namaste! Aapka naam kya hai?',
    greetingEnglish: 'Hello! What is your name?'
  },
  {
    id: 'tamil',
    name: 'Tamil',
    nativeLabel: 'தமிழ்',
    greetingNative: 'வணக்கம்! உங்கள் பெயர் என்ன?',
    greetingLatin: 'Vanakkam! Ungal peyar enna?',
    greetingEnglish: 'Hello! What is your name?'
  },
  {
    id: 'telugu',
    name: 'Telugu',
    nativeLabel: 'తెలుగు',
    greetingNative: 'నమస్కారం! మీ పేరు ఏమిటి?',
    greetingLatin: 'Namaskaram! Mee peru emiti?',
    greetingEnglish: 'Hello! What is your name?'
  },
  {
    id: 'marathi',
    name: 'Marathi',
    nativeLabel: 'मराठी',
    greetingNative: 'नमस्कार! तुमचं नाव काय आहे?',
    greetingLatin: 'Namaskar! Tumcha nav kay aahe?',
    greetingEnglish: 'Hello! What is your name?'
  },
  {
    id: 'bengali',
    name: 'Bengali',
    nativeLabel: 'বাংলা',
    greetingNative: 'নমস্কার! তোমার নাম কী?',
    greetingLatin: 'Nomoshkar! Tomar naam ki?',
    greetingEnglish: 'Hello! What is your name?'
  },
  {
    id: 'kannada',
    name: 'Kannada',
    nativeLabel: 'ಕನ್ನಡ',
    greetingNative: 'ನಮಸ್ಕಾರ! ನಿಮ್ಮ ಹೆಸರು ಏನು?',
    greetingLatin: 'Namaskara! Ninna hesaru enu?',
    greetingEnglish: 'Hello! What is your name?'
  },
  {
    id: 'malayalam',
    name: 'Malayalam',
    nativeLabel: 'മലയാളം',
    greetingNative: 'നമസ്കാരം! നിന്റെ പേര് എന്താണ്?',
    greetingLatin: 'Namaskaram! Ninte peru enthaanu?',
    greetingEnglish: 'Hello! What is your name?'
  },
  {
    id: 'gujarati',
    name: 'Gujarati',
    nativeLabel: 'ગુજરાતી',
    greetingNative: 'નમસ્તે! તમારું નામ શું છે?',
    greetingLatin: 'Namaste! Tamaru naam shu chhe?',
    greetingEnglish: 'Hello! What is your name?'
  },
  {
    id: 'punjabi',
    name: 'Punjabi',
    nativeLabel: 'ਪੰਜਾਬੀ',
    greetingNative: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ?',
    greetingLatin: 'Sat Sri Akaal! Tuhada naam ki hai?',
    greetingEnglish: 'Hello! What is your name?'
  },
  {
    id: 'english',
    name: 'English',
    nativeLabel: 'English',
    greetingNative: 'Hello! What is your name?',
    greetingLatin: 'Hello! What is your name?',
    greetingEnglish: 'Hello! What is your name?'
  }
];

export function LanguageSection() {
  const [selectedLanguageId, setSelectedLanguageId] = useState('kannada');
  const [laptopScale, setLaptopScale] = useState(1);
  const [fitModeEnabled, setFitModeEnabled] = useState(false);
  const [scaledCanvasHeight, setScaledCanvasHeight] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const selectedLanguage =
    LANGUAGE_OPTIONS.find((language) => language.id === selectedLanguageId) || LANGUAGE_OPTIONS[5];

  const recomputeLaptopScale = useCallback(() => {
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const width = window.innerWidth;
    const shouldFit = width >= 1024;

    if (!shouldFit) {
      setFitModeEnabled(false);
      setLaptopScale(1);
      setScaledCanvasHeight(null);
      return;
    }

    const sectionRect = section.getBoundingClientRect();
    const sectionTopWithinViewport = Math.max(0, sectionRect.top);
    const visibleHeight = window.innerHeight - sectionTopWithinViewport;
    if (visibleHeight <= 0) return;

    const sectionStyles = window.getComputedStyle(section);
    const paddingTop = Number.parseFloat(sectionStyles.paddingTop) || 0;
    const paddingBottom = Number.parseFloat(sectionStyles.paddingBottom) || 0;
    const availableHeight = visibleHeight - paddingTop - paddingBottom;

    const contentHeight = canvas.scrollHeight;
    if (availableHeight <= 0 || contentHeight <= 0) return;

    const rawScale = Math.min(1, availableHeight / contentHeight);
    const scale = rawScale < 0.998 ? rawScale : 1;

    setFitModeEnabled(scale < 1);
    setLaptopScale(scale);
    setScaledCanvasHeight(scale < 1 ? contentHeight * scale : null);
  }, []);

  useEffect(() => {
    let frameId = 0;
    let resizeObserver: ResizeObserver | null = null;
    const schedule = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        recomputeLaptopScale();
      });
    };

    schedule();
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        schedule();
      });

      if (sectionRef.current) resizeObserver.observe(sectionRef.current);
      if (canvasRef.current) resizeObserver.observe(canvasRef.current);
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('load', schedule);
      resizeObserver?.disconnect();
    };
  }, [recomputeLaptopScale, selectedLanguageId]);

  return (
    <section
      id="language"
      ref={sectionRef}
      className="language-laptop-fit relative min-h-screen min-h-[100svh] overflow-hidden bg-[linear-gradient(90deg,#FFF8D5_0%,#FFD6E5_100%)] px-4 pt-14 sm:px-8  sm:pt-16 lg:px-10 lg:pt-12"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1200 700" preserveAspectRatio="none" className="h-full w-full">
          <path d="M 205 700 C 510 560, 915 455, 1190 -28" fill="none" stroke="#b8adac" strokeWidth="5" strokeOpacity="0.5" />
          <path d="M 245 700 C 550 560, 955 458, 1190 8" fill="none" stroke="#b8adac" strokeWidth="5" strokeOpacity="0.5" />
          <path d="M 285 700 C 590 563, 995 462, 1190 44" fill="none" stroke="#b8adac" strokeWidth="5" strokeOpacity="0.5" />
        </svg>
      </div>

      <div
        className="relative mx-auto max-w-[1720px]"
        style={fitModeEnabled && scaledCanvasHeight ? { height: `${scaledCanvasHeight}px` } : undefined}
      >
        <div
          ref={canvasRef}
          className="language-laptop-fit__canvas relative"
          style={fitModeEnabled ? { transform: `scale(${laptopScale})`, transformOrigin: 'top center' } : undefined}
        >
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="language-laptop-fit__title font-display text-[2.1rem] font-black leading-[1.04] text-black sm:text-[2.4rem] lg:text-[3.4rem]">
            {siteContent.language.title}
          </h2>
          <p className="language-laptop-fit__description mx-auto mt-5 max-w-[930px] text-base font-medium leading-[1.26] text-black/58 sm:text-lg lg:text-[2rem] lg:leading-[1.14]">
            {siteContent.language.description}
          </p>
        </div>

        <div className="language-laptop-fit__content relative mt-8 grid items-start gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-6">
          <div className="language-laptop-fit__device-wrap relative mx-auto w-full max-w-[360px] lg:max-w-[520px]">
            <Image
              src={assets.product.languageDevice}
              alt="Front of the Cheeko device showing the fox assistant"
              width={1080}
              height={1520}
              sizes="(max-width: 1024px) 70vw, 620px"
              className="language-laptop-fit__device-image relative z-10 h-auto w-full translate-y-2 scale-[1.01] object-contain sm:translate-y-4 lg:translate-x-[-1.8rem] lg:translate-y-16 lg:scale-[1.1]"
            />
          </div>

          <div className="language-laptop-fit__panel-col lg:pt-16">
            <LanguageSectionLiveDemo selectedLanguage={selectedLanguage} />

            <div className="language-laptop-fit__chip-grid mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
              {LANGUAGE_OPTIONS.map((language) => {
                const isActive = language.id === selectedLanguage.id;
                return (
                  <button
                    type="button"
                    key={language.id}
                    onClick={() => setSelectedLanguageId(language.id)}
                    aria-label={`Select ${language.name}`}
                    className={`language-laptop-fit__chip rounded-[1.1rem] px-3 py-3 text-center transition-all duration-150 sm:px-4 sm:py-4 lg:px-5 lg:py-5 ${
                      isActive
                        ? 'bg-[linear-gradient(180deg,#FFA229_0%,#FF7B2E_100%)] text-white shadow-[0_10px_16px_rgba(246,126,53,0.28)]'
                        : 'bg-[#d9d9d9] text-[#2d313b] hover:bg-[#cfd2d9]'
                    }`}
                  >
                    <p className={`language-laptop-fit__chip-native text-[1.45rem] leading-none sm:text-[1.75rem] ${isActive ? 'font-bold' : 'font-semibold'}`}>
                      {language.nativeLabel}
                    </p>
                    <p className={`language-laptop-fit__chip-name mt-1 text-[1.02rem] sm:text-[1.16rem] ${isActive ? 'text-white/92' : 'text-[#6f7784]'}`}>
                      {language.name}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
