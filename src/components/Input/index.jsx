import { Container } from "./style";

export function Input({ icon: Icon, isAdmin, ...rest }) {
    return (
        <Container {...rest} isAdmin={isAdmin}>
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    );
}