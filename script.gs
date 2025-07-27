const SHEET_NAME = 'Feuille 1'; // change selon ta feuille

function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  const players = [];

  for (let i = 1; i < data.length; i++) {
    players.push({
      name: data[i][0],
      date: data[i][1],
      clicks: data[i][2],
    });
  }

  return ContentService.createTextOutput(JSON.stringify(players)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const body = JSON.parse(e.postData.contents);
  const name = body.name;
  const newDate = body.date;
  const newClicks = body.clicks;

  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === name) {
      sheet.getRange(i + 1, 2).setValue(newDate);
      sheet.getRange(i + 1, 3).setValue(newClicks);
      return ContentService.createTextOutput('Updated');
    }
  }

  sheet.appendRow([name, newDate, newClicks]);
  return ContentService.createTextOutput('Added');
}

function doDelete(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const nameToDelete = e.parameter.name;
  const data = sheet.getDataRange().getValues();

  for (let i = data.length - 1; i >= 1; i--) {
    if (data[i][0] === nameToDelete) {
      sheet.deleteRow(i + 1);
      return ContentService.createTextOutput('Deleted');
    }
  }
  return ContentService.createTextOutput('Not found');
}

// Optionnel : nettoyage automatique des joueurs expirés
function removeExpiredPlayers() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  const today = new Date();

  for (let i = data.length - 1; i > 0; i--) {
    const date = new Date(data[i][1]);
    if (date < today) {
      sheet.deleteRow(i + 1);
    }
  }
}
