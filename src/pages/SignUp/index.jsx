import { useState } from "react";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Brand, Form } from "./styles";

import Logo from "../../assets/logo-mobile-explorerFood.svg";

export function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSingUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não possível cadastrar usuário");
                }
            });
    }

    return (
        <Container>
            <main>
                <Brand>
                    <img src={Logo} alt="foodExplorer company logo" />
                </Brand>

                <Form>
                    <h1>Faça login</h1>

                    <Label
                        htmlFor="name"
                        title={"Nome"}
                    />
                    <Input
                        id="name"
                        type="text"
                        placeholder="Exemplo: Maria da Silva"
                        onChange={e => setName(e.target.value)}
                    />

                    <Label
                        htmlFor="email"
                        title={"Email"}
                    />
                    <Input
                        id="email"
                        type="email"
                        placeholder="Exemplo: exemplo@exemplo.com"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Label
                        htmlFor="password"
                        title={"Senha"}
                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button
                        title="Criar conta"
                        onClick={handleSingUp}
                    // loading={loading}
                    />

                    <Link to="/">
                        Já tenho uma conta
                    </Link>

                </Form>
            </main>
        </Container>
    );
}