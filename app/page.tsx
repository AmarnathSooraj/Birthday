'use client';
import Video from "@/components/video";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import LoveStoryBook from "@/components/LoveStoryBook";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [showBook, setShowBook] = useState(false);
  const [error, setError] = useState("");
  const hasEnded = useRef(false);
  const confettiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check localStorage to persist Yes click
    const savedBook = localStorage.getItem("showBook");
    if (savedBook === "false") {
      setShowBook(true);
      setShowMessage(false);
      return;
    }

    const targetDate = new Date("2025-08-15T00:00:00").getTime();

    const updateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (!hasEnded.current) {
          hasEnded.current = true;
          setShowMessage(true);
        }
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    // Initial call
    updateTimeLeft();
    const countdown = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleYes = () => {
    setError("");
    triggerConfetti();
    setShowBook(true);
    localStorage.setItem("showBook", "true"); // persist choice
  };

  const handleNo = () => {
    setError("Please select Yes ❤️");
  };

  const triggerConfetti = () => {
    if (confettiRef.current) {
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.className = `absolute w-2 h-2 rounded-full ${
          ["bg-red-500", "bg-pink-500", "bg-white", "bg-yellow-300"][Math.floor(Math.random() * 4)]
        }`;
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = "-10px";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear forwards`;
        confettiRef.current.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video in the background */}
      <Video />

      {/* Confetti container */}
      <div ref={confettiRef} className="pointer-events-none absolute inset-0"></div>

      {/* Overlay content */}
      {showBook ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-11/12 md:w-1/2 h-auto">
            <LoveStoryBook />
          </div>
        </div>
      ) : showMessage ? (
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-6 px-4">
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="font-edu text-white text-4xl md:text-5xl font-light"
          >
            Happy Birthday Ammuuuuu 🎉
          </motion.p>

          <div className="bg-white/90 backdrop-blur-sm max-w-[500px] rounded-xl p-8 shadow-lg">
            <p className="my-4 text-gray-800 text-lg leading-relaxed text-center">
              Happy Birthday, Kuttaaa ❤️. It's your 4th birthday together. You’ve been my joy, my strength, and my greatest blessing. Every moment with you is unforgettable, and I can’t wait to make more beautiful memories with you. I love you forever and always.
            </p>
            <form>
              <label className="my-4 block text-center text-gray-700 font-medium">
                Will you be ready for that, Ammu?
              </label>
              <div className="flex justify-center items-center gap-6 my-4">
                <button
                  type="button"
                  className=" bg-green-600 hover:bg-green-700 text-white px-6 py-2  rounded transition-colors"
                  onClick={handleYes}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className=" bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors"
                  onClick={handleNo}
                >
                  No
                </button>
              </div>
              {error && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-center mt-2">
                  {error}
                </motion.p>
              )}
            </form>
          </div>
        </div>
      ) : (
        // Countdown display
        <div className="absolute inset-0 flex flex-col items-center gap-6">
          <p className="text-white text-5xl md:text-6xl font-bold tracking-wide">Countdown</p>
          <div className="flex gap-6 text-white text-3xl md:text-4xl font-medium">
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold">{timeLeft?.days ?? 0}</span>
              <span className="text-sm">days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold">{timeLeft?.hours ?? 0}</span>
              <span className="text-sm">hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold">{timeLeft?.minutes ?? 0}</span>
              <span className="text-sm">minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold">{timeLeft?.seconds ?? 0}</span>
              <span className="text-sm">seconds</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
