// import React, { useState, useRef } from "react";
// import Webcam from "react-webcam";
// import styled, { keyframes } from "styled-components";

// // Keyframe for spinner animation
// const spin = keyframes`
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `;

// // Styled Components
// const PageWrapper = styled.div`
//   background: linear-gradient(135deg, #e0f2fe 0%, #fef9c3 100%);
//   min-height: 100vh;
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Header = styled.header`
//   background: #fff;
//   width: 100%;
//   max-width: 1200px;
//   padding: 1.5rem 2rem;
//   border-radius: 0.75rem;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   margin-bottom: 2.5rem;
//   text-align: center;
// `;

// const Title = styled.h1`
//   margin: 0;
//   font-size: 2.75rem;
//   color: #3b82f6;
// `;

// const Card = styled.div`
//   background: #ffffff;
//   width: 100%;
//   max-width: 1200px;
//   border-radius: 1rem;
//   box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
//   padding: 2.5rem;
// `;

// const FlexGrid = styled.div`
//   display: flex;
//   gap: 2rem;
// `;

// const Section = styled.div`
//   flex: ${(props) => props.flex || 1};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   min-width: 320px;
// `;

// const WebcamContainer = styled.div`
//   width: 100%;
//   height: 500px;
//   border-radius: 1rem;
//   overflow: hidden;
//   border: 2px solid #d1d5db;
//   margin-bottom: 1.5rem;
// `;

// const Button = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   background: ${({ bg }) => bg || "#3b82f6"};
//   color: #fff;
//   padding: 1rem 1.75rem;
//   font-size: 1.125rem;
//   font-weight: 600;
//   border: none;
//   border-radius: 0.75rem;
//   cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
//   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
//   transition: background 0.3s, transform 0.1s;
//   &:hover {
//     background: ${({ hover }) => hover || "#2563eb"};
//     transform: ${({ disabled }) => (disabled ? "none" : "translateY(-2px)")};
//   }
// `;

// const Subtitle = styled.p`
//   margin-top: 1.25rem;
//   font-size: 1.125rem;
//   color: #374151;
//   text-align: center;
// `;

// const CodeSection = styled.div`
//   margin-top: 3rem;
// `;

// const CodeHeader = styled.h2`
//   font-size: 1.75rem;
//   color: #1f2937;
//   margin-bottom: 1rem;
// `;

// const CodeBlock = styled.pre`
//   background: #111827;
//   color: #d1d5db;
//   padding: 1.75rem;
//   border-radius: 0.75rem;
//   font-family: "Source Code Pro", monospace;
//   font-size: 0.875rem;
//   max-height: 350px;
//   overflow: auto;
// `;

// const Spinner = styled.div`
//   width: 1.25rem;
//   height: 1.25rem;
//   border: 3px solid rgba(255, 255, 255, 0.3);
//   border-top: 3px solid #fff;
//   border-radius: 50%;
//   animation: ${spin} 1s linear infinite;
// `;

// const EmotionCodeGenerator = () => {
//   const webcamRef = useRef(null);
//   const [emotion, setEmotion] = useState("");
//   const [transcript, setTranscript] = useState("");
//   const [code, setCode] = useState("");
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const [isListening, setIsListening] = useState(false);

//   const detectEmotion = async () => {
//     setIsAnalyzing(true);
//     setTimeout(() => {
//       const emotions = ["😄 Happy", "😢 Sad", "😐 Neutral"];
//       setEmotion(emotions[Math.floor(Math.random() * emotions.length)]);
//       setIsAnalyzing(false);
//     }, 2000);
//   };

//   const startListening = () => {
//     setIsListening(true);
//     setTimeout(() => {
//       setTranscript("리스트 정렬 코드");
//       setIsListening(false);
//     }, 3000);
//   };

//   const generateCode = () => {
//     if (!emotion || !transcript) return;
//     setCode(
//       `# Generated code based on emotion: ${emotion}\n# Request: ${transcript}\n\n` +
//         `def sort_list():\n` +
//         `    my_list = [3, 1, 4, 1, 5]\n` +
//         `    return sorted(my_list)`
//     );
//   };

