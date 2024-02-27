import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/search";

import { Container, Banner } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { CardFood } from "../../components/CardFood";
import { Footer } from "../../components/Footer";

import bannerMobile from "../../assets/img-banner-mobile.svg";
import bannerDesktop from "../../assets/img-banner-desktop.png";

import { calculateSwiperParams } from "../../utils/calculateSwiperParams";
import { Navigation, A11y, Keyboard, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';

export function Home() {
    const [meals, setMeals] = useState([]);
    const [dessert, setDessert] = useState([]);
    const [drink, setDrink] = useState([]);
    const [data, setData] = useState(null);

    const navigate = useNavigate();
    const { search, setSearch } = useSearch(); 
    const { spaceBetween, slidesPerView } = calculateSwiperParams();

    console.log("ta dando um bug ao migrar de resolução tela no swipper, para corrigir basta atualizar a página");

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dish?search=${search}`);
setData(response.data);
            setMeals(response.data.filter((dish) => dish.category === "Refeição"));
            setDessert(response.data.filter((dish) => dish.category === "Sobremesa"));
            setDrink(response.data.filter((dish) => dish.category === "Bebida"));
        }
        fetchDish();
    }, [search]);

    return (
        <Container>
            <Header onChange={e => setSearch(e.target.value)} />

            <main>
                <Banner>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={bannerDesktop} alt="Imagem de brownies e biscoitos" />
                        <img src={bannerMobile} alt="Imagem de brownies e biscoitos" />
                    </picture>

                    <div className="leftContent">
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </Banner>

                {
                    meals.length > 0 &&
                    <Section title="Refeições">
                        <div>
                            <Swiper
                                modules={[Navigation, A11y, Keyboard, Autoplay]}
                                spaceBetween={spaceBetween}
                                slidesPerView={slidesPerView}
                                navigation
                                loop={true}
                                a11y={{
                                    prevSlideMessage: 'Slide anterior',
                                    nextSlideMessage: 'Próximo slide',
                                }}
                                keyboard={{
                                    enabled: true,
                                }}
                                autoplay={{
                                    delay: 25 * 1000,
                                    disableOnInteraction: false
                                }}
                            >
                                {
                                    meals && meals.map((dish, index) => (
                                        <SwiperSlide>
                                            <CardFood
                                                key={String(index)}
                                                name={dish.name}
                                                id={dish.id}
                                                description={dish.description}
                                                price={dish.price}
                                                src={`${api.defaults.baseURL}/files/${dish.image}`}
                                                onClick={() => { navigate(`/dish/${dish.id}`) }}
                                            />
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>
                    </Section>
                }

                {
                    dessert.length > 0 &&
                    <Section title="Sobremesas">
                        <div>
                            <Swiper
                                modules={[Navigation, A11y, Keyboard, Autoplay]}
                                spaceBetween={spaceBetween}
                                slidesPerView={slidesPerView}
                                navigation
                                loop={true}
                                a11y={{
                                    prevSlideMessage: 'Slide anterior',
                                    nextSlideMessage: 'Próximo slide',
                                }}
                                keyboard={{
                                    enabled: true,
                                }}
                                autoplay={{
                                    delay: 25 * 1000,
                                    disableOnInteraction: false
                                }}
                            >
                                {
                                    dessert && dessert.map((dish, index) => (
                                        <SwiperSlide>
                                            <CardFood
                                                key={String(index)}
                                                name={dish.name}
                                                id={dish.id}
                                                description={dish.description}
                                                price={dish.price}
                                                src={`${api.defaults.baseURL}/files/${dish.image}`}
                                                onClick={() => { navigate(`/dish/${dish.id}`) }}
                                            />
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>
                    </Section>
                }

                {
                    drink.length > 0 &&
                    <Section title="Bebidas">
                        <div>
                            <Swiper
                                modules={[Navigation, A11y, Keyboard, Autoplay]}
                                spaceBetween={spaceBetween}
                                slidesPerView={slidesPerView}
                                navigation
                                loop={true}
                                a11y={{
                                    prevSlideMessage: 'Slide anterior',
                                    nextSlideMessage: 'Próximo slide',
                                }}
                                keyboard={{
                                    enabled: true,
                                }}
                                autoplay={{
                                    delay: 25 * 1000,
                                    disableOnInteraction: false
                                }}
                            >
                                {
                                    drink && drink.map((dish, index) => (
                                        <SwiperSlide>
                                            <CardFood
                                                key={String(index)}
                                                name={dish.name}
                                                id={dish.id}
                                                description={dish.description}
                                                price={dish.price}
                                                src={`${api.defaults.baseURL}/files/${dish.image}`}
                                                onClick={() => { navigate(`/dish/${dish.id}`) }}
                                            />
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>
                    </Section>
                }

            </main>

            <Footer />
        </Container>
    );
}