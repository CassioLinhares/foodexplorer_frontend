import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    width: 100%;
    position: relative;

    button:first-child {
        position: absolute;
        top: 0;
        right: 0;

        transition: background-color 0.1s ease-in-out;
        z-index: 1;

        svg {
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }

    .DetailsDish{
        display: flex;
        align-items: center;
        gap: 2rem;
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    img {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        border-radius: 50%;
    }

    h3 {
        font-size: 1.6rem;
        font-weight: 500;
    }

    p {
        font-size: 1.2rem;
    }

    span {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        button:first-child {

            svg {
                font-size: 3rem;
            }
        }

        .DetailsDish{
            gap: 4rem;
        }

        img {
            width: 15rem;
            height: 15rem;
        }

        h3 {
            font-size: 2.1rem;
        }

        p {
            font-size: 1.4rem;
        }

        span {
            font-size: 1.8rem;
        }
    }
`;