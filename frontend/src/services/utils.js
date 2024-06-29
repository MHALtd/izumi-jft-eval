// Function to generate random numbers using LCM
export function generateRandomNumbersLCM(seed, a, b, m, iterations) {
  let randomNumbers = [];
  let Xn = seed;

  for (let i = 0; i < iterations; i++) {
    Xn = (a * Xn + b) % m;
    randomNumbers.push(Xn);
  }

  return randomNumbers;
}

// Function to get questions based on random numbers generated by LCM
export function getQuestionsByLCM(questions, randomNumbers) {
  let selectedQuestions = [];

  for (let i = 0; i < randomNumbers.length; i++) {
    const index = randomNumbers[i] % questions.length;
    selectedQuestions.push(questions[index]);
  }

  return selectedQuestions;
}
