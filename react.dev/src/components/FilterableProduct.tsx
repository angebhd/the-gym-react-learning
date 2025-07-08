import type { ReactNode } from "react";
import type { Product } from "../lib/types";
import { mockProducts } from "../lib/data";

function ProductCategoryRow({ category } : any) {
    return (
      <tr>
        <th colSpan={2}>
          {category}
        </th>
      </tr>
    );
  }
  
  function ProductRow({ product } : {product :Product}) {
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;
  
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
  
  function ProductTable({ products } :{products :Product[]}  ) {
    const rows : ReactNode[] = [];
    let lastCategory : string | null = null;
  
    products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} 
            />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} 
          />
      );
      lastCategory = product.category;
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
  
  function SearchBar() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <label>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }
  
  function FilterableProductTable({ products } : {products : Product[]}) {
    return (
      <div>
        <SearchBar />
        <ProductTable products={products} />
      </div>
    );
  }
  

  
  export default function FilterableProduct() {
    return <FilterableProductTable products={mockProducts} />;
  }
  