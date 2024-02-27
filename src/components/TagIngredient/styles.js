import styled from "styled-components";

export const Container = styled.div`
    border: ${ ({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none" };
    border-radius: 0.8rem;

    color: ${ ({theme}) => theme.COLORS.LIGHT_100};
    background-color: ${ ({theme, isNew}) => isNew ? "transparent" :  theme.COLORS.LIGHT_600};

    display: flex;
    align-items: center;
    padding: 0.8rem 1.6rem;
    margin: 0.8rem 0;

    input{
        outline: none;
        border: none;

        background-color: transparent;
        color: ${ ({theme}) => theme.COLORS.LIGHT_100 };
        
        font-size: 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;

        &::placeholder{
            color: ${ ({theme}) => theme.COLORS.LIGHT_500 };
        }
    }

    button{
        border: none;
        background: none;
        color: ${ ({theme, isNew}) => isNew ? theme.COLORS.LIGHT_500 :  theme.COLORS.LIGHT_100};
        display: flex;
    }
`;