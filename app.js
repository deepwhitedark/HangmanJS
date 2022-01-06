"use strict";

const wordsEmpty = [];

let test =
  "abbau abgeordnete abkommen ablehnung abschied abschluss abschnitt absicht abstand abstimmung abteilung aktie aktion aktionär aktivität aldi allianz alter alternative analyse anbieter anerkennung anforderung anfrage angebot angriff angst anklage anlage anlass anleger anschlag ansicht anspruch anstieg anteil antrag antwort anwalt anwendung anzeige arbeitgeber arbeitslosigkeit arbeitsplatz arbeitsschritt armee artikel arzt atmosphäre aufbau auffassung aufgabe aufklärung aufmerksamkeit aufnahme auftakt auftrag auftritt auge augenblick ausbildung ausdruck auseinandersetzung ausgabe ausgleich auskunft ausland ausländer ausnahme aussage aussicht ausstellung auswirkung auto autobahn autor bahn bahnhof ball band bank basis bau bauer baum bedarf bedeutung bedingung begegnung beginn begriff begründung behandlung behörde beispiel beitrag belastung benutzer beobachter beratung bereitschaft berg bericht beruf berufung beschäftigte beschäftigung besitz bestand besuch besucher beteiligung betrag betrieb bevölkerung bewegung beweis bewertung bewohner bewusstsein bezeichnung beziehung bier bilanz bildung blatt blick blut bmw boden botschaft branche brand brief brücke buch bund bundesliga bundesrepublik bundeswehr bus börse bühne bündnis bürgermeister büro chance charakter computer dach dank darstellung dauer debatte demokratie demonstrant denken detail dialog dienst dienstleistung ding direktor diskussion dokumentation dorf drittel druck dutzend ebene ecke ehe eindruck einfluss einführung einheit einigung einkommen einnahme einrichtung einsatz einschätzung einstellung einstieg einwohner energie engagement entwurf erde ereignis erfahrung erhöhung erinnerung erkenntnis erklärung erwartung erweiterung eröffnung essen eu euro existenz fahrt fahrzeug fall falle farbe februar fehler feld fenster fernsehen fest feuer feuerwehr figur finale finanzierung firma flucht flughafen fläche flüchtling folge fond forderung forscher forschung fortsetzung foto fraktion freiheit freude frieden funktion fusion fuß fußball förderung führer führung fünf galerie gang garten gast geben gebiet geburtstag gebäude gedanke gefahr gefängnis gefühl gegensatz gegenteil gegenwart geist gelegenheit gelände gemeinde genehmigung generation gericht geschäft gesetz gesicht gespräch gestalt gestaltung gesundheit gewalt gewerkschaft gewicht gewinn glück gold grad grenze grundlage größe gründung gutachten haft halle haltung handel haushalt heimat hektar herbst herkunft hersteller herstellung herz himmel hintergrund hinweis hof hoffnung holz hotel hälfte händler höhepunkt idee identität image industrie inhalt initiative insel institut inszenierung integration interesse internet interview investition investor israel jahrhundert jahrzehnt job journalist jugendliche justiz kabinett kamera kampf kapital kapitel karriere karte kasse katastrophe kauf keller kenntnis kennzeichen kern kilogramm kilometer kino kirche klage klasse klima koalition kollege kommission kommune kommunikation kompromiss konferenz konflikt kongress konkurrenz konsequenz kontakt kontrolle konzept konzern konzert kooperation kopf kraft krankenhaus krankheit kreis krieg krise kritik kultur kunst kurs könig körper künstler lager landkreis landschaft landtag landwirtschaft lehre leistung leitung licht liebe linie liste liter literatur luft lust länge lösung macht management manager mannschaft marke maschine material mauer maß maßnahme medium meer mehrheit meinung meister menge methode minister mischung mitarbeiter mitte mitteilung mittel mittelpunkt modell moderne moment mord morgen motto mund museum mut möglichkeit nachbar nachfrage nachmittag nachricht nacht nase nation natur netz neubau nichts niederlage niveau norden not notwendigkeit nummer nutzung nähe objekt oper opposition ordnung organisation ort osten papier parlament partie partner patient pause person personal pfarrer pflanze pflege pflicht pfund phase plan planung position post posten praxis preis premiere prinzip privatisierung produkt produktion professor projekt protest provinz prozess prüfung punkt quadratmeter qualität quartal rahmen rand rang rat rathaus raum reaktion realität rebell rechnung recht rede reform regel regelung regen regie region reich reihe reise rennen republik rest revolution richtung risiko roman ruhe runde rücken rückgang rückkehr rücktritt rückzug saal sache saison sammlung sanierung schaden schatten schauspieler schicksal schiff schloss schluss schlüssel schreiben schriftsteller schritt schuld schule schutz schwerpunkt schwierigkeit see seele sekunde senat sender serie service sicherheit sicht sieg sinn situation sitz sitzung sms software soldat sommer sonne sorge spannung spaß spiegel spielen spitze sport sprache sprecherin spur staat staatsanwaltschaft stand standort start status steigerung stein stelle stellung stellungnahme steuer stiftung stil stimme stimmung stoff strategie straße strecke streit strom struktur student studie studium stärke stück suche summe szene süden tabelle tat tatsache tausend technik teilnahme teilnehmer telefon telekom tempo tendenz termin text theater theorie tier tisch titel tod ton tonne tor tote tourist tradition training traum treffen trend trennung typ tätigkeit tür umfang umfeld umfrage umgang umgebung umsatz umsetzung umwelt unabhängigkeit unfall universität unterschied unterstützung untersuchung urlaub ursache urteil variante veranstalter veranstaltung verantwortung verband verbesserung verbindung verbraucher verbrechen verdacht verein vereinbarung vereinigung verfahren verfassung verfügung vergangenheit vergleich verhalten verhandlung verhältnis verkauf verkehr verlag verlauf verletzung verlust version verständnis versuch verteidigung vertrag vertrauen vertrieb verwaltung verwendung verzicht veränderung viertel volk voraussetzung vorbereitung vorbild vorgang vorgehen vorhaben vorlage vorschlag vorsitzende vorstellung vorteil vortrag vorwurf wachstum waffe wagen wahl wahlkampf wahrheit wald wand ware wasser wechsel weihnachten welt weltmeister wende werbung werk wert westen wettbewerb wetter widerspruch widerstand wind winter wirklichkeit wirkung wissen wissenschaft wissenschaftler wochenende wohnung wort wunder wunsch währung zeichen zeitpunkt zeitraum zeitschrift zeitung zelle zentimeter zentrum zeuge zimmer zins zug zugang zusammenhang zustand zustimmung zweck zweifel änderung ärger äußerung überlegung übernahme";

