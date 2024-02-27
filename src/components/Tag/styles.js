import styled from "styled-components";

export const Container = styled.div`
    font-size: 1.4rem;
    padding: .4rem .8rem;
    border-radius: .5rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;