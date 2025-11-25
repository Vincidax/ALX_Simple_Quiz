function checkAnswer() {
    const correctAnswer = "4";
    const feedbackDiv = document.getElementById("feedback");

    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    if (userAnswer === correctAnswer) {
        feedbackDiv.textContent = "Correct! Well done.";
        feedbackDiv.style.color = "green";
    } else {
        feedbackDiv.textContent = "That's incorrect. Try again!";
        feedbackDiv.style.color = "red";
    }
}

const btn = document.getElementById("submit-answer");
btn.addEventListener("click", checkAnswer);
