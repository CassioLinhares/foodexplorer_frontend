import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/role";
import { useSearch } from "../../hooks/search";
import { Link, useNavigate } from "react-router-dom";

import { Container, Brand } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { PiReceipt } from "react-icons/pi";
import { FiMenu, FiSearch, FiLogOut } from "react-icons/fi";
import logo from "../../assets/logo-mobile-explorerFood.svg";

export function Header({ onChange, ...rest }) {
    const navigate = useNavigate();
    const { user, signOut } = useAuth();
    const { search, setSearch } = useSearch();   

    function handleNavigateNewDish() {
        navigate("/new");
    }

    function handleSignOut() {
        signOut();
        navigate("/");
    }

    return (
        <Container>
            <Link className="mobile" to={"/menu"}>
                <FiMenu />
            </Link>

            <Brand>
                <img src={logo} alt="Brand foodExplorer" />
                {
                    [USER_ROLE.ADMIN].includes(user.role) &&
                    <p>admin</p>
                }
            </Brand>

            {[USER_ROLE.ADMIN].includes(user.role) ?
                <Input
                    type="search"
                    icon={FiSearch}
                    placeholder="Busque por pratos ou ingredientes"
                    className="desktop"
                    onChange={onChange}
                    isAdmin={true}
                    value={search}
                />
                :
                <Input
                    type="search"
                    icon={FiSearch}
                    placeholder="Busque por pratos ou ingredientes"
                    className="desktop"
                    onChange={onChange}
                    value={search}
                />
            }

            {[USER_ROLE.CUSTOMER].includes(user.role) &&
                <Link className="favorite desktop" to={"/favorite"}>
                    Favoritos
                </Link>}

            {
                [USER_ROLE.ADMIN].includes(user.role) ?
                    <Button
                        size={27}
                        title="Novo prato"
                        className="desktop"
                        onClick={handleNavigateNewDish}
                    />
                    :
                    <Button
                        span
                        size={27}
                        title="Pedidos"
                        icon={PiReceipt}
                        className="desktop"
                    />
            }

            <button className="desktop" onClick={handleSignOut}>
                <FiLogOut />
            </button>

            {
                [USER_ROLE.CUSTOMER].includes(user.role) &&
                <button className="mobile">
                    <PiReceipt />
                    <span>0</span>
                </button>
            }

        </Container>
    )
}