// Add or remove legend names here. For each name, drop an image into the "legends" folder
// named in lowercase with dashes, e.g. "Miss Fortune" -> legends/miss-fortune.png
// (.png, .jpg, .jpeg and .webp all work). Names without an image just show a letter.
//
// ART VERSIONS: file name = legend name (lowercase-dashes) + the version's key.
//   ahri.png = original, ahria.png = alt art, ahris.png = alt art signed
// Only versions that have an image file show up in the sub menu after tapping a legend.
// Add your own custom versions by adding a line below and naming files the same way
// (keys can be one or more letters/digits). Suggested reserved keys for custom art:
//   'c' (custom), 'c1', 'c2', 'c3' ... or 'x', 'y', 'z'.  e.g. ahric.png, ahric2.png
// Avoid ending a key in a way that makes one file name match another legend's name.
window.VARIANTS = [
  { key: '',   label: 'Original' },
  { key: 'a',  label: 'Alt art' },
  { key: 's',  label: 'Alt art signed' },
  // --- reserved for custom art (uncomment / rename as you add images) ---
  { key: 'c',  label: 'Custom' },
  { key: 'c1', label: 'Custom' },
  { key: 'c2', label: 'Custom' },
  { key: 'c3', label: 'Custom' },
  { key: 'c4', label: 'Custom' },
  { key: 'c5', label: 'Custom' },
  { key: 'c6', label: 'Custom' },
  { key: 'c7', label: 'Custom' },
];

// SEPARATE ENTRIES SHARING A NAME: if a legend's file name can't be made from its display name,
// map it here. Display name -> file base name (versions are still added on the end).
// "Master Yi (XP)" uses master-yi2.png / master-yi2a.png / master-yi2s.png
window.LEGEND_FILES = {
  "Master Yi (Proving Grounds)": "master-yi",
  "Master Yi (XP)": "master-yi2"
};

window.LEGENDS = [
  // --- USER'S INITIAL LIST ---
  "Jinx", "Viktor", "Lux", "Ahri", "Darius", "Garen", "Master Yi (Proving Grounds)", "Master Yi (XP)", "Leona",
  "Teemo", "Mordekaiser", "Sivir", "Miss Fortune", "Kai'Sa", "Lee Sin", "Volibear", "Yasuo",
  "Irelia", "Azir", "Renata Glasc", "Rumble", "Fiora", "Draven", "Jax", "Ezreal", "Sett",
  "Annie", "Ivern", "Lucian", "Poppy", "Shen", "Vex", "Vi", "Zed", "Kennen", 
  "Diana", "Jayce", "LeBlanc", "Nasus", "Ornn", "Pyke", "Rek'Sai", "Renekton", 
  "Rengar", "Kha'Zix", "Lillia","Ekko", "Seraphine", "Evelynn", "Ziggs", "Jarvan IV", "Orianna", 
  "K'Sante", "Riven", "Akali", "Ambessa", "Jhin", "Mel"
];
