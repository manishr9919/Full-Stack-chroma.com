import Navbar from "../../Navbar";
import { Slider } from "../HomePage/Slider";
import { Slider2 } from "../HomePage/Slider2";
import { ProductList } from "./ProductList";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Slider2 />
      <ProductList />
    </div>
  );
};
