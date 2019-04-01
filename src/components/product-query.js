import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

//adding connect to the reduct store

import '../components/design/nav.scss';
import '../components/design/layout.scss';

import Deck from './Deck';


class ProductQuery extends React.Component {

    render(){
      return (
      <>
        <Deck allProducts={this.props.data.shop.getAllProducts}
        allCategories={this.props.data.shop.getAllCategories}  
        />
      </>
    );
    }
  };
  

  export default (props) => (
    <StaticQuery
      query={graphql`
      query{
        shop{
          getAllCategories{
            name
            _id
          }
          getAllProducts{
          name
          description
          price
          qty
          _id
          category{
          name
          _id
        }
      } 
    }
  }   
`}
    render={data => <ProductQuery data={data} />}
    />
  )




// const Nav = () => (
//     <nav>
//         <ul>
//             <li>
//                 <Link to="/products/">SHOP ALL</Link>
//             </li>

//             <li>|</li>

//             <Auth capability="create">
//                 <li>
//                     <Link to="/addProduct/">ADD PRODUCT</Link>
//                 </li>
//             </Auth>
//         </ul>
//     </nav>
// )
