import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { FaThList, FaTh } from 'react-icons/fa';
import {
  searchProducts,
  allProducts,
  filterProducts,
} from '../../app/slices/productSlice';
import { List, Grid } from '../Product/ShowProduct';

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector(allProducts);
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    dispatch(searchProducts()).then(data => console.log(data));
    setViewMode('grid');
  }, []);

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };

  return (
    <>
      <Row>
        <Col xs="4" md="6">
          <h1>Productos</h1>
        </Col>
        <Col xs="2" md="3" className="text-end">
          <button
            aria-label="viewMode"
            onClick={toggleViewMode}
            className="viewMode"
          >
            {viewMode === 'grid' ? <FaThList /> : <FaTh />}
          </button>
        </Col>
        <Col xs="3" className="text-end">
          <input
            name="search"
            type="text"
            placeholder="Buscar"
            className="searchbox"
            onKeyUp={e => dispatch(filterProducts(e.target.value))}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            {productList.map(item =>
              viewMode === 'grid' ? Grid(item) : List(item),
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;
