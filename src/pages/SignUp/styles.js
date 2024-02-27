import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    main {
        margin-top: calc((1/6) *100vh);
        margin-inline: 6.5rem;
    }

    a {
        text-align: center;
        text-decoration: none;
        font-size: 2rem;
        font-family: ${({ theme }) => theme.FONT.POPPINS};

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: transparent;

        display: block;
        margin-top: 3.2rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
        main {
            margin-top: calc((1/8) *100vh);
            margin-inline: 3.5rem;
        }

        a {
            font-size: 1.6rem;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        main {
            margin-top: calc((1/8) *100vh);
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        display: flex;
        justify-content: center;
        
        main {
            display: flex;
            align-items: center;
            gap: 20rem;
            margin: 0;
            margin-inline: 0;
        } 
    }
`;

export const Brand = styled.div`
    margin-bottom: 6.3rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
        margin-bottom: 4rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}){
        img {
            width: 22rem;
        }
    }
`;

export const Form = styled.form`
    h1{
        display: none;
        margin-bottom: 3.2rem;

        font-size: 3.2rem;
        font-weight: 500;
        font-family: ${({ theme }) => theme.FONT.POPPINS};

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    div {
        margin-bottom: 3.2rem;
     }

    

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        padding: 6.4rem;
        border-radius: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_700};

        h1{
            display: block;
        }

    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        width: 47.6rem;
        height: 60rem;
        padding: 4.5rem 6.4rem;
    }
`;
