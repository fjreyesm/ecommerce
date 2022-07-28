import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCoin";
import { Button } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
};

export const StoreItem = ({
  id,
  name,
  price,
  description,
  imgUrl,
}: StoreItemProps) => {
  let quantity = 1;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2"> {name}</span>
          <span className="ms-2 text-muted"> {formatCurrency(price)}</span>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <div>
          {quantity === 0 ? (
            <Button className="w-100"> + Add to Cart</Button>
          ) : (
            <div className="d-flex align-item-center flex-column justify-content-center">
              <div
                className="d-flex align-item-center 
                justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button> - </Button>
                <span className="fs-3"> {quantity}</span> added
                <Button> + </Button>
              </div>
              <p>
                <Button variant="danger" size="sm">
                  {" "}
                  Remove
                </Button>
              </p>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
