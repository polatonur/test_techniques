// Historique des lectures
const readings = [
  { id: 1, serieId: 2 },
  { id: 2, serieId: 2 },
  { id: 3, serieId: 5 },
  { id: 4, serieId: 2 },
  { id: 5, serieId: 1 },
  { id: 6, serieId: 3 },
  { id: 7, serieId: 1 },
  { id: 8, serieId: 4 },
  { id: 9, serieId: 3 },
  { id: 10, serieId: 5 },
  { id: 11, serieId: 5 },
  { id: 12, serieId: 4 },
];

// Liste des séries
const series = [
  { id: 1, name: "Twelve", collections: [1, 4, 5] },
  { id: 2, name: "Invisible", collections: [4, 6, 2] },
  { id: 3, name: "Tombée pour lui", collections: [2] },
  { id: 4, name: "Les Gardiens", collections: [1, 3, 5] },
  { id: 5, name: "Sous mon meilleur profil", collections: [1] },
];

// Liste des collections
const collections = [
  { id: 1, name: "SF" },
  { id: 2, name: "Romance" },
  { id: 3, name: "Histoire" },
  { id: 4, name: "Crimes" },
  { id: 5, name: "Horreur" },
  { id: 6, name: "Société" },
];

const getCollectionRanking = () => {
  const results = [];
  for (let i = 0; i < collections.length; i++) {
    let newObbj = collections[i];
    collections[i].readings = 0;
    results.push(collections[i]);
  }

  for (let i = 0; i < readings.length; i++) {
    const serie = readings[i].serieId;
    series[serie - 1].collections.forEach((elem) => {
      collections[elem - 1].readings += 1;
    });
  }
  results.sort(function (a, b) {
    return b.readings - a.readings;
  });
  console.log(results);
};
getCollectionRanking();
