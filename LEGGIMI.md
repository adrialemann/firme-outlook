# Firme Team Service – componente aggiuntivo per Outlook web

Inserisce da solo la firma giusta quando apri una nuova mail, una risposta o un inoltro, e la cambia quando modifichi il campo "Da".

Caselle già configurate (in `firme.js`, elenco `CASELLE`):
- a.alemanno@team-service.it → Ing. Adriano Alemanno
- info@team-service.it → Team Service S.r.l.
- contabilita@team-service.it → Ufficio Contabilità
- amministrazione@team-service.it → Ufficio Amministrazione

Per qualsiasi altro indirizzo usa la stessa grafica con il nome visualizzato della casella.

## 1. Pubblicare i file (GitHub Pages, gratuito)
1. Crea un account su github.com (se non ce l'hai).
2. In alto a destra **+** → **New repository** → nome `firme-outlook`, **Public** → **Create repository**.
3. Clic su **uploading an existing file** e trascina: `commands.html`, `firme.js` e la cartella `assets` (NON serve caricare `manifest.xml`). **Commit changes**.
4. **Settings** → **Pages** → Source: **Deploy from a branch**, Branch: **main** / **(root)** → **Save**.
5. Dopo 1-2 minuti l'indirizzo è `https://TUONOMEUTENTE.github.io/firme-outlook/`.
   Prova ad aprire `https://TUONOMEUTENTE.github.io/firme-outlook/assets/icon-64.png`: se vedi l'icona blu "TS", è pubblicato.

## 2. Preparare il manifest
Apri `manifest.xml` con Blocco note → Modifica → Sostituisci:
- Trova: `BASE_URL`
- Sostituisci con: `https://TUONOMEUTENTE.github.io/firme-outlook`  (senza barra finale)
- **Sostituisci tutto**, poi salva.

## 3. Installare in Outlook web
1. Apri Outlook web e vai su `https://aka.ms/olksideload`.
2. **I miei componenti aggiuntivi** → in fondo **Componenti aggiuntivi personalizzati** → **Aggiungi un componente aggiuntivo personalizzato** → **Aggiungi da file** → scegli `manifest.xml` → **Installa**.
3. Ricarica Outlook web.

## 4. Togliere le firme predefinite di Outlook
Impostazioni → Account → Firme → in "Seleziona firme predefinite" metti **(nessuna firma)** sia per i nuovi messaggi sia per risposte/inoltri, per ogni casella. Così non compaiono due firme.

## 5. Prova
- Nuova mail → la firma "Ing. Adriano Alemanno" compare da sola.
- Cambia "Da" in contabilita@ → la firma diventa "Ufficio Contabilità".
- Se una volta non compare: nella finestra di scrittura, menu dei componenti aggiuntivi → **Applica firma**.

## Modifiche future
Per aggiungere una casella o cambiare un testo: modifica `firme.js` direttamente su GitHub (icona matita) e salva. Non serve reinstallare nulla: Outlook prende la nuova versione al successivo riavvio (a volte serve qualche minuto per la cache).
