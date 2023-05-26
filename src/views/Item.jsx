import {useEffect, useState, useRef} from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Container, Row, Col} from "react-bootstrap";
import Api from "../../data.json";
import Img from "../assets/img.jpg";

export default function Item() {
  const datos = Api.productos;
  console.log(datos)
  const mainOptions = {
    type      : 'loop',
    perPage   : 1,
    perMove   : 1,
    gap       : '1rem',
    pagination: false,
    height    : '20rem',
  };

  const thumbsOptions = {
    type        : 'slide',
    rewind      : true,
    gap         : '1rem',
    pagination  : false,
    fixedWidth  : 300,
    fixedHeight : 300,
    cover       : true,
    focus       : 'center',
    isNavigation: true,
  };
  const [state, setState] = useState([])
  const mainRef = useRef(<Splide/>)

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character").then(response => response.json())
    .then(data =>setState(data.results));
  }, [])
  const handleThumbs = (id) => {
    if (mainRef.current) {
       mainRef.current.go(id);
    }
  };
  
  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
        <Splide
      options={mainOptions}
      ref={mainRef}
      aria-label="My Favorite Images"
    >
      {state.map((product, index) => (
        <SplideSlide key={index}>
          <img src={product.image} alt={product.name}/>
        </SplideSlide>
      ))}
    </Splide>
    <Splide
      options={thumbsOptions}
      aria-label="My Favorite Images"
    >
      {state.map((product, index) => (
        <SplideSlide key={index}>
          <a href={"#"} onClick={()=> handleThumbs(index)}>
          <img src={product.image} alt={product.name}/></a>
        </SplideSlide>
      ))}
    </Splide> 

        </Col>
        <Col lg={6}>


        </Col>
      </Row>
</Container>
  );
}
