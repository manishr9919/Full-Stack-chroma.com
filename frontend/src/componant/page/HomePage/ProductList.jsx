// import React, { useState, useEffect } from "react";

// export const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://croma-fullstack-project.onrender.com/product/getAllProducts")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.products); // ✅ access the `products` array
//         console.log(data.products); // optional: see in console
//       })
//       .catch((error) => {
//         console.error("Error fetching product data:", error);
//       });
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
      
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {products.map((product) => (
//           <div
//             key={product._id}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               padding: "10px",
//               width: "200px",
//               textAlign: "center",
//               backgroundColor: "#f9f9f9",
//             }}
//           >
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               style={{ width: "100%", height: "150px", objectFit: "cover" }}
//             />
//             <h3>{product.name}</h3>
//             <p>₹{product.price}</p>
//             <p>{product.description}</p>
//             <p>
//               <strong>Stock:</strong> {product.stock}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://croma-fullstack-project.onrender.com/product/getAllProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // ✅ API gives { message, products: [...] }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Product List</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold text-center">{product.name}</h3>
            <p className="text-green-600 font-bold">₹{product.price}</p>
            <p className="text-gray-600 text-sm text-center">{product.description}</p>
            <p className="text-sm text-gray-500 mt-1">Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
