"use strict";

const inputField = document.querySelector("#iname");
const bodyStyle = document.querySelector("body").style;
const resultText = document.querySelector(".result").querySelector(".text");
const countdownText = document
  .querySelector(".countdown")
  .querySelector(".number");
const submitButton = document.querySelector("#button1");
const restartButton = document.querySelector("#button2");
const guessList = document.querySelector(".guessList");

const addLi = (content) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(content));
  guessList.appendChild(li);
};
const removeLi = () => {
  while (guessList.firstChild) guessList.removeChild(guessList.firstChild);
};
// functions to show or hide the messages and pictures
const removeClass = (textOrWrong) =>
  document
    .querySelector(".result")
    .querySelector(`.${textOrWrong}`)
    .classList.remove("hide");

const addClass = (textOrWrong) =>
  document
    .querySelector(".result")
    .querySelector(`.${textOrWrong}`)
    .classList.add("hide");

const toggleHide = (toggleHide, textOrWrong) =>
  toggleHide === "hide" ? addClass(textOrWrong) : removeClass(textOrWrong);

const switchPicture = (number, toggleHide) => {
  imageClassNum = numPictures.get(number);
  toggleHide === "hide"
    ? document.querySelector(`.${imageClassNum}`).classList.add("hide")
    : document.querySelector(`.${imageClassNum}`).classList.remove("hide");
};

let chosenLetter, countdown, imageClassNum, chosenWord, firstLetter, asterix;

const numPictures = new Map();
numPictures.set(10, "basic");
numPictures.set(9, "head");
numPictures.set(8, "eye1");
numPictures.set(7, "eye2");
numPictures.set(6, "nose");
numPictures.set(5, "mouth");
numPictures.set(4, "body");
numPictures.set(3, "arm1");
numPictures.set(2, "arm2");
numPictures.set(1, "leg1");
numPictures.set(0, "leg2");

const words =
  "abbau abgeordnete abkommen ablehnung abschied abschluss abschnitt absicht abstand abstimmung abteilung aktie aktion aldi allianz alter alternative analyse anbieter anerkennung anforderung anfrage angebot angriff angst anklage anlage anlass anleger anschlag ansicht anspruch anstieg anteil antrag antwort anwalt anwendung anzeige arbeitgeber arbeitslosigkeit arbeitsplatz arbeitsschritt armee artikel arzt aufbau auffassung aufgabe aufmerksamkeit aufnahme auftakt auftrag auftritt auge augenblick ausbildung ausdruck auseinandersetzung ausgabe ausgleich auskunft ausland ausnahme aussage aussicht ausstellung auswirkung auto autobahn autor bahn bahnhof ball band bank basis bau bauer baum bedarf bedeutung bedingung begegnung beginn begriff behandlung beispiel beitrag belastung benutzer beobachter beratung bereitschaft berg bericht beruf berufung besitz bestand besuch besucher beteiligung betrag betrieb bewegung beweis bewertung bewohner bewusstsein bezeichnung beziehung bier bilanz bildung blatt blick blut bmw boden botschaft branche brand brief buch bund bundesliga bundesrepublik bundeswehr bus chance charakter computer dach dank darstellung dauer debatte demokratie demonstrant denken detail dialog dienst dienstleistung ding direktor diskussion dokumentation dorf drittel druck dutzend ebene ecke ehe eindruck einfluss einheit einigung einkommen einnahme einrichtung einsatz einstellung einstieg einwohner energie engagement entwurf erde ereignis erfahrung erinnerung erkenntnis erwartung erweiterung essen eu euro existenz fahrt fahrzeug fall falle farbe februar fehler feld fenster fernsehen fest feuer feuerwehr figur finale finanzierung firma flucht flughafen folge fond forderung forscher forschung fortsetzung foto fraktion freiheit freude frieden funktion fusion galerie gang garten gast geben gebiet geburtstag gedanke gefahr gegensatz gegenteil gegenwart geist gelegenheit gemeinde genehmigung generation gericht gesetz gesicht gestalt gestaltung gesundheit gewalt gewerkschaft gewicht gewinn gold grad grenze grundlage gutachten haft halle haltung handel haushalt heimat hektar herbst herkunft hersteller herstellung herz himmel hintergrund hinweis hof hoffnung holz hotel idee image industrie inhalt initiative insel institut inszenierung integration interesse internet interview investition investor israel jahrhundert jahrzehnt job journalist jugendliche justiz kabinett kamera kampf kapital kapitel karriere karte kasse katastrophe kauf keller kenntnis kennzeichen kern kilogramm kilometer kino kirche klage klasse klima koalition kollege kommission kommune kommunikation kompromiss konferenz konflikt kongress konkurrenz konsequenz kontakt kontrolle konzept konzern konzert kooperation kopf kraft krankenhaus krankheit kreis krieg krise kritik kultur kunst kurs lager landkreis landschaft landtag landwirtschaft lehre leistung leitung licht liebe linie liste liter literatur luft lust macht management manager mannschaft marke maschine material mauer medium meer mehrheit meinung meister menge methode minister mischung mitarbeiter mitte mitteilung mittel mittelpunkt modell moderne moment mord morgen motto mund museum mut nachbar nachfrage nachmittag nachricht nacht nase nation natur netz neubau nichts niederlage niveau norden not notwendigkeit nummer nutzung objekt oper opposition ordnung organisation ort osten papier parlament partie partner patient pause person personal pfarrer pflanze pflege pflicht pfund phase plan planung position post posten praxis preis premiere prinzip privatisierung produkt produktion professor projekt protest provinz prozess punkt quadratmeter quartal rahmen rand rang rat rathaus raum reaktion rebell rechnung recht rede reform regel regelung regen regie region reich reihe reise rennen republik rest revolution richtung risiko roman ruhe runde saal sache saison sammlung sanierung schaden schatten schauspieler schicksal schiff schloss schluss schreiben schriftsteller schritt schuld schule schutz schwerpunkt schwierigkeit see seele sekunde senat sender serie service sicherheit sicht sieg sinn situation sitz sitzung sms software soldat sommer sonne sorge spannung spiegel spielen spitze sport sprache sprecherin spur staat staatsanwaltschaft stand standort start status steigerung stein stelle stellung stellungnahme steuer stiftung stil stimme stimmung stoff strategie strecke streit strom struktur student studie studium suche summe szene tabelle tat tatsache tausend technik teilnahme teilnehmer telefon telekom tempo tendenz termin text theater theorie tier tisch titel tod ton tonne tor tote tourist tradition training traum treffen trend trennung typ umfang umfeld umfrage umgang umgebung umsatz umsetzung umwelt unfall unterschied untersuchung urlaub ursache urteil variante veranstalter veranstaltung verantwortung verband verbesserung verbindung verbraucher verbrechen verdacht verein vereinbarung vereinigung verfahren verfassung vergangenheit vergleich verhalten verhandlung verkauf verkehr verlag verlauf verletzung verlust version versuch verteidigung vertrag vertrauen vertrieb verwaltung verwendung verzicht viertel volk voraussetzung vorbereitung vorbild vorgang vorgehen vorhaben vorlage vorschlag vorsitzende vorstellung vorteil vortrag vorwurf wachstum waffe wagen wahl wahlkampf wahrheit wald wand ware wasser wechsel weihnachten welt weltmeister wende werbung werk wert westen wettbewerb wetter widerspruch widerstand wind winter wirklichkeit wirkung wissen wissenschaft wissenschaftler wochenende wohnung wort wunder wunsch zeichen zeitpunkt zeitraum zeitschrift zeitung zelle zentimeter zentrum zeuge zimmer zins zug zugang zusammenhang zustand zustimmung zweck zweifel".split(
    " "
  );
