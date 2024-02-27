import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/role";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/search";

import { Container, Content } from "./styles";
import { FiX, FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";
import { ButtonMenu } from "../../components/ButtonMenu";
import { Footer } from "../../components/Footer";

export function Menu() {
    const navigate = useNavigate();
    const { signOut, user } = useAuth();  
    const { search, setSearch } = useSearch();     

    function handleFavorite() {
        navigate("/favorite");
    }

    function handleBack() {
        navigate(-1);
    }

    function handleSignOut() {
        signOut();
        navigate("/");
    }

    return (
        <Container>
            <header>
               <button onClick={handleBack}>
                    <FiX />
               </button>
             
                <span>Menu</span>
            </header>

            <Content>
                <Input
                    type="search"
                    placeholder="Busque por pratos ou ingredientes"
                    icon={FiSearch}
                    value={search}
                    onChange={ e => setSearch(e.target.value) }
                />

               {
                [USER_ROLE.ADMIN].includes(user.role) &&
                    <ButtonMenu
                        title="Novo prato"
                        onClick={() => {navigate("/new")}}
                    />
                }

               {  [USER_ROLE.CUSTOMER].includes(user.role) &&
                    <ButtonMenu
                        title="Favoritos"
                        onClick={ handleFavorite }
                    />
                }

                <ButtonMenu
                    title="Sair"
                    onClick={ handleSignOut }
                />

            </Content>

            <Footer />
        </Container>
    );
}