//   return (
//     <PageWrapper>
//       <Header>
//         <Title>감정 기반 코드 생성기</Title>
//       </Header>
//       <Card>
//         <FlexGrid>
//           <Section flex={2}>
//             <WebcamContainer>
//               <Webcam
//                 ref={webcamRef}
//                 screenshotFormat="image/jpeg"
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//             </WebcamContainer>
//             <Button
//               onClick={detectEmotion}
//               disabled={isAnalyzing}
//               bg="#3b82f6"
//               hover="#2563eb"
//             >
//               {isAnalyzing ? <Spinner /> : "감정 분석"}
//             </Button>
//             <Subtitle>
//               현재 감정: <strong>{emotion || "없음"}</strong>
//             </Subtitle>
//           </Section>
//           <Section flex={1}>
//             <Button
//               onClick={startListening}
//               disabled={isListening}
//               bg="#10b981"
//               hover="#059669"
//             >
//               {isListening ? <Spinner /> : "음성으로 요청하기"}
//             </Button>
//             <Subtitle>
//               요청 내용: <strong>{transcript || "없음"}</strong>
//             </Subtitle>
//           </Section>
//         </FlexGrid>
//         <CodeSection>
//           <CodeHeader>생성된 코드:</CodeHeader>
//           <CodeBlock>{code || "현재 생성된 코드가 없습니다."}</CodeBlock>
//         </CodeSection>
//       </Card>
//     </PageWrapper>
//   );
// };

// export default EmotionCodeGenerator;

import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import styled, { keyframes } from "styled-components";
import AWS from "aws-sdk";

// Keyframe for spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled Components
const PageWrapper = styled.div`
  background: linear-gradient(135deg, #e0f2fe 0%, #fef9c3 100%);
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  background: #fff;
  width: 100%;
  max-width: 1200px;
  padding: 1.5rem 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 2.5rem;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.75rem;
  color: #3b82f6;
`;

const Card = styled.div`
  background: #ffffff;
  width: 100%;
  max-width: 1200px;
  border-radius: 1rem;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
`;

const FlexGrid = styled.div`
  display: flex;
  gap: 2rem;
`;

const Section = styled.div`
  flex: ${(props) => props.flex || 1};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
`;

const WebcamContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 1rem;
  overflow: hidden;
  border: 2px solid #d1d5db;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ bg }) => bg || "#3b82f6"};
  color: #fff;
  padding: 1rem 1.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  border-radius: 0.75rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s, transform 0.1s;
  &:hover {
    background: ${({ hover }) => hover || "#2563eb"};
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(-2px)")};
  }
`;

const Subtitle = styled.p`
  margin-top: 1.25rem;
  font-size: 1.125rem;
  color: #374151;
  text-align: center;
`;

const CodeSection = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const CodeHeader = styled.h2`
  font-size: 1.75rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const CodeBlock = styled.pre`
  background: #111827;
  color: #d1d5db;
  padding: 1.75rem;
  border-radius: 0.75rem;
  font-family: "Source Code Pro", monospace;
  font-size: 0.875rem;
  max-height: 350px;
  overflow: auto;
`;

