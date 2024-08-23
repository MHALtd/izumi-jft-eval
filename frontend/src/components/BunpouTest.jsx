import React, { useEffect, useRef, useState } from "react";
import axiosInstance from "../services/axiosInstance.js";
import Test from "./Test.jsx";
import { generateRandomNumbersLCM, getQuestionsByLCM } from "../services/utils.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";

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
  const [userName, setUserName] = useState("");
  const [canPrintCertificate, setCanPrintCertificate] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);
  const certificateRef = useRef(null);

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
        setCanPrintCertificate(score >= 12);
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
    setCanPrintCertificate(false);
  };

  const handleDownloadCertificate = () => {
    if (!canPrintCertificate) {
      alert("You need at least 12 correct answers to print the certificate.");
      return;
    }
    alert("Downloading...");
    // html2canvas screenshot
    html2canvas(certificateRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // create jspdf
      const pdf = new jsPDF("l", "mm", [1000, 670]);
      pdf.addImage(imgData, "PNG", 0, 0, 1000, 667);

      // download pdf file
      pdf.save(`certificate_${userName.split(" ").join("_")}.pdf`);
    });
  };

  function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  }

  useEffect(() => {
    const today = new Date();
    const formattedDate = formatDate(today);
    if (document.getElementById("tanggal-sertifikat")) {
      document.getElementById("tanggal-sertifikat").textContent = formattedDate;
    }
  }, [result]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {!result && (
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
      {result && (
        <>
          <div className="flex items-center justify-center mt-20 mb-5">
            <div className="max-w-screen w-full md:mx-10 mx-5 bg-pale text-brokenwhite py-10 sm:py-24 px-4 rounded-[25px]">
              <div className="sm:text-2xl text-xl">
                <div className="grid place-items-center space-y-5">
                  <h1 className="text-2xl text-center sm:text-5xl">
                    Kamu Benar {score} dari {selectedQuestions.length} soal.
                  </h1>
                  <h1 className="text-xl text-center sm:text-2xl">
                    Untuk bisa mencetak sertifikat, kamu perlu menjawab 12 soal benar.
                  </h1>
                  <button onClick={reset} className="btnPrimary">
                    Ulangi
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mb-5">
            <div className="max-w-screen w-full md:mx-10 mx-5 bg-tartiary text-brokenwhite py-5 md:px-6 px-4 rounded-[25px]">
              <h1 className="text-2xl pt-5 text-center sm:text-5xl">Cetak Sertifikat</h1>
              <div className="flex items-center justify-center mt-5 mb-5 space-x-5">
                <label className="block text-brokenwhite text-xl">Masukkan Nama Anda</label>
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-pale mt-2 border focus:border-blue-500 focus:outline-secondary inputPrimary"
                />
              </div>
              <div className="flex items-center justify-center mb-5">
                <div
                  ref={certificateRef}
                  className="bg-white p-8 border-2 border-gray-300 shadow-lg w-3/4 max-w-3xl text-center">
                  <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Sertifikat Latihan Soal Japanese Foundation Test</h1>
                    <p className="text-xl text-gray-600">LPK Izumi Cabang Bekasi Utara</p>
                  </div>
                  <div className="mt-10 mb-10">
                    <p className="text-lg text-gray-700">Diberikan kepada:</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{userName}</p>
                    <p className="text-lg text-gray-700 mt-4">
                      Untuk penyelesaian latihan soal <strong>Bunpou-Hyougen</strong> pada tanggal{" "}
                      <span id="tanggal-sertifikat"></span>.
                    </p>
                  </div>
                  <div className="mt-8 flex justify-between px-16">
                    <div className="text-center">
                      <p className="text-gray-700">Instruktur</p>
                      <div className="border-t border-gray-500 mt-20"></div>
                      <p className="text-gray-900">_______________ 先生</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-700">Kepala Cabang</p>
                      <div className="flex justify-center items-center">
                        <img src="src//assets/signature.png" alt="" className="w-40" />
                      </div>
                      <div className="border-t border-gray-500"></div>
                      <p className="text-gray-900">H.Bardan Priyanto, SE. 先生</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center pt-5">
                <Link to="/home">
                  <button onClick={handleDownloadCertificate} className="btnPrimary">
                    Download PDF
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <h2 className="text-xl sm:text-3xl text-pale mt-5">Coba Tes Lain?</h2>
          </div>
          <Test />
        </>
      )}
    </>
  );
};

export default BunpouTest;
