import React from "react";
import { Link } from "react-router-dom";

export const AdminDashBoard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
      <div className="space-y-4">
        <Link
          to="/add-product"
          className="px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded-md hover:bg-blue-600"
        >
          Add Product
        </Link>
        <Link
          to="/add-category"
          className="px-6 py-3 bg-green-500 text-white font-medium text-lg rounded-md hover:bg-green-600"
        >
          Add Category
        </Link>
      </div>
    </div>
  );
};

export default AdminDashBoard;
