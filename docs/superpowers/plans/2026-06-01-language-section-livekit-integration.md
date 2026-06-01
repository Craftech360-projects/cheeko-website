# LanguageSection Live Voice Demo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enable `LanguageSection` on `cheeko-website` to start a real LiveKit + Gemini voice session using the existing CheekoAI backend and agent.

**Architecture:** Keep voice-session token generation and agent orchestration in `CheekoAI`, and add a lightweight proxy + client-side LiveKit connector in `cheeko-website`. The UI remains visually unchanged except for interactive call states (idle/connecting/connected/error).

**Tech Stack:** Next.js App Router, TypeScript, LiveKit (`livekit-client`, `livekit-server-sdk`), existing CheekoAI Python agent.

---

## File Map

### CheekoAI repo (`/Users/abrahamaltioai/cheekoai/CheekoAI`)
- Modify: `src/app/api/livekit-gemini-token/route.ts`
- Review: `src/app/api/livekit-token/route.ts`
- Run/verify: `agent/agent.py`

### cheeko-website repo (`/Users/abrahamaltioai/cheeko-website`)
- Create: `src/app/api/livekit-gemini-token/route.ts` (proxy)
- Create: `src/components/sections/LanguageSectionLiveDemo.tsx` (client-only behavior)
- Modify: `src/components/sections/LanguageSection.tsx` (wire interactive component)
- Modify: `src/components/sections/FeaturesAndLanguage.test.tsx`
- Modify: `package.json` (add `livekit-client`)
- Optional create: `src/app/api/livekit-gemini-token/route.test.ts`

---

### Task 1: Finalize Contract Between Frontend and CheekoAI Token API

**Files:**
- Modify: `/Users/abrahamaltioai/cheekoai/CheekoAI/src/app/api/livekit-gemini-token/route.ts`

- [ ] Ensure request params are explicit and validated: `name`, `language`.
- [ ] Ensure response contract is stable and documented in code comments:
  - `token: string`
  - `url: string`
  - `roomName: string`
  - `participantIdentity: string`
  - `error?: string`
- [ ] Normalize failure status codes:
  - `400` for invalid input
  - `403` for time/usage limits
  - `500` for server/config errors
- [ ] Add a short comment block with sample request/response shape for frontend implementers.

**Verification:**
- Use curl:
  - `curl "http://localhost:3000/api/livekit-gemini-token?name=Test&language=English"`
- Expected:
  - `200` JSON with `token` and `url` when valid.

---

### Task 2: Confirm Agent Runtime Readiness

**Files:**
- Review: `/Users/abrahamaltioai/cheekoai/CheekoAI/agent/agent.py`

- [ ] Verify `.env.local` values exist for:
  - `GOOGLE_API_KEY`
  - `LIVEKIT_URL`
  - `LIVEKIT_API_KEY`
  - `LIVEKIT_API_SECRET`
- [ ] Start agent in dev mode and confirm it can auto-join/dispatched room.
- [ ] Validate `build_instructions(...)` receives intended language/name from metadata path.

**Verification:**
- Start CheekoAI app + agent locally.
- Use token endpoint to create a room and verify agent joins within expected time.

---

### Task 3: Add Same-Origin Proxy Route in cheeko-website

**Files:**
- Create: `/Users/abrahamaltioai/cheeko-website/src/app/api/livekit-gemini-token/route.ts`

- [ ] Implement GET route that forwards query params to CheekoAI backend endpoint.
- [ ] Add env var in website:
  - `CHEEKOAI_API_BASE_URL=http://localhost:3000` (or deployed URL)
- [ ] Forward safe headers needed for usage logic (`x-forwarded-for`, `x-real-ip` when available).
- [ ] Return backend status + JSON transparently to the client.
- [ ] Add clear error message when base URL env var is missing.

**Verification:**
- `curl "http://localhost:3001/api/livekit-gemini-token?name=Test&language=English"`
- Expected: same shape/status as backend.

---

### Task 4: Build Client LiveKit Controller for LanguageSection

**Files:**
- Create: `/Users/abrahamaltioai/cheeko-website/src/components/sections/LanguageSectionLiveDemo.tsx`

- [ ] Mark component with `'use client'`.
- [ ] Add state model:
  - `idle | connecting | connected | error`
  - selected language label/code
  - user display name (start with sensible default like `Friend`)
- [ ] On tap/click:
  - call `/api/livekit-gemini-token?name=...&language=...`
  - create `Room` from `livekit-client`
  - `await room.connect(url, token)`
  - enable microphone: `room.localParticipant.setMicrophoneEnabled(true)`
