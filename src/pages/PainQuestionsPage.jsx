import { useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { Slider } from "radix-ui";
import { FaCalendarAlt } from "react-icons/fa";
import { LuMoon } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { GiLeg, GiPelvisBone } from "react-icons/gi";

const questionsByBodyPart = {
  shoulder: [
    { question: "Weekly training sessions", min: 0, max: 10, minLabel: "0 days", maxLabel: "10 days", icon: FaCalendarAlt },
    { question: "Pressing exercises per week", min: 0, max: 20, minLabel: "None", maxLabel: "20+" },
    { question: "Recent increase in pressing volume", min: 0, max: 100, minLabel: "0%", maxLabel: "100%", icon: RiArrowUpDoubleFill },
    { question: "Sleep quality (last 7 days)", min: 0, max: 10, minLabel: "Poor", maxLabel: "Excellent", icon: LuMoon },
    { question: "Current pain level", min: 0, max: 10, minLabel: "None", maxLabel: "Severe", icon: IoWarningOutline },
  ],
  elbow: [
    { question: "Weekly training sessions", min: 0, max: 10, minLabel: "0 days", maxLabel: "10 days", icon: FaCalendarAlt },
    { question: "Curl exercises per week", min: 0, max: 20, minLabel: "None", maxLabel: "20+" },
    { question: "Recent increase in curling volume", min: 0, max: 100, minLabel: "0%", maxLabel: "100%", icon: RiArrowUpDoubleFill },
    { question: "Sleep quality (last 7 days)", min: 0, max: 10, minLabel: "Poor", maxLabel: "Excellent", icon: LuMoon },
    { question: "Current pain level", min: 0, max: 10, minLabel: "None", maxLabel: "Severe", icon: IoWarningOutline },
  ],
  "lower-back": [
    { question: "Weekly training sessions", min: 0, max: 10, minLabel: "0 days", maxLabel: "10 days", icon: FaCalendarAlt },
    { question: "Deadlift/squat volume per week", min: 0, max: 30, minLabel: "None", maxLabel: "30+" },
    { question: "Recent increase in weight/volume", min: 0, max: 100, minLabel: "0%", maxLabel: "100%", icon: RiArrowUpDoubleFill },
    { question: "Sleep quality (last 7 days)", min: 0, max: 10, minLabel: "Poor", maxLabel: "Excellent", icon: LuMoon },
    { question: "Current pain level", min: 0, max: 10, minLabel: "None", maxLabel: "Severe", icon: IoWarningOutline },
  ],
  knee: [
    { question: "Weekly training sessions", min: 0, max: 10, minLabel: "0 days", maxLabel: "10 days", icon: FaCalendarAlt },
    { question: "Leg exercises per week", min: 0, max: 20, minLabel: "None", maxLabel: "20+", icon: GiLeg },
    { question: "Recent increase in leg volume", min: 0, max: 100, minLabel: "0%", maxLabel: "100%", icon: RiArrowUpDoubleFill },
    { question: "Sleep quality (last 7 days)", min: 0, max: 10, minLabel: "Poor", maxLabel: "Excellent", icon: LuMoon },
    { question: "Current pain level", min: 0, max: 10, minLabel: "None", maxLabel: "Severe", icon: IoWarningOutline },
  ],
  hip: [
    { question: "Weekly training sessions", min: 0, max: 10, minLabel: "0 days", maxLabel: "10 days", icon: FaCalendarAlt },
    { question: "Hip/hinge exercises per week", min: 0, max: 20, minLabel: "None", maxLabel: "20+", icon: GiPelvisBone },
    { question: "Recent increase in hip/hinge volume", min: 0, max: 100, minLabel: "0%", maxLabel: "100%", icon: RiArrowUpDoubleFill },
    { question: "Sleep quality (last 7 days)", min: 0, max: 10, minLabel: "Poor", maxLabel: "Excellent", icon: LuMoon },
    { question: "Current pain level", min: 0, max: 10, minLabel: "None", maxLabel: "Severe", icon: IoWarningOutline },
  ],
};

const PainQuestionsPage = () => {
  const { painAreaId } = useParams();
  const questions = questionsByBodyPart[painAreaId] || [];
  const navigate = useNavigate();

  // state for each question's answer
  const [answers, setAnswers] = useState(
    questions.map(() => null) 
  );

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className="relative min-h-screen">

      {/* navbar */}
      <div className="sticky top-0 z-20 bg-white">
        <div className="max-w-xl mx-auto px-4 h-14 flex justify-between">
          <button onClick={() => navigate(-1)} className="font-bold"> ← Back </button>
          <button onClick={() => console.log("Next")} className="font-bold"> Next → </button>
        </div>
      </div>

      <div className="text-center"><h1 className="text-center font-bold text-white capitalize rounded-xl bg-teal inline-block px-3 py-.9">{painAreaId}</h1></div>
      <p className="text-teal font-bold text-center text-3xl">Tell us more about your training</p>
      <p className="text-center text-xs">Complete a short questionnaire to identify your injury risk</p>

      {/* card */}
      <div className="pb-32 pt-12">
        {questions.map((item, index) => (
          <div className="font-bold bg-light-gray rounded-xl p-6 mb-6 max-w-3xl mx-auto flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center gap-3">
              {item.icon && (
                <div className="bg-teal rounded-full p-2 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
              )}            
              <span>{item.question}</span>
            </div>

            {/* slider */}
            <Slider.Root className="relative flex items-center select-none touch-none w-full h-5 pt-4"
              min={item.min}
              max={item.max}
              step={1}
              value={[answers[index] ?? item.min]}
              onValueChange={(val) => handleChange(index, val[0])}
              aria-label={item.question}>
              <Slider.Track className="bg-gray-300 relative grow rounded-full h-2">
                <Slider.Range className={`absolute bg-teal rounded-full h-full ${answers[index] === null ? 'opacity-0' : ''}`} />
              </Slider.Track>
              <Slider.Thumb className="relative block w-5 h-5 bg-teal border-gray-400 rounded-full shadow">
                {answers[index] !== null && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-teal text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                    {answers[index]}
                  </span>
                )}
              </Slider.Thumb>
            </Slider.Root>

            <div className="flex justify-between text-sm"> <span>{item.minLabel}</span> <span>{item.maxLabel}</span> </div>
          </div>
        ))}
      </div>
        <button className="font-bold absolute right-6 bottom-6 whitespace-nowrap rounded-xl bg-teal inline-block px-6 py-1 text-white">Get My Results →</button>
    </div>
  );
};

export default PainQuestionsPage;