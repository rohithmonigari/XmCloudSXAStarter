import { Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { Product as ProductData } from 'src/types/product';


function Product(props: ProductData): JSX.Element {
  return (
    <div className="productData">
        <article className="productDatasetting">
          <div className='productContent'>
            <h3>Big Bang</h3>
            <h1>{props.fields.title.value}</h1>
            <p>INR {props.fields.price.value}</p>
            <h6>49MM</h6>
          </div>
          <div className="productimage">
            <Image field={props.fields.image} />
          </div>
        </article>
    </div>
  );
}

export default Product;