import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    main {
        padding: 4.4rem 0 2.5rem 2.5rem;
    }

    .swiper-button-prev,
    .swiper-button-next {
        display: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        .swiper-button-prev,
        .swiper-button-next {
            display: block;
        }
    }
`;

export const Banner = styled.div`
    display: flex;
    height: 11rem;
    margin: 0 1.6rem 6.2rem 1.2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    border-radius: .3rem;

    img {
        display: block;
        max-width: 19rem;
        max-height: 15rem;
        object-fit: cover;
        margin: -4rem 0 0 -2.5rem;
    }

    .leftContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 19.6rem;
    }

    h1 {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: .3rem;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
        font-size: 1.2rem;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    //apartir min-tablet
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        height: 17.5rem;
        img {
            max-width: 35rem;
            max-height: 30rem;
        }

        .leftContent {
            max-width: 60%;

            h1 {
                font-size: 3.2rem;
            }

            p {
                font-size: 1.45rem;
            }
        }
    }

    //laptop
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        height: 26.6rem;
        margin: 0 12.4rem 6.4rem 12.4rem;

        img {
            max-width: 60rem;
            max-height: 31.6rem;
        }

        .leftContent{

            h1 {
                font-size: 4rem;
            }
        }
    }

    //tablet
    @media (max-width: ${DEVICE_BREAKPOINTS.MM}) {

        .leftContent {
            max-width: 16.5rem;
        }

        h1 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1rem;
        }
    }

    //375px
    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        height: 9rem;
        img {
            max-width: 15rem;
            margin: -2.9rem 0 0 -2.5rem;
        }

        .leftContent {
            max-width: 16.5rem;
        }

        h1 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1rem;
        }
    }

    //320px
    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
        img {
            max-width: 13.5rem;
            margin: -1.8rem 0 0 -2.5rem;
        }

        .leftContent {
            max-width: 15.5rem;
        }

        h1 {
            font-size: 1.4rem;
        }

        p {
            font-size: .8rem;
        }
    }

`;