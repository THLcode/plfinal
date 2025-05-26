import React, { useState } from "react";
import EmotionDetector from "./components/EmotionDetector";
import SpeechRecognizer from "./components/SpeechRecognizer";
import CodeGenerator from "./components/CodeGenerator";
import "./App.css";

const App = () => {
  const [emotion, setEmotion] = useState("");
  const [transcript, setTranscript] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* <h1 className="text-3xl font-bold mb-6">감정 기반 코드 생성기</h1> */}

      <EmotionDetector onEmotionDetected={setEmotion} />
      {/* <p className="mt-2 text-lg">
        현재 감정: <span className="font-semibold">{emotion || "없음"}</span>
      </p>

      <SpeechRecognizer onTranscript={setTranscript} />

      <CodeGenerator emotion={emotion} transcript={transcript} /> */}
    </div>
  );
};

export default App;
