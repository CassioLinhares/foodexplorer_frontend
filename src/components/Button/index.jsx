import { Container } from './style';

export function Button ({ title, isDelete, isSave, loading = false, icon: Icon, span,size, ...rest }) {
    return (
        <Container
            type="button"
            disabled={loading}
            isDelete={isDelete}
            isSave={isSave}
            {...rest}
        >
            {Icon && <Icon size={size ? size : 17} />}
            {loading ? 'Carregando' : title}
            {span && <small>(0)</small>}
        </Container>
    )
}