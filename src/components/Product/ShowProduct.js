import { Row, Col } from 'react-bootstrap';

export const Grid = item => {
  return (
    <Col md="3">
      <div className="card">
        <img src={item.imgUrl} className="card-img-top" alt="product-image" />
        <div className="card-body">
          <h6 className="card-title">{`${item.brand} | ${item.model}`}</h6>
          <p className="card-text">{`€${item.price}`}</p>
        </div>
      </div>
    </Col>
  );
};

export const List = item => {
  return (
    <Col className="card listing" xs="12">
      <Row className="g-0">
        <Col xs="3">
          <img
            src={item.imgUrl}
            className="img-fluid rounded-start"
            alt="product-image"
          />
        </Col>
        <Col xs="7">
          <div className="card-body">
            <div className="card-text">
              Brand: <strong>{item.brand}</strong>
            </div>
            <div>
              Model: <strong>{item.model}</strong>
            </div>
          </div>
        </Col>
        <Col xs="2" className="text-end">
          <div className="card-body">
            <div className="card-text">{`€${item.price}`}</div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
