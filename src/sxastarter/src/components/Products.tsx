import { ComponentProps } from 'lib/component-props';
import { Product } from 'src/types/product';
import { withDatasourceCheck, Image, Field } from '@sitecore-jss/sitecore-jss-nextjs';

type ProductsProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    productlist: Product[];
  };
};

function Products(props: ProductsProps): JSX.Element {
  return (
    <div className="allproducts">
      {props.fields.productlist.map((listitem, index) => (
        <article key={index} className="product">
          <div className="productimage">
            <Image field={listitem.fields.image} />
          </div>
          <div>
            <h3>{listitem.fields.title.value}</h3>
            <p>INR {listitem.fields.price.value}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default withDatasourceCheck()<ProductsProps>(Products);
