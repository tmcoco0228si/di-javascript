"user strict";

{
  const question = document.getElementById("question");
  const choices = document.getElementById("choices");
  const btn = document.getElementById("btn");

  const quizSet = [
    { q: "what is A?", c: ["A0", "A1", "A2"] },
    { q: "what is B?", c: ["B0", "B1", "B2"] },
    { q: "what is C?", c: ["C0", "C1", "C2"] },
  ];
  let currentNum = 0;

  //問題シャッフル
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  //正誤判定
  function checkAnswer(li) {
    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add("correct");
    } else {
      li.classList.add("wrong");
    }

    btn.classList.remove("disabled");
  }

  function setQuiz() {
    question.textContent = quizSet[currentNum].q;

    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    //スプレット構文にすることで、関数の引数にオブジェクトを渡した際には、オブジェクトの参照を渡すのではなく、値を渡すようにしている。
    const shuffledChoices = shuffle([...quizSet[currentNum].c]);

    // console.log(quizSet[currentNum].c);
    shuffledChoices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });
  }

  setQuiz();

  btn.addEventListener("click", () => {
    currentNum++;
    setQuiz();
  });
}
