import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    width: 21rem;
    height: 35rem;
    padding: 2.4rem;

    border-radius: .8rem;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .btnFavoriteEdit {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transition: background-color 0.1s ease-in-out;
        border-radius: 1rem;

        svg {
            font-size: 3rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }

    .btnFavoriteEdit:active {
       background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }
    

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.2rem;

        > img {
            object-fit: cover;
            max-width: 10rem;
            max-height: 10rem;
            border-radius: 50%;
        }

        > button {
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            width: 100%;

            h2 {
                font-weight: 500;
                font-size: 1.4rem;
                line-height: 2.4rem;

                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            svg {
                font-size: 1.8rem;
            }
        }

        > p {
            display: none;
        }

        > span {
            line-height: 100%;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }

        .itemQuantity {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.2rem;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        width: 30rem;
        height: 49.5rem;
        padding: 1rem 2.4rem 4.6rem;

        .btnFavoriteEdit {
            top: 2rem;
            right: 2rem;
        }

        > div {
            gap: 1.5rem;

            > img {
                max-width: 18rem;
                max-height: 18rem;
             }

            > button {
                h2 {
                    font-weight: 700;
                    font-size: 2.4rem;
                    line-height: 140%;
                }

                svg {
                    font-size: 2.4rem;
                }
            }

            > p {
                display: block;
                font-size: 1.2rem;
                text-align: center;
            }

            > span {
                font-size: 3.2rem;
            }

            .itemQuantity {
                flex-direction: row;
                gap: 1.6rem;
            }
        }

    }
`;