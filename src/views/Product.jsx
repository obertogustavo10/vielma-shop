import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Api from "../../data.json";
import Products from "../components/Products";

export default function Product() {
    const datos = Api;
  return (
    <>
    <Navbar/>
    <Products flat={"hide"}product={datos.productos} />
    <Footer/>
    </>
  )
}
