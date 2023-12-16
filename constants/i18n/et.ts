import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "vtr.": "transitiivne verb",
  "n.": "nimisõna",
  "num.": "number",
  "pn.": "asemäärsõna",
  "adv.": "adverb",
  "adj.": "omadussõna",
  "vin.": "intransitiivne verb",
  "inter.": "interrogatiiv",
  "part.": "partikkel",
  "adp.": "adpositsioon",
  "adv., n.": "adverb, nimisõna",
  "vtrm.": "transitiivne modaalverb",
  "vim.": "intransitiivne modaalverb",
  "conj.": "sidesõna",
  "sbd.": "subordinatiiv",
  "n., intj.": "nimisõna, interjektsioon",
  "intj.": "interjektsioon",
  "part., intj.": "partikkel, interjektsioon",
  "prop.n.": "pärisnimi",
  "vin., intj.": "intransitiivne verb, interjektsioon",
  "adj., n.": "omadussõna, nimisõna",
  "adj., adv.": "omadussõna, adverb",
  "adj., intj.": "omadussõna, interjektsioon",
  "adv., intj.": "adverb, interjektsioon",
  "ph.": "fraas",
  "adj., conj.": "omadussõna, sidesõna",
  "inter., intj.": "interrogatiiv, interjektsioon",
  "adv., conj.": "adverb, sidesõna",
  "vin., vtr.": "intransitiivne või transitiivne verb",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  value,
  name,
}));

const strings: UITranslation = {
  common: {
    results: (count) => (count === 1 ? "tulemus" : "tulemused"),
    noResults: "tulemusi pole",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Otsing",
    list: "Nimekiri",
    random: "Juhuslik",
    numbers: "Numbrid",
    names: "Nimed",
    settings: "Seaded",
  },
  search: {
    search: "Otsing",
    audio: "Audio",
    partOfSpeech: "Sõnaliik",
    definition: "Definitsioon",
    breakdown: "Silbitus",
    infixDots: "Infixes (dots)",
    infixSlots: "Infixes (slots)",
    prefixes: "Eesliited",
    infixes: "Infixes",
    suffixes: "Tagasõnad",
    lenition: "Lenition",
    comment: "Kommentaar",
    source: "Allikas",
    ipa: "IPA",
  },
  list: {
    list: "Nimekiri",
    listOptions: "Loendi Valikud",
    listMenu: {
      whatValues: [
        { value: "pos", description: "kõne osa" },
        { value: "word", description: "sõna" },
        {
          value: "words",
          description: "sõnad väljalaske järjekorras",
        },
        { value: "syllables", description: "silpide arv" },
        { value: "stress", description: "rõhutatud silbi asend" },
        { value: "length", description: "sõna pikkus foneemides" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "algab" },
          { value: "ends", description: "lõpeb" },
          { value: "is", description: "on" },
          { value: "has", description: "on" },
          { value: "like", description: "on nagu" },
          { value: "not-starts", description: "ei alga" },
          { value: "not-ends", description: "ei lõpe" },
          { value: "not-is", description: "pole" },
          { value: "not-has", description: "pole" },
          { value: "not-like", description: "pole nagu" },
        ],
        word: [
          { value: "starts", description: "algab" },
          { value: "ends", description: "lõpeb" },
          { value: "has", description: "on" },
          { value: "like", description: "on nagu" },
          { value: "not-starts", description: "ei alga" },
          { value: "not-ends", description: "ei lõpe" },
          { value: "not-has", description: "pole" },
          { value: "not-like", description: "pole nagu" },
        ],
        words: [
          { value: "first", description: "vanimad sõnad" },
          { value: "last", description: "uusimad sõnad" },
        ],
        syllables: [
          { value: "<", description: "väiksem kui" },
          { value: "<=", description: "väiksem kui või võrdne" },
          { value: "=", description: "võrdne" },
          { value: ">=", description: "suurem kui või võrdne" },
          { value: ">", description: "suurem kui" },
          { value: "!=", description: "pole võrdne" },
        ],
        stress: [
          { value: "<", description: "väiksem kui" },
          { value: "<=", description: "väiksem kui või võrdne" },
          { value: "=", description: "võrdne" },
          { value: ">=", description: "suurem kui või võrdne" },
          { value: ">", description: "suurem kui" },
          { value: "!=", description: "pole võrdne" },
        ],
        length: [
          { value: "<", description: "väiksem kui" },
          { value: "<=", description: "väiksem kui või võrdne" },
          { value: "=", description: "võrdne" },
          { value: ">=", description: "suurem kui või võrdne" },
          { value: ">", description: "suurem kui" },
          { value: "!=", description: "pole võrdne" },
        ],
      },
    },
    and: "ja...",
  },
  random: {
    random: "Juhuslik",
    randomOptions: "Juhuslike Valikute",
    numWords: "Juhuslike sõnade arv",
    where: "kus...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  names: {
    single: "Üksik",
    full: "Täielik",
    alu: "Alu",
    options: "Valikud",
    numNames: "Genereeritavate nimede arv",
    dialect: "Dialekt",
    dialects: [
      { name: "interdialektiline", value: "interdialect" },
      { name: "metsa", value: "forest" },
      { name: "rifi", value: "reef" },
    ],
    syllablesOptions: [
      { name: "juhuslik", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "Silpide arv",
  },
  nameFull: {
    numSyllables1: "Eesnime silpide arv",
    numSyllables2: "Perekonnanime silpide arv",
    numSyllables3: "Vanema nime silpide arv",
    nameEnding: "Nime lõpp",
    nameEndingHint:
      "-'itan meessoost, -'ite naissoost, -'itu mitte-binaarne (mitte-kanoniline)",
    nameEndingOptions: [
      { value: "random", name: "juhuslik" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Eesnime silpide arv",
    nounMode: "Substantiivirežiim",
    adjMode: "Omadussõnarežiim",
    nounModes: [
      { name: "midagi", value: "something" },
      { name: "tavaline substantiiv", value: "normal noun" },
      { name: "verb-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "mis tahes", value: "any" },
      { name: "midagi", value: "something" },
      { name: "mitte ükski", value: "none" },
      { name: "tavaline omadussõna", value: "normal adjective" },
      { name: "omastavas käändes substantiiv", value: "genitive noun" },
      { name: "päritolu substantiiv", value: "origin noun" },
      { name: "partitsiipverb", value: "participle verb" },
      { name: "aktiivne partitsiipverb", value: "active participle verb" },
      { name: "passiivne partitsiipverb", value: "passive participle verb" },
    ],
  },
  settings: {
    about: "Info",
    version: "Versioon",
    credits: "Autorid",
    development: "Arendus",
    design: "Disain",
    testing: "Testimine",
    translation: "Tõlge",
    appLanguage: "Rakenduse keel",
    resultsLanguage: "Tulemuste keel",
  },
};

export default strings;
