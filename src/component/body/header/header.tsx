import React from 'react';
import styled from 'styled-components';
import {FaHashtag} from 'react-icons/fa';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';

const BodyHeader = () => {
    return (
        <StyledWrapper>
            <StyledJoinWrapper>
                <StyledJoinLabel>Joining as a participant?</StyledJoinLabel>
                <StyledJoinInputWrapper>
                    <StyledJoinIcon></StyledJoinIcon>
                    <StyledJoinInput placeholder='Enter code here'></StyledJoinInput>
                    <StyledJoinButton></StyledJoinButton>
                </StyledJoinInputWrapper>
            </StyledJoinWrapper>
            <StyledTitle>Your go-to interaction app for <br/> hybrid meetings</StyledTitle>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    text-align: center;
`

const StyledJoinWrapper = styled.form`
    margin: 1.5rem 0 0rem 0;
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
    border-radius: 2rem;

    /* position: relative; */
    background-color: #1a73e8;
`

const StyledJoinLabel = styled.span`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    color: #fff;
    padding-right: 2rem;
`

const StyledJoinInputWrapper = styled.div`
    margin-top: 0;
    position:relative;
    display: flex;
    text-align: center;
`

const StyledJoinIcon = styled(FaHashtag)`
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    z-index: 50;

    color: #1a73e8;
`

const StyledJoinInput = styled.input`

    border: 0.0625rem solid #999;
    border-radius: 1.5rem;
    width: 100%;
    position: relative;
    background-color: #fff;
    font: 1.125rem/1.5rem arial,helvetica,Nimbus Sans L,Liberation Sans,freesans,sans-serif;
    text-overflow: ellipsis;
    padding: 0.5rem 2.5rem;

    &::placeholder {
        color:#000;
    }
`

const StyledJoinButton = styled(BsFillArrowRightCircleFill)`
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    z-index: 50;
    font-size: 2rem;

    color: #1a73e8;
`

const StyledTitle = styled.h1`
    text-align: center;

    font: 700 3.5rem/5rem SlidoSansFont,SlidoSansFont-fallback,verdana,arial,sans-serif;
`

export default BodyHeader;