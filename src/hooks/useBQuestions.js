import { useQuery, gql } from "@apollo/client"

const GET_BQUESTIONS = gql `
query {
  bQuestions {
    id 
    question
  }
}
`;

export const useBQuestions = () => {
  const {error, data, loading} = useQuery(GET_BQUESTIONS);

  return {
    error,
    loading,
    data 
  }
}