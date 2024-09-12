import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import { useNavigate } from "react-router-dom";
import withRootLayout from "../HOCs/withRootLayout";
import { useDispatch } from "react-redux";
import { increment } from "../store/countCart";
import { addItems } from "../store/cart";
import { ProductDetail } from "../Common/interface";
import { FullLoader } from "../components/Loader";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleRedirect = (id: number) => {
    navigate(`/description/${id}`);
  };

  const handleAddToCart = (product: ProductDetail) => {
    dispatch(increment());
    dispatch(addItems(product))
  };

  return (
    <div className="mx-auto">
      {loading && <FullLoader/>}
      {/* Product Card */}
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <CardComponent
            item={item}
            onDetail={handleRedirect}
            key={index}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default withRootLayout({
  component: Home,
});
