import { Row, Col, Container, Button, Form } from "react-bootstrap";
import CardProduct from "./CardProduct";
import styled from "styled-components";

export default function Products({ product, flat }) {
  console.log(product);
  const StyleSpan = styled.span`
    display: ${(props) => (props.variant === "hide" ? "none" : "")};
  `;
  return (
    <Container fluid >
              
      <Row style={{ marginTop: "25px" }}>
<h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Productos <StyleSpan variant={flat}>Destacados</StyleSpan>
        </h3>
        <h4 style={{ textAlign: "center", marginBottom: "20px" }}>Categorias</h4>
        {flat ? (
          
          <div className="d-flex justify-content-center"> 
          
          <Form.Select  style={{ maxWidth: "200px",}} aria-label="Default select example">
            <option>Categorias</option>
            <option value="1">Todos los productos</option>
            <option value="2">Ropa</option>
            <option value="3">Three</option>
          </Form.Select></div>
        ) : (
          false
        )}
        {product.map((row, i) => (
          <Col style={{ marginBottom: "25px", marginTop: "25px" }} md={6} lg={3} xs={12}>
            <CardProduct products={row} key={i} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col style={{ textAlign: "center", marginBottom: "25px" }}>
          {flat ? (
            false
          ) : (
            <Button
              style={{ background: "#252525", border: "1px solid #25252" }}
            >
              VER TODOS LOS PRODUCTOS
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}
