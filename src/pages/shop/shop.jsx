import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Container, Row, Col } from "reactstrap";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

export const Shop = () => {
   return (
      <Container>
         <div className="shopTitle">
            <h1>Mami's Gold Bakery</h1>
         </div>
         <Row className="products">
            {PRODUCTS.map((product) => (
               <Col lg="4" sm="6" xs="12">
                  <Product data={product} />
               </Col>
            ))}
         </Row>
      </Container>
   );
};
