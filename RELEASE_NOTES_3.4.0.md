# 3.4.0 — To-do due-date colors

## English

- New option **Mark date-only tasks red after the day ends**, under **To-do mode → Warning thresholds**. When enabled, a task without a due time turns red at the next local midnight. The option is off by default; timed tasks keep their exact deadlines.
- All four orange warning thresholds now accept **0 = advance warning off** in both the visual editor and YAML. Empty or omitted values retain the existing defaults.
- Date-only warnings and countdowns use the same local calendar boundary, including daylight-saving changes. Date-only values are also displayed on their original local calendar date in time zones west of UTC.
- Existing due-date filters and category counters retain their behavior. The Android HTML/PDF export fix and category-chip auto-collapse from previous releases are preserved.
- Test files have been removed from the published branches and remain local to development.

Example: `todo_date_only_end_of_day: true` with all four `todo_yellow_*` values set to `0` leaves today's date-only tasks in the normal theme text color until the day has ended.

Validated with 24 due-date/configuration/editor checks across four languages and four time zones, 12 existing category-chip checks, and native Home Assistant browser comparisons.

Update through HACS and refresh open dashboards to load the new JavaScript.

## Deutsch

- Neue Option **Aufgaben ohne Uhrzeit erst nach Tagesende rot markieren**, unter **To-do-Modus → Warnschwellen**. Aktiviert beginnt die rote Markierung am nächsten lokalen Tagesbeginn. Die Option ist standardmäßig aus; Aufgaben mit Uhrzeit behalten ihren genauen Termin.
- Alle vier orangenen Warnschwellen akzeptieren jetzt **0 = Vorwarnung aus**, sowohl im visuellen Editor als auch in YAML. Leere oder nicht angegebene Werte verwenden weiterhin die bisherigen Standardwerte.
- Datumsfarben und Restzeit verwenden dieselbe lokale Tagesgrenze, auch bei Sommerzeitwechseln. Reine Datumsangaben werden auch westlich von UTC auf ihrem ursprünglichen Kalendertag angezeigt.
- Datumsfilter und Kategorie-Zähler behalten ihren bisherigen Ablauf. Der Android-Fix für HTML-/PDF-Exporte und das automatische Einklappen der Kategoriechips bleiben erhalten.
- Testdateien wurden aus den veröffentlichten Branches entfernt und bleiben lokal für die Entwicklung erhalten.

Beispiel: Mit `todo_date_only_end_of_day: true` und allen vier `todo_yellow_*`-Werten auf `0` bleiben heutige Aufgaben ohne Uhrzeit bis zum Tagesende in der normalen Textfarbe des Themes.

Geprüft mit 24 Fälligkeits-/Konfigurations-/Editorprüfungen in vier Sprachen und vier Zeitzonen, 12 vorhandenen Kategoriechip-Prüfungen und Browservergleichen mit echten Home-Assistant-To-do-Einträgen.

Über HACS aktualisieren und offene Dashboards neu laden, damit das neue JavaScript geladen wird.
