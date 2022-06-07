"user strict";

{
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    // const results = ["大吉", "吉", "大凶", "末吉"];
    //   const results = ["大吉", "大吉", "大吉", "大吉", "末吉"];

    //   btn.textContent = results[Math.floor(Math.random() * results.length)];

    //確率指定
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = "大吉";//0.5%
    } else if (n < 0.2) {
      btn.textContent = "中吉";
    } else {
      btn.textContent = "小吉";
    }
  });
}
