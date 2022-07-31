import { Offcanvas, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";

export function ShoppingCart() {
  return (
    <Offcanvas show={true} placement="end">
      <OffcanvasHeader closeButton>
        <OffcanvasTitle> Shopping Cart</OffcanvasTitle>
      </OffcanvasHeader>
    </Offcanvas>
  );
}
