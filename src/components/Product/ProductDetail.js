import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct, productDetail } from '../../app/slices/productSlice';
import { addToCart } from '../../app/slices/cartSlice';

const ProductDetail = () => {
  const { id: productId } = useParams();
  const product = useSelector(productDetail);
  const dispatch = useDispatch();
  const [description, setDescription] = useState([]);
  const [options, setOptions] = useState({ color: null, storage: null });
  const [addingToCart, setAddingToCart] = useState(false);
  const [addToCartLabel, setAddToCartLabel] = useState('Añadir al carrito');
  const [addButtonId, setAddButtonId] = useState('addButton');

  const getDescription = () => {
    if (product) {
      const descNames = Object.keys(product);
      const disabledDescriptions = ['id', 'imgUrl', 'options'];
      const enabledDescriptions = descNames.filter(
        desc =>
          typeof product[desc] === 'string' &&
          !disabledDescriptions.includes(desc),
      );
      const descriptions = enabledDescriptions.map(desc => {
        return {
          name: desc.replace(/([A-Z])/g, ' $1').toUpperCase(),
          value: product[desc] && product[desc],
        };
      });
      setDescription(descriptions);
    }
  };

  const addWithOptions = () => {
    setAddingToCart(true);
    dispatch(
      addToCart({
        id: product.id,
        colorCode: options.color,
        storageCode: options.storage,
      }),
    ).then(() => {
      setAddButtonId('addedButton');
      setAddToCartLabel('Añadido al carrito!');
      setTimeout(() => {
        setAddToCartLabel('Añadir al carrito');
        setAddButtonId('addButton');
      }, 3000);
      setAddingToCart(false);
    });
  };

  const optionSelect = (listOpts, name, label) => {
    return (
      <select
        data-testid={name}
        onChange={e => setOptions({ ...options, [name]: e.target.value })}
      >
        <option value="">{label}</option>
        {listOpts.map(item => {
          return (
            <option value={item.code} key={item.code}>
              {item.name}
            </option>
          );
        })}
      </select>
    );
  };

  useEffect(() => {
    dispatch(getProduct(productId));
  }, []);

  useEffect(() => {
    if (product) {
      getDescription();
    }
  }, [product]);

  return (
    <>
      {product && (
        <Row>
          <Col md="3">
            {product.imgUrl && <img src={product.imgUrl} alt="product-image" />}
          </Col>
          <Col md="9">
            <Row>
              <Col xs="12">
                <small>
                  <Link to="/">volver al listado</Link>
                </small>
                <h1 className="product-title">{`${product.brand} ${product.model}`}</h1>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs="4">
                {optionSelect(product.options?.colors, 'color', 'Color')}
              </Col>
              <Col xs="4">
                {optionSelect(
                  product.options?.storages,
                  'storage',
                  'Almacenamiento',
                )}
              </Col>
              <Col xs="4">
                <button
                  onClick={addWithOptions}
                  disabled={!options.storage || !options.color || addingToCart}
                  data-testid={addButtonId}
                >
                  {addToCartLabel}
                </button>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Detalle</h3>
              </Col>
            </Row>
            <Row className="product-description">
              {description.map(item => {
                return (
                  <Row key={item.name}>
                    <Col xs="4">{item.name}</Col>
                    <Col xs="8">{`${item.value}`}</Col>
                  </Row>
                );
              })}
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductDetail;
