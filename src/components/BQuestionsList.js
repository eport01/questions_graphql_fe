import React from 'react';
import { useBQuestions } from '../hooks/useBQuestions';

export default function BQuestionsList(){
  
  const {error, loading, data} = useBQuestions();

  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error, something went wrong!</div>;
  


  return(
    <div className ="BQuestionList">
      {data.bQuestions.map(bQuestion => {
        return <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
          <h2 className='text-3xl text-gray-700 font-bold mb-5'>{bQuestion.question}</h2>
        </div>
      })}
    </div>
  );
}