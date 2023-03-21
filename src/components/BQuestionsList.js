import React from 'react';
import { useQuery, gql } from "@apollo/client"

const GET_BQUESTIONS = gql `
query {
  bQuestions {
    id 
    question
  }
}
`;

export default function BQuestionsList(){
  
  const {error, data, loading} = useQuery(GET_BQUESTIONS);

  console.log({error, loading, data});
  

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