import { Container } from "./styles";

export function ButtonMenu({title, ...rest}) {
    return(
        <Container
            type="button"
            {...rest}
        >
            {title}
        </Container>
    );
}