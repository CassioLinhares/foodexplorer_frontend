import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`;

export const Content = styled.main`
    padding: 0 5.6rem 3.6rem;

    .btnLeft {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.4rem;
    }

    img{
        max-width: 26.4rem;
        display: block;
        margin: 1.6rem auto;
        border-radius: 50%;
    }

    h1 {
        font-size: 3.2rem;
        font-weight: 500;
        text-align: center;

        color: ${ ({theme}) => theme.COLORS.LIGHT_300};
    }

    p {
        text-align: center;
        color: ${ ({theme}) => theme.COLORS.LIGHT_300};
        margin: 2.4rem 0;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
     padding-left: 10rem;
     padding-right: 10rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        display: flex;
        align-items: center;
        padding: 1rem 15rem 5rem;
        gap: 6rem;

        .desktop {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        img {
            max-width: 40rem;
            margin: 1.6rem 0 0 0;
        }

        h1 {
            font-size: 4rem;
        }

        p {
            font-size: 2.4rem;
            text-align: left;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
        h1 {
            font-size: 2.8rem;
        }

        p {
            font-size: 1.4rem;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}){
        img {
            max-width: 20rem;
        }

        h1 {
            font-size: 2.3rem;
        }

        p {
            font-size: 1.15rem;
            text-align: center;
        }
    }
`;

export const Ingredients = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    margin-bottom: 5rem;
`;