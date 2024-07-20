import { React, useEffect, useState } from "react";
import Pagecomponent1 from "./Pagecomponent1";

const Pagination1 = () => {
  const [product, setProduct] = useState([]);
  const [pageno, setPageno] = useState(1);

  useEffect(() => {
    fetchData();
  }, [pageno]);

  const fetchData = async () => {
    const data = await fetch(`https://dummyjson.com/products?page=${pageno}`);
    const res = await data.json();
    console.log(res.products);
    setProduct(res.products);
  };

  return (
    <div>
      <h1 className="text-center text-3xl underline mt-[30px]">
        Pagination component
      </h1>
      <table className="m-auto mt-[60px]">
        <tr>
          <th className="border-2 p-[5px]">SL.No</th>
          <th className="border-2 p-[5px]">TITLE</th>
          <th className="border-2 p-[5px]">CATEGORIES</th>
          <th className="border-2 p-[5px]">PRICE</th>
        </tr>

        {product.length > 1 ? (
          product.map((item, index) => {
            return (
              <tr>
                <td className="border-2 p-[5px]">{index + 1}</td>
                <td className="border-2 p-[5px]">{item.title}</td>
                <td className="border-2 p-[5px]">{item.category}</td>
                <td className="border-2 p-[5px]">{item.price}</td>
              </tr>
            );
          })
        ) : (
          <h1>No itemm is available </h1>
        )}
      </table>

      <div className="m-auto mt-[30px]">
        <Pagecomponent1 pageno={pageno} setPageno={setPageno} />
      </div>
    </div>
  );
};

export default Pagination1;
