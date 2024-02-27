import { Container } from "./styles";
import { useFavorites } from "../../hooks/favorites";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export function CardFavorite({ id, src, name, description, price }) {
    const { favorites, addFavorite } = useFavorites();
    const isFavorite = favorites.some(item => item.id === id);

    const icon = isFavorite ?
        <IoHeartSharp onClick={() => addFavorite({ id })} /> :
        <IoHeartOutline onClick={() => addFavorite({ id })} />
        
        console.log(favorites);
    return (
        <Container>

            <button>{ icon }</button>

            <Link className="DetailsDish" to={`/dish/${id}`}>
                <img src={src} alt={`imagem de ${name}`} />

                <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <span>{price.toFixed(2)}</span>
                </div>
            </Link>

        </Container>
    );
}

