import type { ExtendedLanguageCode } from "@/types/settings";

type RandomStrings = {
  [key in ExtendedLanguageCode]: {
    random: string;
    randomOptions: string;
    numWords: string;
    where: string;
  };
};

const strings: RandomStrings = {
  de: {
    random: "Zufall",
    randomOptions: "ZUFALLSOPTIONEN",
    numWords: "Anzahl der zufälligen Wörter",
    where: "wo...",
  },
  en: {
    random: "Random",
    randomOptions: "RANDOM OPTIONS",
    numWords: "Number of Random Words",
    where: "where...",
  },
  es: {
    random: "Aleatorio",
    randomOptions: "OPCIONES ALEATORIAS",
    numWords: "Número de palabras aleatorias",
    where: "donde...",
  },
  eo: {
    random: "Hazarda",
    randomOptions: "HAZARDAJ OPCIOJ",
    numWords: "Nombro de hazardaj vortoj",
    where: "kie...",
  },
  et: {
    random: "Juhuslik",
    randomOptions: "JUHUSLIKE VALIKUTE",
    numWords: "Juhuslike sõnade arv",
    where: "kus...",
  },
  fr: {
    random: "Aléatoire",
    randomOptions: "OPTIONS ALÉATOIRES",
    numWords: "Nombre de mots aléatoires",
    where: "où...",
  },
  hu: {
    random: "Véletlen",
    randomOptions: "VÉLETLEN BEÁLLÍTÁSOK",
    numWords: "Véletlenszerű szavak száma",
    where: "hol...",
  },
  nl: {
    random: "Willekeurig",
    randomOptions: "WILLEKEURIGE OPTIES",
    numWords: "Aantal willekeurige woorden",
    where: "waar...",
  },
  nx: {
    random: "renulke",
    randomOptions: "tìftxey",
    numWords: "holpxay lì'uä",
    where: "hu...",
  },
  pl: {
    random: "Losowy",
    randomOptions: "OPCJE LOSOWE",
    numWords: "Liczba losowych słów",
    where: "gdzie...",
  },
  ru: {
    random: "Случайный",
    randomOptions: "СЛУЧАЙНЫЕ ОПЦИИ",
    numWords: "Количество случайных слов",
    where: "где...",
  },
  sv: {
    random: "Slumpmässig",
    randomOptions: "SLUMPMÄSSIGA ALTERNATIV",
    numWords: "Antal slumpmässiga ord",
    where: "var...",
  },
  tr: {
    random: "Rastgele",
    randomOptions: "RASGELE SEÇENEKLER",
    numWords: "Rastgele Kelime Sayısı",
    where: "nerede...",
  },
};

export default strings;