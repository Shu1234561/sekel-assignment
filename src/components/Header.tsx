import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const bagItemCount = useSelector((state: RootState) => state.counter.count);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  console.log("inputValue::", inputValue, bagItemCount);

  return (
    <div className="relative top-3 flex h-[72px] items-center rounded-[12px] bg-[#ffffff] mb-3">
      <div className="mr-2 ms-4 flex w-full items-center justify-between gap-2 sm:gap-4">
        <div className=" flex h-12 flex-1 items-center justify-between gap-2">
          <div className={`flex flex-auto items-center justify-start`}>
            <input
              type="search"
              name="search"
              placeholder="Search for products, brands and more..."
              className={`h-12 w-full rounded-sm border-0 bg-[#f9f9f9] px-3 py-2 text-sm focus-visible:border-none focus-visible:outline-none focus-visible:ring-offset-0 md:w-[520px]`}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="relative flex items-center gap-2 sm:gap-6 md:pr-6">
          <div className="relative flex flex-col items-center cursor-pointer">
            {bagItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-[18px] h-[18px] flex items-center justify-center">
                {bagItemCount}
              </span>
            )}
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
              alt="cart"
              className="w-8 h-8 cursor-pointer"
              onClick={() => navigate("/viewcart")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
