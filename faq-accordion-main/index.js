function toggleAnswer(quesId, ansId, imgId) {
  let ques = document.getElementById(quesId);
  let ans = document.getElementById(ansId);
  let img = document.getElementById(imgId);

  [ques, img].forEach(function (ques) {
    ques.addEventListener("click", () => {
      // console.log(ques);
      if (ans.style.display === "block") {
        ans.style.display = "none";
        img.src = "./assets/images/icon-plus.svg";
      } else {
        ans.style.display = "block";
        img.src = "./assets/images/icon-minus.svg";
      }
    });
  });
}
toggleAnswer("question1", "answer1", "img1");
toggleAnswer("question2", "answer2", "img2");
toggleAnswer("question3", "answer3", "img3");
toggleAnswer("question4", "answer4", "img4");
