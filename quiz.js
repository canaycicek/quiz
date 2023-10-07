function Quiz(sorular) {
    this.sorular = sorular
    this.soruIndex = 0
    this.dogruCevapSayisi = 0
    this.yanlisCevapSayisi = 0
    this.bosCevapSayisi = 0
    this.successStatus = " "
}

Quiz.prototype.soruGetir = function () {
    return this.sorular[this.soruIndex]
}