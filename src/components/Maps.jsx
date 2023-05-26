import { Row, Col, Container } from "react-bootstrap";

export default function Maps() {
  return (
    <Container fluid>
      <Row>
        <Col md={12} lg={12} xs={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4276.5580215649!2d-67.01343270677256!3d10.608807943585772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1684261287964!5m2!1ses-419!2sar"
            width="100%"
            height="400"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}
