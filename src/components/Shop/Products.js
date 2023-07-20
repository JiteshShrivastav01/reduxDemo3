import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DummyItems = [
  {ItemName : 'abc' , ItemPrice : 10 },
  {ItemName : 'xyz' , ItemPrice : 15 },
  {ItemName : 'pqr' , ItemPrice : 12 }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { DummyItems.map(Item =>(
          <ProductItem
          key={Item.ItemName}
          title={Item.ItemName}
          price={Item.ItemPrice}
          description='This is a first product - amazing!'
        />
        )
        )}
      </ul>
    </section>
  );
};

export default Products;
