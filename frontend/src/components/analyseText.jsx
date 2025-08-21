import React, { useState } from "react";
import { useMedInfo } from "../context/MedInfoContext";
import { useHistory } from "../context/HistoryContext";
import { useNavigate } from "react-router-dom";
import { medicineTypes } from "../../data/medicineTypes";
function AnalyseText({ text }) {
    
    const AI_API_KEY = import.meta.env.VITE_AI_API_KEY;
    const AI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${AI_API_KEY}`;
    let prompt = `extract and give the drug names from this text as only single names in the form of a javascript array in this format : {
    name: 'Amoxicillin',
    type: 'antibiotic',
    dosage: '500mg',
    frequency: '3 times daily',
    status: 'active',
    startDate: '2023-05-15',
    endDate: '2023-06-15',
  },
  {
    name: 'Ibuprofen',
    type: 'pain-reliever',
    dosage: '200mg',
    frequency: 'as needed',
    status: 'completed',
    startDate: '2023-05-15',
    endDate: '2023-06-15',
  }, and keep the types under this list ${medicineTypes}` + text;

    const {setMedInfo} = useMedInfo();
    const {setHistory} = useHistory();
    const navigate = useNavigate(); 
    const [isLoading, setIsLoading] = useState(false);

    // getting drug names
    const AI = async (val) => {
        const ques = {
            message: val,
        }
        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "contents": [{
                    "parts": [{ "text": ques.message }]
                }]
            })
        }
        try {
            const response = await fetch(AI_API_URL, request);
            const data = await response.json();
            if (!response.ok) throw new Error(data.error.message)
            const AIresponse = data.candidates[0].content.parts[0].text;
            setIsLoading(false);
            const DrugsListedString = AIresponse.replace(/^```javascript\n|\n```$/g, '');
            const DrugsArray = new Function(`return ${DrugsListedString}`)();
            setMedInfo(DrugsArray);
            setHistory(c=>[...c,...DrugsArray]);
            navigate("/analysis");
        } catch (err) {
            setIsLoading(false);
            console.log("AI_API_KEY : ",AI_API_KEY);
            console.error(err);
            alert("extractor is overloaded please try again later");
        }
    }

    return (
        <>
            <div className="flex justify-center flex-col items-center">
                <button onClick={() => {
                    setIsLoading(true);
                    AI(prompt);
                }}
                    className="bg-violet-400 my-2 hover:bg-violet-500 text-white cursor-pointer px-4 py-2 rounded">
                    {isLoading ? "Extracting..." : "Extract Drugs"}</button>
            </div>
        </>
    )
}
export default AnalyseText;