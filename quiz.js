// This function will run when the user submits their answer
function checkAnswer() {
    // 1. Identify the correct answer
    const correctAnswer = "4";

    // 2. Retrieve the user's answer (the checked radio with name="quiz")
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback paragraph
    const feedback = document.getElementById("feedback");

    // If no option is selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // 3. Compare userAnswer with correctAnswer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// 4. Add an event listener to the Submit Answer button
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer); // no () here
});
