import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.header`
    width: 100%;
    padding: 5.6rem 2.8rem 2.4rem;

    display: flex;
    /* justify-content: space-between; */

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    .desktop {
        display: none;
    }

    .mobile {
        position: relative;
    }

    .favorite {
        font-size: 2.1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    svg {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    span {
        width: 2rem;
        position: absolute;
        right: -0.6rem;
        top: -0.6rem;

        border-radius: 50%;
        padding: .3rem;

        text-align: center;
        font-size: .9rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MM}){
        svg{
            font-size: 2.8rem;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        gap: 3.2rem;
        justify-content: center;

        .mobile,
            span {
                display: none;
            }

        .desktop {
            display: flex;
            align-items: center;
        }

        button {
            max-width: 20rem;
        }
    }
`;  

export const Brand = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    margin: 0 auto;

    > img {
        width: 15.4rem;
    }

    > p {
        font-weight: 500;
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-family: ${({ theme }) => theme.FONT.ROBOTO};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        margin: 0;

        img {
            max-width: 20rem;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        flex-direction: column;
        align-items: end;
        gap: 0;
        
        img {
            max-width: 20rem;
        }
    }
`;