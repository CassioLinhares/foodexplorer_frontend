import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Container, Brand, Form } from "./styles";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import Logo from "../../assets/logo-mobile-explorerFood.svg";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const {signIn} = useAuth();

    function handleSignIn() {
        signIn({ email, password });
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
                        htmlFor="email"
                        title={"Email"}
                    />
                    <Input
                        id="email"
                        type="email"
                        placeholder="Exemplo: exemplo@exemplo.com"
                        onChange = {e => setEmail(e.target.value)}
                    />

                    <Label
                        htmlFor="password"
                        title={"Password"}
                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                        onChange = {e => setPassword(e.target.value)}
                    />

                    <Button 
                        title="Entrar"
                        onClick={handleSignIn}
                        // loading={loading}
                    />

                    <Link to="/register">
                        Criar uma conta
                    </Link>

                </Form>
            </main>
        </Container>
    );
}