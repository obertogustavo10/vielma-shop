import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  const StyleLink = styled(Link)`
    color: #fff;
    font-weight: bold;
    font-family: cursive;
    text-decoration: none;
    border-radius: 100px;
    &:hover {
      color: #87a851;
      border-radius: 100px;
    }
  `;
  const StyleSection = styled(Row)`
    height: 6rem;
    padding-top: 0.8rem;
    background: #252525;
    @media (max-width: 576px) {
    }
  `;
  const StyleRow = styled(Row)`
    border-top: 1px solid #d0d0d0;
    background: #252525;
    padding: 20px;
  `;

  const StyleCol = styled(Col)`
    color: #a9a29d;
    font-size: 0.875rem;
  `;
  const StyleA = styled.a`
    color: #252525;
    text-decoration: none;
    background-color: #fff;
    font-size: 18px;
    display: inline-block;
    color: #252525;
    line-height: 1;
    padding: 8px 8px;
    margin-right: 15px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
    &:hover {
      background-color: #14ae87;
      color: #fff;
    }
  `;
  /*   const StyleImg = styled.img`
    width: 70px;
    text-align: center;
  `; */

  return (
    <Container fluid>
      <StyleSection className="justify-content-center">
        <Col xs={4} md={6} lg={6}>
          <p style={{ color: "white" }}>Vielma Shop</p>
        </Col>
        <Col xs={8} md={4} lg={4}>
          <p style={{ color: "white" }}>Nuestras Redes</p>
          <StyleA href="http://">
            <BsFacebook />
          </StyleA>
          <StyleA href="http://">
            <BsTwitter />
          </StyleA>
          <StyleA href="http://">
            <BsInstagram />
          </StyleA>
          <StyleA href="http://">
            <BsWhatsapp />
          </StyleA>
        </Col>
      </StyleSection>
      <StyleRow>
        <StyleCol xs={12} md={9} lg={9}>
          Vielma Shop © 2023. Todos los derechos reservados.
        </StyleCol>
        <StyleCol xs={12} md={3} lg={3}>
          Desarrollado por <StyleLink to="/">TIM APP</StyleLink>
        </StyleCol>
      </StyleRow>
    </Container>
  );
}
