const superhelte = [
  {
    navn: "Superwoman",
    køn: "Kvinde",
    tøj: "Kjole",
    egenskaber: ["flyve", "styrke", "usårlighed"],
  },
  {
    navn: "Superman",
    køn: "Mand",
    tøj: "Dragt",
    egenskaber: ["kræfter", "styrke", "flyve", "varmeblik"],
  },
];

const skabelon = document.querySelector("#minSkabelon").content;

superhelte.forEach(visSuperhelt);

function visSuperhelt(superhelt) {
  //   console.log(superhelt);
  const klon = skabelon.cloneNode(true);
  klon.querySelector("h1").textContent = superhelt.navn;
  klon.querySelector("h2").textContent = superhelt.køn;
  klon.querySelector("h3").textContent = superhelt.tøj;
  klon.querySelector("div").textContent = superhelt.egenskaber;
  document.querySelector("main").appendChild(klon);
}
