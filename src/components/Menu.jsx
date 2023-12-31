import { useDispatch } from "react-redux";
import { additems } from "../FoodcardSlice";
import { notification } from "antd";

const Menu = ({ foodItems }) => {
  const { name, price, image } = foodItems;
  const token = sessionStorage.getItem('Token')
 
  const isLogin = JSON.parse(token);
  const dispatch = useDispatch();
         
  const handlecarddata = (foodItems) => {
    if (isLogin) {
      dispatch(additems(foodItems));
      notification.success({
        message: "Added Successfully",
      });
    } else {
      notification.error({
        message: "Please Log in Your Account",
      });
    }
  };
  
  
  
  return (
    <>
      <div className="lg:ml-5 mt-3 mb-3 max-w-sm h-80 lg:w-60 rounded overflow-hidden shadow-lg">
        <img className="w-60 h-36" src={image} alt="Sunset in the mountains" />
        <div className="px-6 pb-2 pt-2 text-2xl font-bold text-center">
          {name}
        </div>
        <h3 className="py-2 font-bold pl-4">{price}$</h3>
        <div className="flex pl-6 space-x-5">
          <button onClick={() => handlecarddata(foodItems)}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transform hover:scale-105 transition-transform duration-300">
            Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
