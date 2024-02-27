import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function TagIngredient({isNew, value, onClick, size, ...rest}) {

    return(
        <Container isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                size={size}
                {...rest}
            />
            <button 
                type="button"
                onClick={onClick}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}