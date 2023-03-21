import React from 'react';
import { useBQuestions } from '../hooks/useBQuestions';

export default function BQuestionsList(){
  
  const {error, loading, data} = useBQuestions();

  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error, something went wrong!</div>;
  


  return(
    <div className ="BQuestionList">
      {data.bQuestions.map(bQuestion => {
        return <div>
          <h2>{bQuestion.question}</h2>
        </div>
      })}
    </div>
  );
}