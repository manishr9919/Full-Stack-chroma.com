import { Routes, Route } from "react-router-dom";
import { Home } from "../page/HomePage/Home";
import { Login } from "../Login";
import { SignUp } from "../SignUp";
import { AdminDashBoard } from "../page/HomePage/AdminDashBoard";
import { Logout } from "../page/HomePage/Logout";
import AddProduct from "../page/AddProduct";
import { AddCategory } from "../page/AddCategory";

export const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add_category" element={<AddCategory />} />
      </Routes>
    </div>
  );
};
