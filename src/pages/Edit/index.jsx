import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

import { Container, Content, Image } from "./styles";
import { Header } from "../../components/Header";
import { ButtonReturn } from "../../components/ButtonReturn";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { TagIngredient } from "../../components/TagIngredient";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { FiUpload } from "react-icons/fi";
import { PiCaretLeft } from "react-icons/pi";

export function Edit() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [newImage, setNewImage] = useState(null);
    const [category, setCategory] = useState('');
    const [filename, setFilename] = useState('');
    const [ingredient, setIngredient] = useState([]);
    const [description, setDescription] = useState('');
    const [newIngredient, setNewIngredient] = useState([]);

    const navigate = useNavigate();
    const params = useParams();

    async function handleEditDish() {
        if (!image) {
            return alert("Selecione a imagem do prato.");
        }

        if (!name) {
            return alert("Digite o nome do prato.");
        }

        if (ingredient.length === 0) {
            return alert("Informe pelo menos um ingrediente do prato.");
        }

        if (newIngredient.length >= 1) {
            const fieldIngredient = window.confirm("Você deixou um ingrediente no campo. Deseja adicionar?");
            return fieldIngredient ? handleAddIngredient() : setNewIngredient("");
        }

        if (!price) {
            return alert("Digite o preço do prato.");
        }

        if (!description) {
            return alert("Digite a descrição do prato.");
        }

        try {
            await api.put(`/dish/${params.id}`, {
                name,
                price,
                category,
                ingredient,
                description
            });
               
               if (newImage) {
                const formData = new FormData();
                formData.append("image", newImage);
                await api.patch(`/dish/${params.id}/image`, formData);
               }
               

            alert("Prato editado com sucesso!");
            handleBack();

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível alterar as informações do prato!");
            }
        }

    }

    async function handleDeleteDish() {
        const confirm = window.confirm("Deseja realmente excluir o prato?");

        if (confirm) {
            try {
                await api.delete(`/dish/${params.id}`);
                alert("Prato excluido com sucesso!");
                handleBack();
            } catch (error) {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível excluir o prato!");
                }
            }
        }
    }

    function handleBack() {
        navigate(-1);
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        setImage(file);
        setNewImage(file);
        setFilename(file.name);
    }

    function handleAddIngredient() {
        if (newIngredient.length === 0) {
            return alert("Preencha o campo corretamente!");
        }
        setIngredient(prevState => [...prevState, newIngredient]);
        setNewIngredient('');
    }

    function handleDeleteIngredient(deleted) {
        setIngredient(prevState => prevState.filter(ingrediente => ingrediente !== deleted));
    }

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dish/${params.id}`);
            setName(response.data.name);
            setPrice(response.data.price);
            setImage(response.data.image);
            setCategory(response.data.category);
            setFilename(response.data.image);
            setDescription(response.data.description);
            const responseIngredients = response.data.ingredients;
            const allIngredients = responseIngredients.map((ingredients) => ingredients.name);
            setIngredient(allIngredients);
        }
        fetchDish();
    }, []);

    return (
        <Container>
            <Header />

            <Content>
                <ButtonReturn title="Voltar" icon={PiCaretLeft} small onClick={handleBack} />
                <h1>Editar prato</h1>

                <form action="#">
                    <section className="row-group1">

                        <div>
                            <Label htmlFor="btnImg" title="Imagem do prato" />
                            <Image>
                                <label htmlFor="img">
                                    <FiUpload size={25}/>
                                    <span>{filename || "Selecione imagem"}</span>
                                    <input
                                        id="img"
                                        type="file"
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </Image>
                        </div>

                        <div>
                            <Label htmlFor="btnName" title="Nome" />
                            <Input
                                type="text"
                                id="btnName"
                                placeholder="Ex.: Salada Ceasar"
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        </div>

                        <div>
                            <Label htmlFor="btnCategory" title="Categoria" />
                            <select
                                id="btnCategory"
                                onChange={e => { setCategory(e.target.value) }}
                                value={category}
                            >
                                <optgroup label="Selecione uma categoria">
                                    <option value="Refeição"> Refeição </option>
                                    <option value="Sobremesa"> Sobremesa </option>
                                    <option value="Bebida"> Bebida </option>
                                </optgroup>
                            </select>
                        </div>

                    </section>

                    <section className="row-group2">
                        <div>
                            <Label htmlFor="btnIngredients" title="Ingredientes" />
                            <div className='ingredient'>
                                <TagIngredient
                                    isNew
                                    placeholder="Adicionar"
                                    size={9}
                                    value={newIngredient}
                                    onChange={e => setNewIngredient(e.target.value)}
                                    onClick={handleAddIngredient}
                                />
                                {
                                    ingredient.map(
                                        (ingredient, index) => (
                                            <TagIngredient
                                                key={String(index)}
                                                value={ingredient}
                                                size={ingredient.length}
                                                onClick={() => handleDeleteIngredient(ingredient)}
                                            />
                                        )
                                    )
                                }
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="btnPrice" title="Preço" />
                            <Input
                                id="btnPrice"
                                type="Number"
                                placeholder="R$ 00,00"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>

                    </section>

                    <div>
                        <Label htmlFor="btnDescription" title="Descrição" />
                        <textarea
                            id="btnDescription"
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        >
                        </textarea>
                    </div>

                    <section className="btnSaveDelete">
                        <Button title="Excluir prato" isDelete onClick={handleDeleteDish} />
                        <Button title="Salvar alterações" isSave onClick={handleEditDish} />
                    </section>

                </form>

            </Content>

            <Footer />
        </Container>
    );
}