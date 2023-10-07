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
    console.log("quiz bitti");
  }
  ui.nextBtn.classList.add("dissplayed");
  ui.btn_skip.classList.remove("dissplaySkipBtn");
});

var kalanHak = 2;
var skipCount = 0;

let right = `Right of Pass : ${kalanHak}`;
document.querySelector(".card-footer .passRight").innerHTML = right;

ui.btn_skip.addEventListener("click", function () {
  if (kalanHak <= 0) {
    kalanHak = 0;
  } else {
    kalanHak--;
  }
  let right = `Right of Pass : ${kalanHak}`;
  document.querySelector(".card-footer .passRight").innerHTML = right;

  if (quiz.sorular.length != quiz.soruIndex + 1) {
    skipCount++;
    if (skipCount <= 2) {
      quiz.soruIndex += 1;
      ui.soruGoster(quiz.soruGetir());
      ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    } else {
      ui.wrong_skip.classList.remove("dissplayedWrong");
      setTimeout(() => {
        ui.wrong_skip.classList.add("dissplayedWrong");
      }, 2000);
    }
  } else {
    console.log("quiz bitti");
  }
});

function optionSelected(option) {
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.soruGetir();

  if (soru.cevabiKontrolEt(cevap)) {
    option.classList.remove("incorrect");
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.remove("correct");
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
  }

  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }
  ui.btn_skip.classList.add("dissplaySkipBtn");
  ui.nextBtn.classList.remove("dissplayed");
}
