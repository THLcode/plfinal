import React, { useState } from "react";
import axios from "axios";

const CodeGenerator = ({ emotion, transcript }) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateCode = async () => {
    if (!emotion || !transcript) return;
    setLoading(true);
    const prompt = `감정이 ${emotion}인 상태에서: ${transcript}`;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        { prompt, max_tokens: 100 },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      setCode(response.data.choices[0].text);
    } catch (err) {
      setError("코드 생성에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 w-full max-w-md">
      <button
        onClick={generateCode}
        disabled={loading || !emotion || !transcript}
        className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 disabled:bg-gray-400"
      >
        {loading ? "생성 중..." : "코드 생성"}
      </button>
      <h2 className="text-xl font-semibold mt-4">생성된 코드:</h2>
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto max-h-64 mt-2">
        {code || "아직 생성된 코드가 없습니다."}
      </pre>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default CodeGenerator;