const initial = () => {
  removeLi();
  chosenLetter = "";
  countdown = 10;
  let random = Math.trunc(Math.random() * words.length);
  chosenWord = words[random];
  firstLetter = chosenWord.slice(0, 1).toUpperCase();
  asterix = "";
  console.log(chosenWord);

  // calculate hidden word
  for (let i = 0; i < chosenWord.length; i++) asterix += "*";

  countdownText.textContent = countdown;
  bodyStyle.backgroundColor = "rgb(179, 179, 179)";

  //change pictures
  for (let i = 9; i >= 0; i--) switchPicture(i, "hide");

  imageClassNum = 10;
  switchPicture(imageClassNum, "show");
  resultText.textContent = `Das Wort ist ${asterix}`;
  toggleHide("show", "text");
  inputField.focus();
};
initial();

// on submit
submitButton.addEventListener("click", function () {
  chosenLetter = inputField.value.toLowerCase();

  // if countdown is greater 1 and the word contains the guessed letter
  if (countdown > 1) {
    if (chosenWord.includes(chosenLetter)) {
      for (let i = 0; i < asterix.length; i++) {
        // remove asterix and insert letter
        if (chosenWord[i] === chosenLetter)
          asterix =
            asterix.slice(0, i) +
            chosenLetter +
            asterix.slice(i + 1, asterix.length);
      }
      // write first letter big
      if (asterix[0] === chosenLetter)
        asterix = firstLetter + asterix.slice(1, asterix.length);

      // show result texts
      toggleHide("hide", "wrong");
      toggleHide("show", "text");
      resultText.textContent = `Das Wort ist ${asterix}`;
      inputField.value = "";
      inputField.focus();
    }
    // if word doesn't contain the chosen letter
    else {
      countdown--;
      countdownText.textContent = countdown;
      toggleHide("hide", "text");
      toggleHide("show", "wrong");
      switchPicture(countdown, "show");
      switchPicture(countdown + 1, "hide");

      // add li Element to ul, which contains the chosen letter
      addLi(`${chosenLetter}`);

      // hide the message after 2.5 seconds
      setTimeout(() => {
        toggleHide("hide", "wrong");
        toggleHide("show", "text");
      }, 2500);

      inputField.value = "";
      inputField.focus();
    }
    // repeat until asterix does't contain '*'
    // if player won
    if (!asterix.includes("*")) {
      resultText.textContent = `Das Wort ist "${asterix}", du hast gewonnen!`;
      bodyStyle.backgroundColor = "rgb(79, 199, 79)";
      inputField.value = "";
    }
  }
  // if player lost
  else {
    toggleHide("show", "text");
    switchPicture(0, "show");
    switchPicture(1, "hide");
    resultText.textContent = `Leider verloren! Das Wort wäre "${
      firstLetter + chosenWord.slice(1, chosenWord.length)
    }" gewesen.`;
    countdownText.textContent = 0;
    bodyStyle.backgroundColor = "rgb(197, 68, 68)";
    inputField.value = "";
  }
});
// on restart
restartButton.addEventListener("click", initial);
