const quiz = new Quiz(sorular);
const ui = new UI();

ui.startBtn.addEventListener("click", function () {
  ui.quizBox.classList.add("active");
  ui.soruGoster(quiz.soruGetir());
  ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  ui.giris.classList.add("girisDiss");
});

ui.nextBtn.addEventListener("click", function () {

  if (quiz.sorular.length != quiz.soruIndex + 1) {
    quiz.soruIndex += 1;
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  } else {
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
  ui.updateResultElement()

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

  ui.btn_skip.classList.add("dissplaySkipBtn");
  ui.nextBtn.classList.remove("dissplayed");
}
