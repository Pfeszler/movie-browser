import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 592px;
    margin: 180px auto;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 90vw;
    }
`;

export const StyledImage = styled.img`
    width: 100px;
`;

export const MainHeader = styled.h2`
    font-weight: 600;
    font-size: 36px;
    margin: 24px auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 20px;
        margin: 12px auto;
    }
`;

export const SmallHeader = styled.h3`
    font-weight: 500;
    font-size: 22px;
    margin: 24px auto;
    padding: 0 82px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
        margin: 12px auto;
        padding: 0 20px;
    }
`;

export const ButtonContainer = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 auto;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 150px;
    }
`;

export const StyledLink = styled(Link)`
    margin: 24px 0;
    padding: 16px 24px;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.refreshButtonFont};
    background-color: ${({ theme }) => theme.color.adultButton};
    border-radius: 5px;
     
    &:hover {
        filter: brightness(105%);
    }
       
    &:active {
        filter: brightness(110%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 9px;
        margin: 12px 0;
        padding: 8 12px;
    }
`;

export const Button = styled.button`
    padding: 16px 24px;
    font-weight: 700;
    font-size: 14px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.color.refreshButtonFont};
    background-color: ${({ theme }) => theme.color.refreshButtonBackground};
    border-radius: 5px;
     
     &:hover {
        filter: brightness(105%);
     }
       
     &:active {
        filter: brightness(110%);
     }

     @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 9px;
        padding: 8 12px;
    }
`;