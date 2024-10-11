import Cabecalho from "./Cabecalho.jsx";
import Menu from "./Menu.jsx"
import { Container } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <Container>
            <Cabecalho titulo="Sistema de Controle Gerencial" />
            <Menu />
            {
                props.children
            }
        </Container>
    );
}