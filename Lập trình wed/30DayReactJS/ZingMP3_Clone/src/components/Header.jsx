import React from "react";
import icons from "../ultis/icons";

const {
  ArrowForwardIcon,
  ArrowBackIcon,
  SearchIcon,
  BrowserUpdatedIcon,
  SettingsIcon,
} = icons;
const Header = () => {
  return (
    <div className="bg-[#37075d] w-[100%]">
      <div className="flex justify-between items-center">
        <div className="text-white flex cursor-pointer">
          <ArrowBackIcon className="mr-2" /> <ArrowForwardIcon />
        </div>
        <div className="flex justify-start items-center ">
          <div className="relative">
            <input
              placeholder="Tìm kiếm bài hát, nghệ sỹ, lời bài hát,..."
              type="text"
              className=" border-1 text-base text-white w-[40vw] bg-transparent content-normal rounded-3xl  px-10 "
            />
          </div>

          <div className=" absolute  text-white ml-3 ">
            <SearchIcon />
          </div>
        </div>
        <div className="flex gap-4 items-center   ">
          <div className="bg-[#999] w-[200px] gap-2 opacity-50 font-bold flex justify-center px-3 py-2 rounded-full pointer cursor-pointer hover:text-white">
            <BrowserUpdatedIcon /> Tải bản Windows
          </div>
          <div className="text-white h-[35px] w-[35px] rounded-full items-center  flex justify-center bg-slate-500 cursor-pointer ">
            <SettingsIcon className="" />
          </div>
          <div className="h-[35px] w-[35px] rounded-full bg-slate-400">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
