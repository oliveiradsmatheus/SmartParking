import { Alert, Card, Container } from "react-bootstrap";

import Pagina from "../layouts/layout.Pagina";

export default function Home(props) {
    return (
        <Pagina>
            <Container>
                <Alert className="mt-4 mb-4 text-center" variant="secondary">
                    <h2>
                        SMART PARKING
                    </h2>
                </Alert>
                <Card style={{ width: "65vw" }} className="mx-auto">
                    <div className="p-4 text-center">
                        <h4>
                            Seja bem-vindo ao Smart Parking, o estacionamento inteligente!
                        </h4>
                        <br />
                        <p>
                            Com rapidez e inovação, você pode descobrir facilmente quais vagas estão disponíveis e até buscar pela rua de destino. Além disso, oferecemos relatórios detalhados que são gerados automaticamente com base na sua localização. Incrível, não é?
                        </p>
                    </div>
                </Card>
            </Container>
        </Pagina>
    );
}   