import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRecognizer = ({ onTranscript }) => {
  const [isListening, setIsListening] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: false, language: "ko-KR" });
    setIsListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
    onTranscript(transcript);
    resetTranscript();
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <button
        onClick={isListening ? stopListening : startListening}
        disabled={!SpeechRecognition.browserSupportsSpeechRecognition()}
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 disabled:bg-gray-400"
      >
        {isListening ? "음성 인식 중지" : "음성으로 요청하기"}
      </button>
      <p className="mt-2 text-lg">
        요청 내용: <span className="font-semibold">{transcript || "없음"}</span>
      </p>
    </div>
  );
};

export default SpeechRecognizer;
