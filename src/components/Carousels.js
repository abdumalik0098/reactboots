import React, {Component} from 'react';
import Row from "react-bootstrap/es/Row";
import Carousel from "react-bootstrap/es/Carousel";
import  "../styles/Carousels.css";


class Carousels extends Component {
    render() {
        return (
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500"   src="../img/slide1.jpg" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="../img/slide2.jpg"/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="../img/slide3.jpg"/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
        );
    }
}



export default Carousels;
