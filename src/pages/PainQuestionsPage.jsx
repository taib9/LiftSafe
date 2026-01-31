import { useState, useEffect} from "react";
import { useParams, useNavigate} from "react-router-dom";
import * as Slider from "@radix-ui/react-slider";
import { FaCalendarAlt } from "react-icons/fa";
import { LuMoon,LuBicepsFlexed } from "react-icons/lu";
import { IoWarningOutline, IoBarbell  } from "react-icons/io5";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { GiLeg, GiPelvisBone, GiBackPain } from "react-icons/gi";
import { supabase } from "../lib/supabaseClient";
import { IdCardIcon } from "lucide-react";


const iconMap = {
  FaCalendarAlt,
  LuMoon,
  LuBicepsFlexed,
  IoWarningOutline,
  RiArrowUpDoubleFill,
  GiLeg,
  GiPelvisBone,
  GiBackPain,
  IoBarbell 
};

const PainQuestionsPage = () => {
  const { painAreaId } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [painAreaDbId, setPainAreaDbId] = useState(null);

  // supabase fetching
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data, error } = await supabase
          .from('questions')
          .select('*')
          .eq('name', painAreaId)
          .order('question_order', { ascending: true });

        if (error) {
          console.error("Supabase error:", error);
          return;
        }

        // string to icons and convert min/max to numbers
        const questionsWithIcons = data.map(q => ({
          ...q,
          icon: iconMap[q.icon] || null,
          min: Number(q.min),
          max: Number(q.max)
        }));

        setQuestions(questionsWithIcons);
        // initialize answers array with null
        setAnswers(questionsWithIcons.map(q => Math.floor((q.min + q.max) / 2)));
        setPainAreaDbId(questionsWithIcons[0]?.pain_area_id ?? null);
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };

    if (painAreaId) {
      fetchQuestions();
    }
  }, [painAreaId]);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {    
    navigate('/results', { 
      state: { 
        answers,
        painAreaDbId
      } 
    });
  };

  return (
    <div className="relative min-h-screen">

      {/* navbar */}
      <div className="top-0 z-20 bg-white">
        <div className="font-bold tracking-wider text-black pt-2 items-center flex pl-4 w-auto">
          <button onClick={() => navigate(-1)} className="font-bold cursor-pointer"> ← Back </button>
        </div>
      </div>

      <div className="text-center"><h1 className="text-center font-bold text-white capitalize rounded-xl bg-teal inline-block px-3 py-1">{painAreaId}</h1></div>
      <p className="text-teal font-bold text-center text-3xl">Tell us more about your training</p>
      <p className="text-center text-xs">Complete a short questionnaire to identify your injury risk</p>

      {/* card */}
      <div className="pb-32 pt-12">
        {questions.map((item, index) => {
          const IconComponent = item.icon;
          
          return (
            <div key={item.pain_area_id} className="font-bold bg-light-gray rounded-xl p-6 mb-6 max-w-3xl mx-auto flex flex-col gap-6 shadow-2xl">
              <div className="flex items-center gap-3">
                {IconComponent && (
                  <div className="bg-teal rounded-full p-2 flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                )}            
                <span>{item.question}</span>
              </div>

              {/* slider */}
              <Slider.Root 
                className="relative flex items-center select-none touch-none w-full h-5 pt-4"
                min={item.min}
                max={item.max}
                step={1}
                defaultValue={item.max/2}
                value={[answers[index] ?? item.min]}
                onValueChange={(val) => handleChange(index, val[0])}
                aria-label={item.question}
              >
                <Slider.Track className="bg-gray-300 relative grow rounded-full h-2">
                  <Slider.Range className="absolute bg-teal rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="relative block w-5 h-5 bg-teal border-gray-400 rounded-full shadow">
                  {answers[index] !== null && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-teal text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                      {answers[index]}
                    </span>
                  )}
                </Slider.Thumb>
              </Slider.Root>

              <div className="flex justify-between text-sm"> 
                <span>{item.min_label}</span> 
                <span>{item.max_label}</span> 
              </div>
            </div>
          );
        })}
      </div>
      <div className="sticky bottom-6 mr-6 flex justify-end"><button onClick={handleSubmit} className="font-bold right-6 bottom-6 whitespace-nowrap rounded-xl bg-teal inline-block px-6 py-1 text-white cursor-pointer">Get My Results →</button></div>
    </div>
  );
};

export default PainQuestionsPage;