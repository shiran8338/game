import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ScoreProvider } from "../context/ScoreContext";
import { Choice, Header } from "../components";
import styled from "styled-components";

export interface IGamePageProps { }

const Container = styled.div`
  width: 65vw;
  min-width: 700px;
  height: 80vh;
  min-height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  border-radius: 20px;
  -webkit-box-shadow: inset 0px 0px 15px 5px rgba(255, 255, 255, 0.253);
  box-shadow: inset 0px 0px 15px 5px rgba(255, 255, 255, 0.212);
  padding: 20px;
`;

const GamePage: React.FunctionComponent<IGamePageProps> = (props) => {
    // const [message, setMessage] = useState('');
    // const { number } = useParams();

    // useEffect(() => {
    //     if (number) {
    //         setMessage('The number is ' + number);
    //     } else {
    //         setMessage('No number was provided');
    //     }
    // }, []);

    return (
        <div>
            {/* <p>This is the game page.</p>
            <p>{message}</p> */}
            <ScoreProvider>
                <Container>
                    <Header />
                    <Choice />
                
                </Container>
            </ScoreProvider>
        </div>
    );
};

export default GamePage;
