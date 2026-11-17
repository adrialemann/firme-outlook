var BADGE_BASE64 = "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";
/*
 * Firme Team Service - componente aggiuntivo personale per Outlook web
 * Inserisce la firma giusta in base al mittente (campo "Da"):
 *  - quando si apre una nuova mail, una risposta o un inoltro
 *  - quando si cambia il mittente
 *
 * PER AGGIUNGERE O MODIFICARE UNA CASELLA: modifica solo l'elenco CASELLE qui sotto.
 */

var CASELLE = {
  "a.alemanno@team-service.it": {
    nome: "Ing. Adriano Alemanno",
    telefoni: ["+39 081 562 82 21"]
  },
  "info@team-service.it": {
    nome: "Team Service S.r.l.",
    telefoni: ["+39 081 562 82 21"]
  },
  "contabilita@team-service.it": {
    nome: "Ufficio Contabilità",
    telefoni: ["+39 081 562 82 21"]
  },
  "amministrazione@team-service.it": {
    nome: "Ufficio Amministrazione",
    telefoni: ["+39 081 562 82 21"]
  }
};

var NOME_IMMAGINE = "firma-24ore.png";

/* ---------- Costruzione della firma (stessa grafica di quella attuale) ---------- */

function escapeHtml(t) {
  return String(t)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function costruisciFirma(indirizzo, nomeVisualizzato, imgSrc) {
  var dati = CASELLE[indirizzo] || { nome: nomeVisualizzato || "Team Service S.r.l.", telefoni: ["+39 081 562 82 21"] };
  var nome = escapeHtml(dati.nome);
  var mail = escapeHtml(indirizzo);
  var cal = "font-family:Calibri,Helvetica,sans-serif;";
  var tbl = 'style="border-collapse:collapse;border-spacing:0;margin:0"';

  var telefoni = "";
  for (var i = 0; i < dati.telefoni.length; i++) {
    telefoni += '<div style="' + cal + 'font-size:15px;line-height:17px;color:#000000">Phone. ' + escapeHtml(dati.telefoni[i]) + "</div>";
  }

  return (
    '<div style="font-family:Aptos,Calibri,Helvetica,sans-serif;font-size:12pt;color:#000000"><br></div>' +
    "<table " + tbl + "><tr>" +
      // Colonna sinistra: logo Business Partner 24 ORE + motto
      '<td style="width:182px;text-align:center;vertical-align:middle">' +
        '<img src="' + (imgSrc || ("cid:" + NOME_IMMAGINE)) + '" width="160" height="82" alt="Business Partner Il Sole 24 ORE" style="display:block;margin:0 auto;border:0">' +
        '<div style="' + cal + 'font-size:11pt;line-height:1.2;color:#000000;padding-top:6px"><i>Dal 1994 al fianco delle imprese con oltre 190 centri in Italia.</i></div>' +
      "</td>" +
      '<td style="width:10px"></td>' +
      '<td style="width:1px;background-color:#666666"></td>' +
      '<td style="width:10px"></td>' +
      // Colonna destra: dati
      '<td style="vertical-align:top">' +
        '<div style="' + cal + 'font-size:17px;line-height:19px;color:#0063AD"><b>' + nome + "</b></div>" +
        '<div style="' + cal + 'font-size:15px;line-height:17px"><a href="mailto:' + mail + '" style="color:#1155CC"><b>' + mail + "</b></a></div>" +
        '<div style="height:3px;line-height:3px;font-size:1px">&nbsp;</div>' +
        telefoni +
        '<div style="' + cal + 'font-size:15px;line-height:17px;color:#000000">Web. <a href="http://www.team-service.it/" style="color:#1155CC">www.team-service.it</a></div>' +
        '<div style="' + cal + 'font-size:15px;line-height:17px;color:#000000">Sede Legale Via Dino Buzzati, 4/1 e 4/2, 31044 Montebelluna&nbsp; TV, IT<br>Sede Operativa Centro Direzionale Is. E/7, 80143 Napoli NA, IT</div>' +
        '<div style="' + cal + 'font-size:15px;line-height:17px;color:#000000;padding-top:17px">&nbsp; <b>Business Partner Il Sole 24 ORE</b></div>' +
      "</td>" +
    "</tr></table>" +
    '<div style="font-family:Aptos,Calibri,Helvetica,sans-serif;font-size:12pt;color:#000000"><br></div>' +
    '<table style="color:#666666"><tr><td style="' + cal + 'font-size:9px;line-height:1">' +
      "* I centri Team Service sono gestiti da imprenditori indipendenti che operano come intermediari tra utenti ed enti pubblici e privati, non sostituendosi in nessun caso all’ente erogatore del servizio ed avvalendosi, in alcuni casi, della collaborazione di professionisti abilitati. Utilizzano il marchio Team Service per effetto di un contratto di franchising." +
    '</td></tr><tr><td style="' + cal + 'font-size:9px;line-height:1;padding-top:5px">Riservatezza e sicurezza del messaggio e-mail</td></tr>' +
    '<tr><td style="' + cal + 'font-size:9px;line-height:1">' +
      "Il contenuto delle e-mail spedite da Team Service S.r.l. è riservato ed è rivolto esclusivamente al/ai destinatario/i identificato/i. Pertanto è proibito leggerlo, copiarlo, divulgarlo o utilizzarlo da parte di chiunque salvo il/i destinatario/i. Se non siete il destinatario, vi invitiamo a cancellare il messaggio ed eventuali allegati dandocene immediatamente comunicazione scritta a mezzo posta elettronica. Sebbene Team Service S.r.l. si impegni ad adottare le misure più idonee per assicurare l'assenza di virus all'interno di eventuali allegati alla presente comunicazione e-mail, tali misure non costituiscono una garanzia assoluta e pertanto vi invitiamo a porre in essere i vostri controlli antivirus prima di aprire qualsiasi allegato. Team Service S.r.l. non si assume quindi alcuna responsabilità per eventuali danni che potreste subire a causa di virus contenuti nei messaggi." +
    "</td></tr></table>"
  );
}

/* ---------- Logica ---------- */

var URL_IMMAGINE = "https://adrialemann.github.io/firme-outlook/assets/badge-24ore.png";

function log(m) { try { console.log("[Firme TS] " + m); } catch (e) {} }

// Inserisce la firma. usaAllegato=true: logo incorporato nella mail (come la firma attuale);
// se l'operazione sugli allegati non riesce si usa il logo pubblicato su GitHub.
function inserisciFirma(item, usaAllegato, poi) {
  item.from.getAsync(function (res) {
    if (res.status !== Office.AsyncResultStatus.Succeeded || !res.value) {
      log("from.getAsync non riuscito: " + (res.error && res.error.message));
      poi(); return;
    }
    var indirizzo = (res.value.emailAddress || "").toLowerCase();
    log("mittente: " + indirizzo);

    var scrivi = function (imgSrc) {
      var html = costruisciFirma(indirizzo, res.value.displayName, imgSrc);
      item.body.setSignatureAsync(html, { coercionType: Office.CoercionType.Html }, function (r) {
        if (r.status !== Office.AsyncResultStatus.Succeeded) { log("setSignatureAsync errore: " + (r.error && r.error.message)); }
        poi();
      });
    };

    if (!usaAllegato) { scrivi(URL_IMMAGINE); return; }

    item.getAttachmentsAsync(function (a) {
      if (a.status !== Office.AsyncResultStatus.Succeeded) { scrivi(URL_IMMAGINE); return; }
      for (var i = 0; i < a.value.length; i++) {
        if (a.value[i].name === NOME_IMMAGINE) { scrivi(null); return; }
      }
      item.addFileAttachmentFromBase64Async(BADGE_BASE64, NOME_IMMAGINE, { isInline: true }, function (r) {
        scrivi(r.status === Office.AsyncResultStatus.Succeeded ? null : URL_IMMAGINE);
      });
    });
  });
}

// Controllo continuo del mittente: Outlook web non sempre avvisa il componente quando si
// cambia il campo "Da", quindi ogni 1,5 secondi controlliamo noi chi è il mittente e,
// se è cambiato, rimettiamo la firma giusta. Il controllo dura finché la mail è aperta
// (al massimo 30 minuti).
var ultimoMittente = null;
var controlloAttivo = false;

function avviaControlloMittente(item, fine) {
  if (controlloAttivo) { return; }
  controlloAttivo = true;
  var inizio = Date.now();
  var occupato = false;
  var timer = setInterval(function () {
    if (Date.now() - inizio > 30 * 60 * 1000) {
      clearInterval(timer); controlloAttivo = false; fine(); return;
    }
    if (occupato) { return; }
    item.from.getAsync(function (res) {
      if (res.status !== Office.AsyncResultStatus.Succeeded || !res.value) { return; }
      var ora = (res.value.emailAddress || "").toLowerCase();
      if (ora && ora !== ultimoMittente) {
        log("mittente cambiato: " + ultimoMittente + " -> " + ora);
        occupato = true;
        ultimoMittente = ora;
        // breve attesa: Outlook prima toglie la vecchia firma, poi inseriamo la nuova
        setTimeout(function () {
          inserisciFirma(item, true, function () {
            setTimeout(function () { inserisciFirma(item, true, function () { occupato = false; }); }, 1500);
          });
        }, 700);
      }
    });
  }, 1500);
}

function onNewMessageComposeHandler(event) {
  var item = Office.context.mailbox.item;
  item.from.getAsync(function (res) {
    if (res.status === Office.AsyncResultStatus.Succeeded && res.value) {
      ultimoMittente = (res.value.emailAddress || "").toLowerCase();
    }
    inserisciFirma(item, true, function () {
      avviaControlloMittente(item, function () { event.completed(); });
    });
  });
}

// Al cambio del mittente Outlook toglie la firma e, subito dopo, applica la firma predefinita
// del nuovo mittente (nessuna). Per non farci sovrascrivere, la reinseriamo e poi la
// reinseriamo ancora dopo un attimo.
function onMessageFromChangedHandler(event) {
  var item = Office.context.mailbox.item;
  inserisciFirma(item, true, function () {
    setTimeout(function () {
      inserisciFirma(item, true, function () {
        setTimeout(function () {
          inserisciFirma(item, true, function () { event.completed(); });
        }, 2000);
      });
    }, 800);
  });
}

// Quando si aggiungono o cambiano i destinatari (A, Cc, Ccn) la firma viene ricontrollata:
// dopo il cambio del "Da" basta inserire il destinatario e la firma si aggiorna.
function onMessageRecipientsChangedHandler(event) {
  log("destinatari cambiati");
  inserisciFirma(Office.context.mailbox.item, true, function () { event.completed(); });
}

function applicaFirmaPulsante(event) {
  inserisciFirma(Office.context.mailbox.item, true, function () { event.completed(); });
}

Office.onReady(function () {});
Office.actions.associate("onNewMessageComposeHandler", onNewMessageComposeHandler);
Office.actions.associate("onMessageFromChangedHandler", onMessageFromChangedHandler);
Office.actions.associate("onMessageRecipientsChangedHandler", onMessageRecipientsChangedHandler);
Office.actions.associate("applicaFirmaPulsante", applicaFirmaPulsante);
