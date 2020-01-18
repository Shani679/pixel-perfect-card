import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 3px;
    background-image: linear-gradient(180deg, #ff8373 0%, #ff6a56 100%);
    border: none;
    outline: none;
    color: #ffffff;
    font-family: inherit;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    text-transform: capitalize;
    @media(max-width: 768px){
        width: 88px;
        height: 32px;
        font-size: 13px;
        font-weight: 500;
    }
`

export const CardButton = () => (
    <Button>order now</Button>
)