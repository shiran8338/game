import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { colors, images } from "../../assets";
import * as S from "./Test.style";

export interface ITestPageProps { }

const TestPage: React.FunctionComponent<ITestPageProps> = (props) => {


    return (
        <div>
            <p>404 Page not Found.</p>

            <p><Link to="/game">Direct to the Game Page</Link></p>
            <S.Wrapper>
                <S.Circle color={colors.red} animation = {true}>
                </S.Circle>
            </S.Wrapper>
        </div>
    );
};

export default TestPage;
