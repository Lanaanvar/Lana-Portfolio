import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Container } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '/src/assets/sahaayi.png';
import '/src/assets/color-sharp2.png';

export const Projects: React.FC = () => {
    const projects = [
        {
          title: "Sahaayi",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Instagram Caption Generator",
          description: "Design & Development",
          imgUrl: '/src/assets/insta.png',
        },
        {
          title: "Surplus Serve",
          description: "Design & Development",
          imgUrl: 'src/assets/Surplus-food.png',
        },
        {
          title: "Automatic Evaluation of Handwritten Answersheets",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Online Book Sales",
          description: "Design & Development",
          imgUrl: '/src/assets/online-book.png',
        },
      ];

      return (
        <div className="projects" id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>These are my projects...</p>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Nav variant="pills" >
                                <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index)=>{
                                                return(
                                                    <ProjectCard key={index}
                                                        title={project.title}
                                                        description={project.description}
                                                        imgUrl={project.imgUrl}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
      )

}