const words = wordsEmpty.concat(test.split(" "));

let countdown = Number(
  document.querySelector(".countdown").querySelector(".number").textContent
);

// set focus on input field
document.querySelector("#iname").focus();

// generate random number
let random = Math.trunc(Math.random() * words.length);

let chosenWord = words[random];
let firstLetter = chosenWord.substring(0, 1).toUpperCase();
let asterix = "";
let chosenLetter = "";

// iterate over array word and convert to asterix
for (let i = 0; i < chosenWord.length; i++) {
  asterix += "*";
}

document
  .querySelector(".result")
  .querySelector(".text").textContent = `Das Wort ist ${asterix}`;
text("show");

// on clicking the button1
document.querySelector("#button1").addEventListener("click", function () {
  chosenLetter = document.querySelector("#iname").value.toLowerCase();

  //handle countdown
  if (countdown > 1) {
    // if word contains the chosen letter
    if (chosenWord.includes(chosenLetter)) {
      for (let i = 0; i < asterix.length; i++) {
        if (chosenWord[i] === chosenLetter) {
          // remove asterix and insert letter
          asterix =
            asterix.substring(0, i) +
            chosenLetter +
            asterix.substring(i + 1, asterix.length);
        }
      }
      // write first letter big
      if (asterix[0] === chosenLetter) {
        asterix = firstLetter + asterix.substring(1, asterix.length);
      }
      // show result texts

      wrong("hide");
      text("show");
      document
        .querySelector(".result")
        .querySelector(".text").textContent = `Das Wort ist ${asterix}`;
      document.querySelector("#iname").value = "";
      document.querySelector("#iname").focus();

      // if word doesn't contain the chosen letter
    } else {
      countdown--;
      document
        .querySelector(".countdown")
        .querySelector(".number").textContent = countdown;
      text("hide");
      wrong("show");

      // hide the message after 3 seconds
      setTimeout(() => {
        wrong("hide");
        text("show");
      }, 3000);

      document.querySelector("#iname").value = "";
      document.querySelector("#iname").focus();
    }

    // repeat until asterix does't contain '*'
    // if player won
    if (!asterix.includes("*")) {
      document
        .querySelector(".result")
        .querySelector(
          ".text"
        ).textContent = `Das Wort ist "${asterix}", du hast gewonnen!`;

      document.querySelector("body").style.backgroundColor = "rgb(0, 158, 0)";
      document.querySelector("#iname").value = "";
    }

    // if player lost
  } else {
    text("show");
    document
      .querySelector(".result")
      .querySelector(".text").textContent = `Leider verloren! Das Wort wäre "${
      firstLetter + chosenWord.substring(1, chosenWord.length)
    }" gewesen.`;
    document
      .querySelector(".countdown")
      .querySelector(".number").textContent = 0;
    document.querySelector("body").style.backgroundColor = "rgb(139, 0, 0)";
    document.querySelector("#iname").value = "";
  }
});

// on clicking button 2
document.querySelector("#button2").addEventListener("click", function () {
  document.querySelector("#iname").focus();
  chosenLetter = "";

  document.querySelector("body").style.backgroundColor = "rgb(68, 68, 68)";

  //reset countdown
  countdown = 10;
  document.querySelector(".countdown").querySelector(".number").textContent =
    countdown;

  // generate random number
  random = Math.trunc(Math.random() * words.length);

  chosenWord = words[random];
  firstLetter = chosenWord.substring(0, 1).toUpperCase();
  asterix = "";

  // iterate over array word and convert to asterix
  for (let i = 0; i < chosenWord.length; i++) {
    asterix += "*";
  }
  document
    .querySelector(".result")
    .querySelector(".text").textContent = `Das Wort ist ${asterix}`;
  text("show");
});

// functions to show or hide the messages
function text(showOrHide) {
  switch (showOrHide) {
    case (showOrHide = "show"):
      document
        .querySelector(".result")
        .querySelector(".text")
        .classList.remove("d-none");
      break;
    case (showOrHide = "hide"):
      document
        .querySelector(".result")
        .querySelector(".text")
        .classList.add("d-none");
  }
}

function wrong(showOrHide) {
  switch (showOrHide) {
    case (showOrHide = "show"):
      document
        .querySelector(".result")
        .querySelector(".wrong")
        .classList.remove("d-none");
      break;
    case (showOrHide = "hide"):
      document
        .querySelector(".result")
        .querySelector(".wrong")
        .classList.add("d-none");
  }
}
