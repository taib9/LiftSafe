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
    <div>
      <h1 className="text-center capitalize">{painAreaId}</h1>
      <p className="text-teal font-bold text-center">Tell us more about your training</p>
      <p className="text-center">Complete a short questionnaire to identify your injury risk</p>

      <form onSubmit={(e) => e.preventDefault()}>
        {questions.map((q, index) => (
          <div className="font-bold text-center">
            {q}
          </div>
        ))}

        <button type="submit" className="font-bold">Get My Results</button>
      </form>
    </div>
  );
};

export default PainQuestionsPage;