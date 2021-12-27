import "./App.css";
import ImgDropAndCrop from "./components/ImgDropAndCrop";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={8}>
          <div className="App">
            <ImgDropAndCrop />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
