const quiz = new Quiz(sorular);
const ui = new UI();

ui.startBtn.addEventListener("click", function () {
  ui.quizBox.classList.add("active");
  ui.timeCount.innerText = `10`
  startTimer(9)
  startProgress()
  ui.soruGoster(quiz.soruGetir());
  ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  ui.giris.classList.add("girisDiss");
});

ui.nextBtn.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    quiz.soruIndex += 1;
    ui.timeCount.innerText = `10`

    clearInterval(counter)
    startTimer(9)
    clearInterval(counterProgress)
    startProgress()
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  } else {
    clearInterval(counter)
    clearInterval(counterProgress)
    ui.quizBox.classList.add("dissplayedWrong")
    ui.giris.style = "display : none"
    ui.contResult.classList.remove("deleteResult")
  }
  ui.nextBtn.classList.add("dissplayed");
  ui.btn_skip.classList.remove("dissplaySkipBtn");
});

var kalanHak = 2;
var skipCount = 0;

let right = `Right of Pass : ${kalanHak}`;
document.querySelector(".card-footer .passRight").innerHTML = right;


ui.btn_skip.addEventListener("click", function () {
  
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    if(kalanHak !== 0){
          ui.timeCount.innerText = `10`

          clearInterval(counter)
          startTimer(9)
          clearInterval(counterProgress)
          startProgress()
    }
    
    skipCount++;
    if (skipCount <= 2) {
      quiz.soruIndex += 1;
      ui.soruGoster(quiz.soruGetir());
      ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
      quiz.bosCevapSayisi += 1;
    } else {
      ui.wrong_skip.classList.remove("dissplayedWrong");
        setTimeout(() => {
        ui.wrong_skip.classList.add("dissplayedWrong");
      }, 2000);
    }
  } else {
    if(kalanHak == 0){
      ui.wrong_skip.classList.remove("dissplayedWrong");
        setTimeout(() => {
        ui.wrong_skip.classList.add("dissplayedWrong");
      }, 2000);
    }else{
      clearInterval(counter)
      startTimer(10)
      clearInterval(counterProgress)
      startProgress()
      
      ui.quizBox.classList.add("dissplayedWrong")
      ui.giris.style = "display : none"
      ui.contResult.classList.remove("deleteResult")
      quiz.bosCevapSayisi += 1;

    }
  }
  if (kalanHak <= 0) {
      kalanHak = 0;
    } else {
      kalanHak--;
    }
    let right = `Right of Pass : ${kalanHak}`;
    document.querySelector(".card-footer .passRight").innerHTML = right;
  ui.updateResultElement()
});


function optionSelected(option) {
  clearInterval(counter)
  clearInterval(counterProgress)
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.soruGetir();
  if (soru.cevabiKontrolEt(cevap)) {
    option.classList.remove("incorrect");
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
    quiz.dogruCevapSayisi += 1
    
  } else {
    option.classList.remove("correct");
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    quiz.yanlisCevapSayisi += 1
  }

  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }
  if((quiz.dogruCevapSayisi * 20) < 50){
    quiz.successStatus = "Unsuccess"
  }else{
    quiz.successStatus = "Success"
  }

  if(quiz.successStatus == "Success"){
    document.querySelector(".unSuccessMessage").classList.add("dissplayedWrong")
    document.querySelector(".successMessage").classList.remove("dissplayedWrong")
    document.querySelector(".themeSelect").classList.add("success_result")
    document.querySelector(".themeSelect").classList.remove("failed_result")
  }else{
    document.querySelector(".successMessage").classList.add("dissplayedWrong")
    document.querySelector(".unSuccessMessage").classList.remove("dissplayedWrong")
    document.querySelector(".themeSelect").classList.add("failed_result")
    document.querySelector(".themeSelect").classList.remove("success_result")
  }
  ui.updateResultElement()

  ui.btn_skip.classList.add("dissplaySkipBtn");
  ui.nextBtn.classList.remove("dissplayed");
}

let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    ui.timeCount.textContent = time;
    time--;

    if(time < 0){
      clearInterval(counter)

      let cevap = quiz.soruGetir().dogruCevap

      for (let option of ui.option_list.children) {
        if(option.querySelector("span b").textContent == cevap){
          option.classList.remove("incorrect");
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
          ui.btn_skip.classList.add("dissplaySkipBtn");
          ui.nextBtn.classList.remove("dissplayed");
        }
        option.classList.add("disabled")
      }
    }
  }
}

let counterProgress;
function startProgress(){
  let lineWidth = 0

  counterProgress = setInterval(timerProgress, 18);

  function timerProgress() {
    lineWidth += 1;
    ui.timeLine.style.width = lineWidth + "px";
    if(lineWidth > 565){
      clearInterval(counterProgress)
      quiz.yanlisCevapSayisi += 1;
    }
  }
  
}