const Spinner = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #fff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const EmotionCodeGenerator = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const [emotion, setEmotion] = useState("");
  const [transcript, setTranscript] = useState("");
  const [code, setCode] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [isListening, setIsListening] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  
  const [isGenerating, setIsGenerating] = useState(false);

  const rekognition = new AWS.Rekognition({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_AWS_REGION,
  });

  // Capture webcam image and detect emotion via Azure Face API
  const detectEmotion = async () => {
    if (!webcamRef.current) return;
    setIsAnalyzing(true);
    try {
      const screenshot = webcamRef.current.getScreenshot();
      const blob = await (await fetch(screenshot)).blob();
      const buffer = await blob.arrayBuffer();

      rekognition.detectFaces(
        {
          Image: { Bytes: new Uint8Array(buffer) },
          Attributes: ["ALL"],
        },
        (err, data) => {
          if (err) {
            console.error("AWS Rekognition error:", err);
            setEmotion("감정 인식 실패");
          } else if (
            data.FaceDetails &&
            data.FaceDetails[0] &&
            data.FaceDetails[0].Emotions
          ) {
            const emotions = data.FaceDetails[0].Emotions;
            const top = emotions.reduce((a, b) =>
              a.Confidence > b.Confidence ? a : b
            );
            const emojiMap = {
              HAPPY: "😄",
              SAD: "😢",
              CALM: "😐",
              ANGRY: "😠",
              FEAR: "😨",
              DISGUSTED: "🤢",
              SURPRISED: "😲",
              CONFUSED: "🤔",
            };
            setEmotion(`${emojiMap[top.Type] || ""} ${top.Type}`);
          } else {
            setEmotion("😐 neutral");
          }
        }
      );
    } catch (e) {
      console.error("Emotion detection failed", e);
    }
    setIsAnalyzing(false);
  };

  // Record audio and transcribe via OpenAI Whisper
  const transcribeAudio = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("model", "whisper-1");
    const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: formData,
    });
    const json = await res.json();
    return json.text;
  };

  const startListening = async () => {
    if (isListening) {
      // 녹음 중이면 중지
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }
      setIsListening(false);
    } else {
      // 녹음 시작
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setMediaStream(stream);
        const recorder = new MediaRecorder(stream);
        mediaRecorderRef.current = recorder;
        audioChunksRef.current = [];
        recorder.ondataavailable = (e) => {
          if (e.data.size > 0) audioChunksRef.current.push(e.data);
        };
        recorder.onstop = async () => {
          // 녹음 끝나면 stream 해제
          stream.getTracks().forEach((track) => track.stop());
          const audioBlob = new Blob(audioChunksRef.current, {
            type: "audio/webm",
          });
          const audioFile = new File([audioBlob], "recording.webm", {
            type: "audio/webm",
          });
          const text = await transcribeAudio(audioFile);
          setTranscript(text);
          setIsListening(false);
          setMediaStream(null);
        };
        recorder.start();
        setIsListening(true);
      } catch (e) {
        console.error("Recording failed", e);
        setIsListening(false);
      }
    }
  };

  // Generate code via OpenAI Chat
  const generateCode = async () => {
    if (!emotion || !transcript) return;
    setIsGenerating(true);
    try {
      const messages = [
        { role: "system", content: "You are a helpful code generator." },
        {
          role: "user",
          content: `Emotion: ${emotion}\nRequest: ${transcript}\nGenerate Python code:`,
        },
      ];
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({ model: "gpt-4", messages, max_tokens: 500 }),
      });
      const json = await res.json();
      setCode(json.choices[0].message.content);
    } catch (e) {
      console.error("Code generation failed", e);
    }
    setIsGenerating(false);
  };

  return (
    <PageWrapper>
      <Header>
        <Title>감정 기반 코드 생성기</Title>
      </Header>
      <Card>
        <FlexGrid>
          <Section flex={2}>
            <WebcamContainer>
              <Webcam
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </WebcamContainer>
            <Button
              onClick={detectEmotion}
              disabled={isAnalyzing}
              bg="#3b82f6"
              hover="#2563eb"
            >
              {isAnalyzing ? <Spinner /> : "감정 분석"}
            </Button>
            <Subtitle>
              현재 감정: <strong>{emotion || "없음"}</strong>
            </Subtitle>
          </Section>
          <Section flex={1}>
            <Button
              onClick={startListening}
              disabled={isGenerating}
              bg="#10b981"
              hover="#059669"
            >
              {isListening ? "녹음 중지" : "음성 요청"}
              {isListening && <Spinner />}
            </Button>
            <Subtitle>
              요청 내용: <strong>{transcript || "없음"}</strong>
            </Subtitle>
            <Button
              onClick={generateCode}
              disabled={!emotion || !transcript || isGenerating}
              bg="#f59e0b"
              hover="#d97706"
              style={{ marginTop: "1.5rem" }}
            >
              {isGenerating ? <Spinner /> : "코드 생성"}
            </Button>
          </Section>
        </FlexGrid>
        <CodeSection>
          <CodeHeader>생성된 코드:</CodeHeader>
          <CodeBlock>{code || "현재 생성된 코드가 없습니다."}</CodeBlock>
        </CodeSection>
      </Card>
    </PageWrapper>
  );
};

export default EmotionCodeGenerator;