- [ ] Subscribe remote audio:
  - on `RoomEvent.TrackSubscribed`, if audio track, attach and play.
- [ ] Handle disconnect:
  - user stop action
  - connection drop events
  - component unmount cleanup
- [ ] Map errors to user-facing messages inside the existing panel area.

**Verification:**
- Manual:
  - Tap once -> goes to connecting then connected.
  - Remote audio can be heard.
  - Tap stop -> returns to idle cleanly.

---

### Task 5: Integrate Live Demo Controller Into Existing LanguageSection UI

**Files:**
- Modify: `/Users/abrahamaltioai/cheeko-website/src/components/sections/LanguageSection.tsx`

- [ ] Keep current visual hierarchy and desktop/mobile styling unchanged.
- [ ] Replace static “Tap to Listen” button behavior with the live demo controller props/events.
- [ ] Keep `id="language"` anchor unchanged for top-nav jump.
- [ ] Ensure button label/state changes:
  - idle: `Tap to Listen`
  - connecting: `Connecting...`
  - connected: `End Demo`
  - error: `Retry`

**Verification:**
- Manual responsive test on mobile + desktop: no layout shift/cutoff.

---

### Task 6: Add Minimal Language Selection Mapping

**Files:**
- Modify: `/Users/abrahamaltioai/cheeko-website/src/components/sections/LanguageSectionLiveDemo.tsx`
- Optional modify: `/Users/abrahamaltioai/cheeko-website/src/data/site-content.ts`

- [ ] Reuse visible language chips as selectable options.
- [ ] Store canonical backend value per chip (e.g., `English`, `Hindi`, `Kannada`).
- [ ] Keep default pre-selected language matching current UI (`Kannada`).

**Verification:**
- Select language chip, start call, verify backend receives selected language query param.

---

### Task 7: Tests in cheeko-website

**Files:**
- Modify: `/Users/abrahamaltioai/cheeko-website/src/components/sections/FeaturesAndLanguage.test.tsx`
- Optional create: `/Users/abrahamaltioai/cheeko-website/src/app/api/livekit-gemini-token/route.test.ts`

- [ ] Update existing section test to validate interactive button states and labels.
- [ ] Mock fetch for token request success/failure.
- [ ] Verify no regressions in existing headings/content assertions.
- [ ] Add API proxy test for missing env and pass-through behavior.

**Verification commands:**
- `npm run test -- src/components/sections/FeaturesAndLanguage.test.tsx`
- `npm run test -- src/app/api/livekit-gemini-token/route.test.ts` (if added)

---

### Task 8: Dependency, Env, and Local Runbook

**Files:**
- Modify: `/Users/abrahamaltioai/cheeko-website/package.json`
- Add/update docs: `/Users/abrahamaltioai/cheeko-website/README.md` (or setup doc)

- [ ] Add dependency: `livekit-client`.
- [ ] Document required env vars in both repos:
  - Website: `CHEEKOAI_API_BASE_URL`
  - CheekoAI: `LIVEKIT_*`, `GOOGLE_API_KEY`, `JWT_SECRET`, DB envs used by usage checks.
- [ ] Document startup order:
  1. Start LiveKit + CheekoAI Next app
  2. Start Cheeko agent process
  3. Start cheeko-website app

**Verification:**
- Fresh terminal setup reproduces successful voice demo in LanguageSection.

---

### Task 9: Production Hardening (Before Launch)

**Files:**
- Modify: `/Users/abrahamaltioai/cheekoai/CheekoAI/src/app/api/livekit-gemini-token/route.ts`
- Modify: `/Users/abrahamaltioai/cheeko-website/src/app/api/livekit-gemini-token/route.ts`

- [ ] Add lightweight request logging with redaction (no token logs).
- [ ] Add timeout on website proxy fetch (abort after e.g., 10s).
- [ ] Add retry guidance in frontend UI for timeout / 403 / mic denied.
- [ ] Confirm `ENABLE_AGENT_DISPATCH` behavior for production.

**Verification:**
- Simulate timeout and backend 403; verify user gets actionable message and retry path.

---

### Task 10: QA Checklist and Acceptance Criteria

- [ ] `Try Demo` navigation jumps to `#language`.
- [ ] Tap-to-listen starts real session and receives remote audio.
- [ ] Mobile layout remains clean (no clipping, no compressed text).
- [ ] Disconnect always cleans room/audio resources.
- [ ] 403 time-limit path shows friendly message.
- [ ] No desktop regressions in existing sections.

**Definition of Done:**
LanguageSection is no longer static: users can start/stop a real voice demo session safely on mobile and desktop using the existing CheekoAI token + agent pipeline.
