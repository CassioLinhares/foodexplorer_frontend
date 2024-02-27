import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { USER_ROLE } from "../../utils/role";
import { useNavigate, useParams } from "react-router-dom";

import { Container, Content, Ingredients } from "./styles";
import { Header } from "../../components/Header";
import { ButtonReturn } from "../../components/ButtonReturn";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { NumberPicker } from "../../components/NumberPicker";
import { Footer } from "../../components/Footer";
import { PiCaretLeft, PiReceipt } from "react-icons/pi";

export function Dish() {
    const [data, setData] = useState(null);
    const [number, setNumber] = useState(1);

    const { user } = useAuth();
    const params = useParams();
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleNavigateEditDish() {
        navigate(`/edit/${params.id}`);
    }

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dish/${params.id}`);
            setData(response.data);
        }
        fetchDish();

    }, []);

    return (
        <Container>
            <Header />

            <ButtonReturn
                icon={PiCaretLeft}
                title="Voltar"
                onClick={handleBack}
            />
            
            { data && (

                <Content>
                    <img src={`${api.defaults.baseURL}/files/${data.image}`} alt={data.name} />

                    <div className="desktop">
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>

                        {
                            data.ingredients &&
                            <Ingredients>
                                {
                                    data.ingredients.map(ingredient => (
                                        <Tag
                                            key={String(ingredient.id)}
                                            title={ingredient.name}
                                        />
                                    ))
                                }
                            </Ingredients>
                        }

                        <div className="btnLeft">
                            {
                                [USER_ROLE.CUSTOMER].includes(user.role) ?
                                <>
                                    <NumberPicker number={number} setNumber={setNumber} />
                                    <Button
                                        title={`pedir ∙ R$ ${data.price}`}
                                        icon={PiReceipt}
                                    />
                                </>
                                :
                                <Button
                                    title={"Editar prato"}
                                    onClick={handleNavigateEditDish}
                                />
                            }
                        </div>
                    </div>
                </Content>

            )}

            <Footer />
        </Container>
    )
}