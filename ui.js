function UI() {
    this.startBtn = document.querySelector(".btn-start"),
    this.quizBox = document.querySelector(".quiz_box"),
    this.nextBtn = document.querySelector(".next_btn"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.btn_skip = document.querySelector(".btn_skip"),
    this.wrong_skip = document.querySelector(".wrongSkip"),
    this.giris = document.querySelector(".giris"),
    this.contResult = document.querySelector(".contResult")
    this.timeCount = document.querySelector(".timer")
    this.timeLine = document.querySelector(".timeLine")
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

UI.prototype.updateResultElement = function () {
    document.querySelector(".result").innerHTML = `
        <h1>Results</h1>
        <ul class="list-group">
          <li>True : ${quiz.dogruCevapSayisi}</li>
          <li>False : ${quiz.yanlisCevapSayisi}</li>
          <li>Empty : ${quiz.bosCevapSayisi}</li>
          <li>Point : ${quiz.dogruCevapSayisi * 20}</li>
          <li>Success Status : ${quiz.successStatus}</li>
        </ul>
    `
}

