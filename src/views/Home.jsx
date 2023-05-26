import Navbar from "../components/Navbar";
import CarouselMain from "../components/CarouselMain";
import Footer from "../components/Footer";
import Maps from "../components/Maps";
import Products from "../components/Products";
import Api from "../../data.json";

export default function Home() {
  const datos = Api;
  return (
    <>
      <Navbar />
      <CarouselMain />

      <Products product={datos.productos} />
      <Maps />
      <Footer />
    </>
  );
}
