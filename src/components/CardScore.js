import React from 'react';
import styled from 'styled-components';

const CardScoreContainer = styled.div`
    margin-top: -8px;
    margin-right: 1px;
    color: #000000;
    font-family: inherit;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.22px;
    line-height: 18px;
    width: 57px;
    text-align: center;
    > span.score{
        font-size: 25px;
        font-weight: 700;
        letter-spacing: 0.5px;
        color: #000000;
    }
    @media(max-width: 768px){
        width: unset;
        font-size: 12px;
        line-height: 13px;
        margin: unset;
        color: rgba(34, 34, 34, 0.87);
        > span.score{
            font-size: 15px;
            font-weight: 700;
            letter-spacing: -0.25px;
            color: #222222;
        }
    }
`

export const CardScore = () => (
    <CardScoreContainer>
        Our Score <span className="score">9.8</span>
    </CardScoreContainer>
)