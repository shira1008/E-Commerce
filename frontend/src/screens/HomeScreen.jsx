import { useGetProductsQuery } from '../slices/productApiSlice';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error?.data?.message || 'An error occurred'}</div>
      ) : (
        <>
          <h1>Products</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
