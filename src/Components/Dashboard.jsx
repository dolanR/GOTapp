import React, { useState } from "react";
import useFetchData from "../Hooks/useFetchData";
import Characters from "./Characters";
import Books from "./Books";

const Dashboard = () => {
  const [selection, setSelection] = useState(null);
  const { data, loading, error, setLoading, setData } = useFetchData(selection);

  const questions = ["character", "book"];

  return (
    <div className='flex gap-2 flex-col justify-center items-center overflow-scroll'>
      <div className='flex flex-col md:max-h-[85vh] max-h-[78vh]'>
        <div className='flex justify-center items-center gap-2 p-2 top-0'>
          {questions.map((question, index) => (
            <button
              key={index}
              onClick={() => {
                if (selection === question) return;
                setSelection(question);
                setLoading(true);
              }}
              className={`${
                question === selection ? "bg-red-500 bg-opacity-60" : ""
              } bg-stone-200 bg-opacity-60 text-black font-medieval font-bold text-2xl p-2 hover:bg-stone-500 hover:bg-opacity-90
            `}
            >
              {question}
            </button>
          ))}
        </div>
        {loading && <div className='text-center pt-4'>Loading...</div>}
        {data && !loading && selection === "character" && (
          <Characters data={data} setData={setData} />
        )}
        {data && !loading && selection === "book" && <Books data={data} />}
      </div>
    </div>
  );
};

export default Dashboard;
