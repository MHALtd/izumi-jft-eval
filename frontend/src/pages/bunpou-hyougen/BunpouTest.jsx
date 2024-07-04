import React, { useEffect, useRef, useState } from "react";
import axiosInstance from "../../services/axiosInstance";
import Test from "../../components/Test.jsx";
import { generateRandomNumbersLCM, getQuestionsByLCM } from "../../services/utils.js";

// LCM parameters
const a = 11;
const b = 7;
const m = 25;
const iterations = 15;

const BunpouTest = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const option_array = [Option1, Option2, Option3, Option4];

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axiosInstance.get("/bunpou");
        setQuestions(response.data.data);

        const currentTime = new Date();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        const timeString = minutes.toString() + seconds.toString();
        const uniqueNumber = parseInt(timeString, 10);

        // Generating random numbers for n iterations
        const randomNumbers = generateRandomNumbersLCM(uniqueNumber, a, b, m, iterations);

        // Getting questions based on random numbers generated
        const selectedQuestions = getQuestionsByLCM(response.data.data, randomNumbers);
        setSelectedQuestions(selectedQuestions);
        setQuestion(selectedQuestions[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const checkAns = (e, ansIndex) => {
    if (!lock) {
      if (question.answerOptions[ansIndex].isCorrect) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("incorrect");
        const correctIndex = question.answerOptions.findIndex((option) => option.isCorrect);
        option_array[correctIndex].current.classList.add("correct");
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === selectedQuestions.length - 1) {
        setResult(true);
        return;
      }
      setIndex(index + 1);
      setQuestion(selectedQuestions[index + 1]);
      setLock(false);
      option_array.forEach((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("incorrect");
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(selectedQuestions[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {result ? (
        <></>
      ) : (
        <>
          <div className="flex items-center justify-center mt-20 mb-5">
            <div className="max-w-screen w-full md:mx-10 mx-5 bg-pale text-brokenwhite py-5 md:px-6 px-4 rounded-[25px]">
              <div className="sm:text-2xl text-xl">
                <div className="flex items-center justify-center py-5">
                  <img src={question.attach} alt="bunpou-question" />
                </div>
                <div className="flex items-center justify-center">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 cursor-pointer my-5">
                    {question.answerOptions.map((option, i) => (
                      <li
                        key={i}
                        className="border border-brokenwhite bg-tartiary rounded-[10px] px-5 sm:px-12 py-2 sm:py-4"
                        ref={option_array[i]}
                        onClick={(e) => {
                          checkAns(e, i);
                        }}>
                        {option.answerText}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center items-center pt-2">
                  <h2 className="text-xl">
                    {index + 1} of {selectedQuestions.length} questions
                  </h2>
                </div>
                <div className="flex justify-center items-center pt-2">
                  <button onClick={next} className="btnPrimary text-xl">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {result ? (
        <>
          <div className="flex items-center justify-center mt-20 mb-5">
            <div className="max-w-screen w-full md:mx-10 mx-5 bg-pale text-brokenwhite py-10 sm:py-24 px-4 rounded-[25px]">
              <div className="sm:text-2xl text-xl">
                <div className="grid place-items-center space-y-5">
                  <h1 className="text-2xl text-center sm:text-5xl">
                    Kamu Benar {score} dari {selectedQuestions.length} soal.
                  </h1>
                  <button onClick={reset} className="btnPrimary ">
                    Ulangi
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-5 sm:pt-12">
            <h2 className="text-xl sm:text-3xl text-pale">Coba Tes Lain?</h2>
            <Test />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default BunpouTest;
