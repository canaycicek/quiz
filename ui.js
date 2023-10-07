function UI() {
    this.startBtn = document.querySelector(".btn-start"),
    this.quizBox = document.querySelector(".quiz_box"),
    this.nextBtn = document.querySelector(".next_btn"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.btn_skip = document.querySelector(".btn_skip")
    this.wrong_skip = document.querySelector(".wrongSkip")
    this.giris = document.querySelector(".giris")
    this.pass_right = document.querySelector("passRight")
}

UI.prototype.soruGoster = function(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = "";

    for(let cevap in soru.cevapSecenekleri){
        options +=
        `
            <div class="option">
                <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
            </div>
        `
    }
    document.querySelector(".question_text").innerHTML = question
    this.option_list.innerHTML = options

    const optionAll = this.option_list.querySelectorAll(".option")
    
    optionAll.forEach(option => {
        option.setAttribute("onclick", "optionSelected(this)")
    });
}

UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru) {
    let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`
    document.querySelector(".quiz_box .question_index").innerHTML = tag
}

UI.prototype.kalanPassSayi = function (kalanHak) {
    let right = `Right of Pass : ${kalanHak}`
    document.querySelector(".card-footer .passRight").innerHTML = right
}