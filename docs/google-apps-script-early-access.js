/* eslint-disable @typescript-eslint/no-unused-vars */
const SHEET_NAME = 'Early Access Leads';

function doPost(event) {
  const sheet = getOrCreateSheet_();
  const payload = JSON.parse(event.postData.contents || '{}');
  const submittedAt = payload.submittedAt || new Date().toISOString();
  const email = String(payload.email || '').trim().toLowerCase();
  const source = String(payload.source || 'website').trim();
  const userAgent = String(payload.userAgent || '').trim();

  if (!email || !email.includes('@')) {
    return json_({ ok: false, message: 'Invalid email' });
  }

  sheet.appendRow([submittedAt, email, source, userAgent]);

  return json_({ ok: true, message: 'Saved' });
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Submitted At', 'Email', 'Source', 'User Agent']);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function json_(payload, statusCode) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
