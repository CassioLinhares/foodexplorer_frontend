import { Container } from './style';

export function ButtonReturn ({ title, small, icon: Icon, ...rest }) {
    return (
        <Container
            type="button"
            small={small}
            {...rest}
        >
            {Icon && <Icon />}
            {title}
        </Container>
    )
}