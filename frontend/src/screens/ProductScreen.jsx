import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productApiSlice';

function ProductScreen() {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        go back
      </Link>
      {isLoading ? (
        <h2>loading..</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid></Image>
          </Col>

          <Col md={4}>
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} Reviews`}
                />
              </ListGroup.Item>

              <ListGroup.Item>${product.price}</ListGroup.Item>

              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    {' '}
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
}

export default ProductScreen;
