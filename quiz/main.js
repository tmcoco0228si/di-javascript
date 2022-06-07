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
  //配列quizSetの
  question.textContent = quizSet[currentNum].q;
  quizSet[currentNum].c.forEach(choice => {
      const li = document.createElement("li");
      li.textContent = choice;
      choices.appendChild(li)
  })
}
