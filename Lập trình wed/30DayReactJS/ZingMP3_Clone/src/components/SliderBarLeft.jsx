import { NavLink } from "react-router-dom";
import { sliderMenu } from "../ultis/sliderMenu.jsx";

const SliderBarLeft = () => {
  const noActiveStyle =
    " py-3 px-4 flex gap-2 text-[#999] items-center  font-bold ";
  const ActiveStyle =
    " py-3 px-4 flex gap-2 items-center bg-[rgba(254,255,255,0.1)] text-[#fff] hover:bg-[] font-bold";
  return (
    <div className="flex flex-col bg-[#37075d]">
      <div className=" px-4 py-2 w-full h-[60px]  bg-[#37075d]">
        <strong className="text-amber-100 text-lg h-[100%] w-[100%] flex justify-start items-center gap-1 uppercase  bg-[#37075d]">
          HiuAiTi <span className="text-yellow-300 text-xl"> MP3</span>
        </strong>
      </div>
      <div className="flex flex-col ">
        {sliderMenu.map((item) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive ? ActiveStyle : noActiveStyle
              }
              to={item.path}
              key={item.id}
            >
              {item.icons}
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SliderBarLeft;
