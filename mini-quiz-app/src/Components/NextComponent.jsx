import React, { useState } from 'react';

const OpenQuestionsApp = () => {
  // State to store form input values and question data
  const [userData, setUserData] = useState({
    firstName: '',
    category: '',
    difficulty: ''
  });

  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Categories and difficulty levels supported by the API
  const categories = [
    { name: 'General Knowledge', value: 9 },
    { name: 'Entertainment: Film', value: 11 },
    { name: 'Science: Computers', value: 18 },
    { name: 'Geography', value: 22 }
  ];
  const difficulties = ['easy', 'medium', 'hard'];

  // Function to handle form submission and API call
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    // Check if all fields are filled out
    if (!userData.firstName || !userData.category || !userData.difficulty) {
      setErrorMessage('All fields are required!');
      return;
    }

    setErrorMessage('');
    setIsSubmitted(true);

    // Fetch the question data from the API
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=1&type=multiple&category=${userData.category}&difficulty=${userData.difficulty}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setQuestionData(data.results[0]);
        setIsError(false);
      } else {
        setIsError(true);
        setErrorMessage('Error fetching question data.');
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage('Error fetching question data.');
    }
  };

  // Function to handle answer selection
  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  // Function to handle answer submission and display results
  const handleSubmitAnswer = () => {
    if (!selectedAnswer) {
      setErrorMessage('Please select an answer!');
      return;
    }
    setErrorMessage('');

    const isCorrect = selectedAnswer === questionData.correct_answer;
    setIsSubmitted(false); // Hide the question form
    setQuestionData({
      ...questionData,
      isCorrect,
      selectedAnswer,
    });
  };

  // Function to reset the form and start over
  const handleRestart = () => {
    setUserData({
      firstName: '',
      category: '',
      difficulty: ''
    });
    setIsSubmitted(false); // Reset to show the initial form
    setQuestionData(null); // Remove the question data
    setSelectedAnswer('');
    setIsError(false);
    setErrorMessage('');
  };

  // Handle the rendering of the form
  return (
    <div className="App">
      {/* User input form */}
      {!isSubmitted && !questionData && (
        <form onSubmit={handleSubmitForm}>
          <label>
            First Name:
            <input
              type="text"
              value={userData.firstName}
              onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
              required
            />
          </label>

          <label>
            Category:
            <select
              value={userData.category}
              onChange={(e) => setUserData({ ...userData, category: e.target.value })}
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Difficulty:
            <select
              value={userData.difficulty}
              onChange={(e) => setUserData({ ...userData, difficulty: e.target.value })}
              required
            >
              <option value="">Select Difficulty</option>
              {difficulties.map((difficulty, index) => (
                <option key={index} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
          </label>

          <button type="submit">Get Question</button>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </form>
      )}

      {/* Display question and possible answers */}
      {questionData && !questionData.isCorrect && (
        <div>
          <p>{questionData.question}</p>
          <div>
            {questionData.incorrect_answers
              .concat(questionData.correct_answer)
              .map((answer, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="answer"
                    value={answer}
                    onChange={handleAnswerChange}
                  />
                  {answer}
                </label>
              ))}
          </div>
          <button onClick={handleSubmitAnswer}>Submit Answer</button>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
      )}

      {/* Display results */}
      {questionData && questionData.isCorrect !== undefined && (
        <div>
          <p>{userData.firstName}, you {questionData.isCorrect ? 'answered correctly' : 'answered wrong'}!</p>
          {!questionData.isCorrect && <p>The correct answer was: {questionData.correct_answer}</p>}
          <button onClick={handleRestart}>Start Over</button>
        </div>
      )}
    </div>
  );
};

export default OpenQuestionsApp;
