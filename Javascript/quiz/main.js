"user strict";

{
  const question = document.getElementById("question");
  const choices = document.getElementById("choices");
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");
  const scoreLabel = document.querySelector("#result > p");

  const quizSet = shuffle([
    { q: "世界で一番大きな湖は?", c: ["カスピ海", "カリブ海", "琵琶湖"] },
    { q: "2の8乗は?", c: ["256", "64", "1024"] },
    {
      q: "次の内最初にリリースされた言語は?",
      c: ["Python", "Javascript", "HTML"],
    },
  ]);
  ///問題と解答内容を選択する為に使用する値
  let currentNum = 0;
  let isAnswerd;
  let score = 0;

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
      //正解すれば正解数が1加算される。
      score++;
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

    //最後の問題になると表示されるテキストを変更する。
    if (currentNum === quizSet.length - 1) {
      btn.textContent = "Show Score";
    }
  }

  setQuiz();

  btn.addEventListener("click", () => {
    if (btn.classList.contains("disabled")) {
      return;
    }

    btn.classList.add("disabled");

    if (currentNum === quizSet.length - 1) {
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      result.classList.remove("hidden");
    } else {
      currentNum++;
      setQuiz();
    }     
  });
}