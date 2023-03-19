import { Card, Container, Row, Col } from "react-bootstrap";
import image from "../../images/Lkey-rick-and-morty.jfif";

const Main = () => {
  return (
    <>
      <h2>The multiverse awaits you! </h2>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img src={image} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
