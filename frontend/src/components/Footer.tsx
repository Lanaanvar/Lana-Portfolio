import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                    <div className="social-icons">
                        <a href="#"><FaLinkedin/></a>
                        <a href="#"><FaGithub /></a>
                    </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}