import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;

    color: ${ ({theme}) => theme.COLORS.LIGHT_200};

    button {
        color: ${ ({theme}) => theme.COLORS.LIGHT_200};
    }

    svg {
        margin: 0;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        span,
        svg {
            font-size: 2.4rem;
        }
    }
`;