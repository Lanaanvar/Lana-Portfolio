import React, { useState } from "react"
import { useEffect } from "react"
import { Container, Col, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "/src/assets/header-img.svg"
import "/src/assets/color-sharp.png"


export const Banner: React.FC = () => {
    const words = ['Frontend Developer', 'Backend Developer', 'Problem Solver', 'Creative Thinker']
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [speed, setSpeed] = useState(500)
    const period = 1000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }
        , speed);
            return () => {
                clearInterval(ticker)};
        }, [text, period, speed, isDeleting, index]);

    const tick = () => {
        let i = index % words.length;
        let fullText = words[i];
        if (isDeleting) {
            setText(fullText.substring(0, text.length - 1));
        } else {
            setText(fullText.substring(0, text.length + 1));
        }
        if (!isDeleting && text === fullText) {
            setTimeout(() => setIsDeleting(true), period);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setIndex(index + 1);
            setSpeed(300);
        }
    }


    return(
        <div className="banner" id ="home">
           <Container>
                <Row>
                     <Col xs={12} md={6} xl={7}>
                        <span className="banner-text">Hello, I'm <span className="text-color-main">Lana</span></span>
                        <h1 className="banner-title">{text}</h1>
                        <p className="banner-subtitle">As an aspiring frontend developer and AI/ML enthusiast, I love building innovative solutions that blend creativity and technology. With experience in React.js, Node.js, cloud computing, and data analysis, I aim to craft impactful applications, from caption generation for Instagram posts to food redistribution platforms. Let's shape the future together!
                        </p>
                        {/* <button onClick = {()=> console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button> */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="banner-img">
                            <img src={headerImg} alt="banner-img"/>
                        </div>
                    </Col>
                </Row>                                       
            </Container> 
        </div>
    )
}

export default Banner;