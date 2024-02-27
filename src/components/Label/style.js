import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.label`
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONT.ROBOTO};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    display: block;
    margin-bottom: .8rem;
`;