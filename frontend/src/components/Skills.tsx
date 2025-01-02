import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    {
      title: "Web Development",
      imagePath: "/src/assets/meter1.svg"
    },
    {
      title: "Frontend Development",
      imagePath: "/src/assets/meter1.svg"
    },
    {
      title: "Backend Development",
      imagePath: "/src/assets/meter1.svg"
    }
  ];

  return (
    <section className="skills" id="skills">
      <Container className="h-full">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={10} lg={8}>
            <div className="skill-bx">
              <h2 className="text-center">Skills</h2>
              <p className="text-center mb-8">
                I have experience in a variety of programming languages and tools. 
                Here are a few of the technologies I've worked with recently:
              </p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="skill-slider"
                autoPlay={true}
                autoPlaySpeed={3000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.imagePath} alt={skill.title} />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};

export default Skills;