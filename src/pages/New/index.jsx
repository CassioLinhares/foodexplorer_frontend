import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

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

export function New() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('Refeição');
    const [filename, setFilename] = useState('');
    const [ingredient, setIngredient] = useState([]);
    const [description, setDescription] = useState('');
    const [newIngredient, setNewIngredient] = useState([]);

    const navigate = useNavigate();

    async function handleAddDish() {
        if (!image) {
            return alert("Selecione a imagem do prato.");
        }

        if (!name) {
            return alert("Digite o nome do prato.");
        }

        if (ingredient.length === 0) {
            return alert("Informe pelo menos um ingrediente do prato.");
        }

        if (newIngredient) {
            const fieldIngredient = window.confirm("Você deixou um ingrediente no campo. Deseja adicionar?");
            return fieldIngredient ? handleAddIngredient() : setNewIngredient("");
        }

        if (!price) {
            return alert("Digite o preço do prato.");
        }

        if (!description) {
            return alert("Digite a descrição do prato.");
        }

        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("ingredient", JSON.stringify(ingredient));
        formData.append("description", description);

        try {
            await api.post("/dish", formData);
            alert("Prato adicionado com sucesso!");
            handleBack();
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar");
            }
        }

    }

    function handleBack() {
        navigate(-1);
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        setImage(file);
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

    return (
        <Container>
            <Header />

            <Content>
                <ButtonReturn title="Voltar" icon={PiCaretLeft} small onClick={ handleBack } />
                <h1>Novo prato</h1>

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
                                id="btnName"
                                type="text"
                                placeholder="Ex.: Salada Ceasar"
                                onChange={e => setName(e.target.value)}
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
                                    <option value="Refeição" selected> Refeição </option>
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

                    <Button
                        isSave
                        title="Salvar alterações"
                        onClick = { handleAddDish }
                        className={"btnSave"}
                    />

                </form>

            </Content>

            <Footer />
        </Container>
    );
}