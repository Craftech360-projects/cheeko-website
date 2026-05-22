# Cheeko Early Access Google Sheets Setup

This website sends early-access emails to a private Google Sheet through a Google Apps Script web app.

## 1. Create the Sheet

1. Create a new Google Sheet named `Cheeko Early Access`.
2. Open `Extensions > Apps Script`.
3. Paste the script from `docs/google-apps-script-early-access.js`.
4. Save the script.

## 2. Deploy the Apps Script

1. Click `Deploy > New deployment`.
2. Select type: `Web app`.
3. Execute as: `Me`.
4. Who has access: `Anyone`.
5. Deploy and copy the `/exec` web app URL.

## 3. Configure the Website

Add this environment variable locally and in Vercel:

```bash
EARLY_ACCESS_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
```

For local testing, create `.env.local` with that value and restart `npm run dev`.

## Sheet Columns

The script stores:

- `Submitted At`
- `Email`
- `Source`
- `User Agent`
