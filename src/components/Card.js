import React from 'react';
import styled from 'styled-components';
import cardImage from '../images/MD-VideoHomeChef.png';
import playIcon from '../images/play.png';
import cardLabelImg from '../images/Rectangle_2.png';
import titleIcon from '../images/titleIcon.svg';
import listIcon from '../images/list-style-check.svg';
import { CardButton } from './CardButton';
import { CardScore } from './CardScore';

const CardContainer = styled.div`
    width: 680px;
    max-width: 100%;
    height: 200px;
    border-radius: 3px;
    border: 1px solid #e2e2e2;
    background-color: #ffffff;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    @media(max-width: 768px){
        width: 336px;
        box-shadow: 0 2px 12px rgba(192, 182, 182, 0.5);
        height: 311px;
        padding: 0;
        position: relative;
    }
`

const CardVideoContainer = styled.div`
    width: 338px;
    height: 190px;
    background-image: url(${cardImage});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    > .card-video__icon{
        cursor: pointer;
    }
    > .card-video__label{
        width: 210px;
        height: 20px;
        background-image: url(${cardLabelImg});
        color: rgba(255, 255, 255, 0.87);
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 400;
        position: absolute;
        top: -5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media(max-width: 768px){
        width: 100%;
        position: absolute;
        top: 54px;
        > .card-video__label{
            top: 0;
            left: 0;
            width: 131px;
            height: 25px;
            border-radius: 0 0 3px;
            background-color: rgba(0, 0, 0, 0.43);
            background-image: unset;
            color: #ffffff;
            font-weight: 500;
            line-height: 13px;
        }
    }
`

const CardDetailsContainer = styled.div`
    padding: 13px 15px 10px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    height: 100%;
    flex: 1;
    flex-direction: column;
    position: relative;
    .card-details__link{
        text-decoration: none;
        color: #ff6a56;
        font-size: 14px;
        font-weight: 400; 
        margin: 0 auto;
        text-transform: capitalize;
    }
    > .card-details__header{
        display: flex;
        justify-content: space-between;
        width: 100%;
        > .card-details__header.header--right{
            > .card-details__link{
                display: none;
            }
        }
    }
    > .card-details{
        width: 100%;
        > .card-details__list{
            padding: 0;
            margin: 9px 0 11px;
            list-style-position: inside;
            list-style-image: url(${listIcon});
            > .card-details__item{
                color: rgba(34, 34, 34, 0.87);
                font-size: 14px;
                font-weight: 400;
                &:not(:last-child){
                    margin-bottom: 8px;
                }
            }
        }
        > .card-details__actions{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    @media(max-width: 768px){
        width: 100%;
        padding: 0;
        justify-content: space-between;
        > .card-details__header{
            padding: 11px 13px 10px;
            box-sizing: border-box;
            > .card-details__header.header--right{
                > .card-details__link{
                    display: initial;
                    font-size: 12px;
                }
            }
        }
        > .card-details {
            display: flex;
            justify-content: space-between;
            padding: 11px 13px 17px 16px;
            box-sizing: border-box;
            > .card-details__list{
                margin: 0;
                > .card-details__item{
                    font-size: 13px;
                    &:not(:first-child){
                        margin-bottom: 0;
                    }
                    &:last-child{
                        display: none;
                    }
                }
            }
            > .card-details__actions{
                width: unset;
                > .card-details__link{
                    display: none;
                }
            }
        }
    }
    @media(max-width: 375px){
        > .card-details > .card-details__list > .card-details__item{
            font-size: 10px;
        }
    }
`

const CardTitle = styled.h4`
    text-transform: uppercase;
    color: #339d48;
    font-family: inherit;
    margin: 0;
    font-weight: 700;
    display: flex;
    align-items: center;
    > .card-title__img{
        margin-right: 6px;
    }
    @media(max-width: 768px){
        > .card-title__img{
            width: 30px;
        }
    }
`

export const Card = () => (
    <CardContainer>
        <CardVideoContainer className="card-video">
            <img src={playIcon} alt="play" className="card-video__icon"/>
            <div className="card-video__label">Exclusive Offer</div>
        </CardVideoContainer>
        <CardDetailsContainer>
            <div className="card-details__header">
                <CardTitle className="card-title">
                    <img src={titleIcon} alt="cultery" className="card-title__img"/>
                    <span className="card-title__text">home cheff</span>
                </CardTitle>
                <div className="card-details__header header--right">
                    <CardScore/>
                    <a className="card-details__link" href="#">read review</a>
                </div>
            </div>
            <div className="card-details">
                <ul className="card-details__list">
                    <li className="card-details__item">$30 off your first order</li>
                    <li className="card-details__item">Healthy meals in 30 minutes</li>
                    <li className="card-details__item">Fresh ingredients, not frozen</li>
                </ul>
                <div className="card-details__actions">
                    <a className="card-details__link" href="#">read review</a>
                    <CardButton/>
                </div>
            </div>
        </CardDetailsContainer>
    </CardContainer>
)