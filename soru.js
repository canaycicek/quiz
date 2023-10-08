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
    new Soru("1- Hangisi javascript paket yönetim uygulamasıdır?", {a : "Node.js", b : "Typescript", c : "Npm", d : "Nuget" }, "c"),
    new Soru("2- Hangisi frontend kapsamında değerlendirilmez?", {a : "CSS", b : "HTML", c : "JavaScript", d : "SQL"}, "d"),
    new Soru("3- Hangisi backend kapsamında değerlendirilir?", {a : "Node.js", b : "Typescript", c : "Angular", d : "React"}, "a"),
    new Soru("4- Hangisi javascript programlama dilini kullanmaz?", {a : "React", b : "Angular", c : "Vue.js", d : "Asp.net"}, "d"),
    new Soru("5- Hangi dilin kısaltması 'HTML' dir?", {a: "Hypertext Markup Language", b: "Hyper Transfer Markup Language", c: "High Text Markup Language", d: "Hyper Tool Markup Language"}, "a")
];

