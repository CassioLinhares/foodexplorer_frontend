import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/role";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../hooks/favorites";

import { Container } from "./styles";
import { Button } from "../../components/Button";
import { NumberPicker } from "../../components/NumberPicker";

import { PiPencilSimple } from "react-icons/pi";
import { IoChevronForwardOutline, IoHeartSharp, IoHeartOutline } from "react-icons/io5";

export function CardFood({ id, src, onClick, name, description, price, ...rest }) {
    const [number, setNumber] = useState(1);

    const { user } = useAuth();
    const { favorites, addFavorite } = useFavorites();
    const isFavorite = favorites.some(item => item.id === id);
    
    const icon = isFavorite ? 
        <IoHeartSharp onClick={() => addFavorite({id})} /> : 
        <IoHeartOutline onClick={() => addFavorite({id})} />

    const navigate = useNavigate();

    function handleNavigateEditDish() {
        navigate(`/edit/${id}`);
    }

    return (
        <Container {...rest}>
            <button className="btnFavoriteEdit" >
                {
                    [USER_ROLE.ADMIN].includes(user.role) ?
                        <PiPencilSimple size={40} onClick={handleNavigateEditDish} /> :
                        icon
                }
            </button>

            <div>
                <img src={src} alt={`imagem de ${name}`} />

                <button onClick={onClick}>
                    <h2> {name} </h2>
                    <IoChevronForwardOutline />
                </button>

                <p>{description}</p>

                <span>R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>

                {
                    [USER_ROLE.CUSTOMER].includes(user.role) &&
                    <section className="itemQuantity">
                        <NumberPicker number={number} setNumber={setNumber} />
                        <Button title="incluir" />
                    </section>
                }

            </div>
        </Container>
    );
}
