import { Col, Row } from "react-bootstrap";
import stoteItems from "../data/items.json";

export const Store = () => {
  return (
    <>
      <div>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {stoteItems.map((item) => (
            <Col key={item.id}>
              <img src={item.imgUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
