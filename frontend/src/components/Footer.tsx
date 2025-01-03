import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/lana-anvar" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                        <a href="https://github.com/Lanaanvar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}