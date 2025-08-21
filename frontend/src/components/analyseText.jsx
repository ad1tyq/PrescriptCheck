import React, { useState } from "react";
import { UpdateHistory } from "./updateHistory.jsx";
import { useMedInfo } from "../context/MedInfoContext";
import { useHistory } from "../context/HistoryContext";
import { useNavigate } from "react-router-dom";
import { medicineTypes } from "../../data/medicineTypes";
import { useCheckInteract } from "../context/CheckInteractContext";
import { useInteract } from "../context/InteractContext";
import { text1, text2 } from "../../data/func.js";
function AnalyseText({ text }) {
    const { checkinteract } = useCheckInteract();
    const { setInteract } = useInteract();
    const { setMedInfo } = useMedInfo();
    const { setHistory } = useHistory(); // context
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading1, setIsLoading1] = useState(false);
    const [goAnalyse, setGoAnalyse] = useState(false);
    const AI_API_KEY = import.meta.env.VITE_AI_API_KEY;
    const AI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${AI_API_KEY}`;
    let prompt = `${text1} ${medicineTypes}` + text;
    let prompt1 = `${text2} ${checkinteract}`;

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
            setGoAnalyse(true); // console.log("AIresponse : \n", AIresponse);
            const DrugsListedString = AIresponse.replace(/^```javascript\n|\n```$/g, '');
            const DrugsArray = new Function(`return ${DrugsListedString}`)();
            setMedInfo(DrugsArray);
            setHistory(c => [...c, ...DrugsArray]); // console.log("drugs array :\n",DrugsArray)
        } catch (err) {
            setIsLoading(false);
            console.error(err);
            alert("extractor is overloaded please try again later");
        }
    }

    // checking drug interactions 
    const AI1 = async (val) => {
        const question = {
            message: val,
        }
        const req = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "contents": [{
                    "parts": [{ "text": question.message }]
                }]
            })
        }
        try {
            const response = await fetch(AI_API_URL, req);
            const data = await response.json();
            if (!response.ok) throw new Error(data.error.message)
            const AIresponse = data.candidates[0].content.parts[0].text;
            setIsLoading1(false);
            const DrugsInteractionString = AIresponse.replace(/^```javascript\n|\n```$/g, '');
            let DrugsInteractionArray = new Function(`return ${DrugsInteractionString}`)();
            setInteract(DrugsInteractionArray); // console.log(DrugsInteractionArray);
            navigate("/analysis");
        } catch (err) {
            setIsLoading1(false);
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
                    className="bg-violet-400 shadow my-3 hover:bg-violet-500 text-white cursor-pointer px-4 py-2 rounded">
                    {isLoading ? "Extracting..." : "Extract Drugs"}</button>
                <UpdateHistory/>
                {goAnalyse && (
                    <button onClick={() => {
                    //console.log("prompt 1 :\n",prompt1)
                    setIsLoading1(true);
                    AI1(prompt1);
                    }}
                    className="bg-violet-400 shadow hover:bg-violet-500 text-white cursor-pointer px-4 py-2 rounded">
                    {isLoading1 ? "Analysing..." : "Create Analysis"}</button>
                )}
            </div>
        </>
    )
}
export default AnalyseText;