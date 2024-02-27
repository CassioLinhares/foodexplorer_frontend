import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000 };

    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    background-color: transparent;

    font-size: 2rem;
    font-family: ${({ theme }) => theme.FONT.POPPINS };
    text-align: left;
`;