import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import { useNavigate } from "react-router-dom";
import withRootLayout from "../HOCs/withRootLayout";
import { useDispatch } from "react-redux";
import { increment } from "../store/countCart";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProducts = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleRedirect = (id: number) => {
    navigate(`/description/${id}`);
  };

  const handleAddToCart = () => {
    // onAddToCart(item);
    dispatch(increment());
  };

  return (
    <div className="mx-auto">
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
      {/* <ShoopingCart/> */}
    </div>
  );
}

export default withRootLayout({
  component: Home,
});
