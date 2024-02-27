import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useFavorites } from "../../hooks/favorites";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { Header } from "../../components/Header";
import { CardFavorite } from "../../components/CardFavorite";
import { Section } from "../../components/Section";
import { ButtonReturn } from "../../components/ButtonReturn";
import { Footer } from "../../components/Footer";

import { PiCaretLeft } from "react-icons/pi";

export function Favorites() {
    const [favoriteDishes, setFavoriteDishes] = useState([]);

    const navigate = useNavigate();
    const { favorites } = useFavorites();

    function handleBack() {
        navigate("/");
    }

    useEffect(() => {
        async function fetchFavoriteDishes() {
            const response = await api.get("/dish");
            const allDishes = response.data;
            const dishFavorite = allDishes.filter(dish => favorites.some(favorite => favorite.id === dish.id));
            setFavoriteDishes(dishFavorite);
        }

        fetchFavoriteDishes();
    }, [favorites]);

    return (
        <Container>
            <Header />

            <main>
                <ButtonReturn
                    icon={PiCaretLeft}
                    title="voltar"
                    small={true}
                    onClick={handleBack}
                />

                <Section title="Favoritos">
                    {
                        favoriteDishes.length === 0 ?
                            <span>Não há pratos favoritos :|</span> :

                            favoriteDishes.map((dish, index) => (
                                <div className="cardFavorite">
                                    <CardFavorite
                                        key={String(index)}
                                        id={dish.id}
                                        name={dish.name}
                                        description={dish.description}
                                        price={dish.price}
                                        src={`${api.defaults.baseURL}/files/${dish.image}`}
                                    />
                                </div>
                            ))
                    }
                </Section>
            </main>
            <Footer />
        </Container>
    );
}
