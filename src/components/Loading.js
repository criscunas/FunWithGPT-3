import { CircularProgress } from "@material-ui/core";
import styled from 'styled-components'

const LoadingDiv = styled.div`
  text-align: center;
  color: #004c3f;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  padding-top: 1rem;
`;


export const Loading = () => {
  return (
    <LoadingDiv>
      <CircularProgress color = "success" />
      <Title> Generating Results </Title>
    </LoadingDiv>
  )
}