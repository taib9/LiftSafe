import { useState } from "react";
import { useParams } from "react-router-dom";

const questionsByBodyPart = {
  shoulder: [
    "Weekly training sessions",
    "Pressing exercises per week",
    "Recent increase in pressing volume",
    "Sleep quality (last 7 days)",
    "Current pain level",
  ],
  elbow: [
    "Weekly training sessions",
    "Curl exercises per week",
    "Recent increase in curling volume",
    "Sleep quality (last 7 days)",
    "Current pain level",
  ],
  "lower-back": [
    "Weekly training sessions",
    "Deadlift/squat volume per week",
    "Recent increase in weight/volume",
    "Sleep quality (last 7 days)",
    "Current pain level",
  ],
  knee: [
    "Weekly training sessions",
    "Leg exercises per week",
    "Recent increase in leg volume",
    "Sleep quality (last 7 days)",
    "Current pain level",
  ],
  hip: [
    "Weekly training sessions",
    "Hip/hinge exercises per week",
    "Recent increase in hip/hinge volume",
    "Sleep quality (last 7 days)",
    "Current pain level",
  ],
};

const PainQuestionsPage = () => {
  const { painAreaId } = useParams();
  const questions = questionsByBodyPart[painAreaId] || [];

  // state for each question's answer
  const [answers, setAnswers] = useState(
    questions.map(() => "") 
  );

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className="relative min-h-screen">
      <div className="text-center"><h1 className="text-center font-bold text-white capitalize rounded-xl bg-teal inline-block px-2 py-.1">{painAreaId}</h1></div>
      <p className="text-teal font-bold text-center text-3xl">Tell us more about your training</p>
      <p className="text-center text-xs">Complete a short questionnaire to identify your injury risk</p>

      <div className="pb-32">
        {questions.map((q, index) => (
          <div className="font-bold bg-light-gray rounded-xl p-6 mb-6 max-w-xl mx-auto flex flex-col gap-6">
            {q}
            <input type="range" min={0} max={10} onChange={(e) => onChange(Number(e.target.value))} className="accent-teal w-full"/>
            <div className="flex justify-between text-sm"> <span>{"None"}</span> <span>{10}</span> </div>
          </div>
        ))}
        
      </div>
        <button className="font-bold absolute right-0 bottom-0 whitespace-nowrap rounded-xl bg-teal inline-block px-2 py-.1 text-white">Get My Results</button>
    </div>
  );
};

export default PainQuestionsPage;