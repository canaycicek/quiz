function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
  this.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap;
  };
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};


let sorular = [
    new Soru("1- Hangisi javascript paket yönetim uygulamasıdır?", {a : "Node.js", b : "Typescript", c : "Npm"}, "c"),
    new Soru("2- Hangisi javascript paket yönetim uygulamasıdır?", {a : "Node.js", b : "Typescript", c : "Npm", d : "Nuget"}, "a"),
    new Soru("3- Hangisi javascript paket yönetim uygulamasıdır?", {a : "Node.js", b : "Typescript", c : "Npm", d : "Nuget"}, "c"),
    new Soru("4- Hangisi javascript paket yönetim uygulamasıdır?", {a : "Node.js", b : "Typescript", c : "Npm", d : "Nuget"}, "c"),
    new Soru("5- Hangisi javascript paket yönetim uygulamasıdır?", {a : "Node.js", b : "Typescript", c : "Npm", d : "Nuget"}, "c"),
];