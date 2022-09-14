import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Grid = item => {
  return (
    <Col md="3" className="product-card" key={item.id}>
      <Link to={`/product/${item.id}`}>
        <div className="card">
          <img src={item.imgUrl} className="card-img-top" alt="product-image" />
          <div className="card-body">
            <h6 className="card-title">{`${item.brand} | ${item.model}`}</h6>
            <p className="card-text">{`€${item.price}`}</p>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export const List = item => {
  return (
    <Col className="card listing product-card" xs="12" key={item.id}>
      <Link to={`/product/${item.id}`}>
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
      </Link>
    </Col>
  );
};
