import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    header {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 5.6rem 2.8rem 2.4rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_700 };

        button {
            display: flex;
            color: ${({ theme }) => theme.COLORS.LIGHT_100 };
        }

        svg {
            font-size: 2.5rem;
        }

        span {
            font-size: 2rem;
        }
    }

    footer {
        position: absolute;
        bottom: 0;
    }
`;

export const Content = styled.main`
    width: 100%;
    padding: 3.6rem 2.8rem;

    div {
        margin-bottom: 3.2rem;
    }
`;