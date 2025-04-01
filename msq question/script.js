
    let score = 0;

    function nextQuestion(questionNumber) {
        const selectedAnswer = document.querySelector('input[name="q' + questionNumber + '"]:checked');
        if (selectedAnswer) {
            // Checking correct answer for each question
                if ((questionNumber === 1 && selectedAnswer.value === 'C') || 
                    (questionNumber === 2 && selectedAnswer.value === 'C') || 
                    (questionNumber === 3 && selectedAnswer.value === 'B') || 
                    (questionNumber === 4 && selectedAnswer.value === 'A') || 
                    (questionNumber === 5 && selectedAnswer.value === 'A')) {
                score++;
            }
        }

        // Hide current question
        document.getElementById('question' + questionNumber).classList.add('hidden');
        
        // Show next question
        if (questionNumber < 5) {
            document.getElementById('question' + (questionNumber + 1)).classList.remove('hidden');
        }
    }

    function submitQuiz() {
        // Calculate and show final score
        document.getElementById('question5').classList.add('hidden');
        const resultDiv = document.getElementById('result');
        resultDiv.classList.remove('hidden');
        resultDiv.innerText = 'Your Score: ' + score + ' / 5';
    }

