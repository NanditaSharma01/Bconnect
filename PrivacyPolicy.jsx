import { useState } from "react";
import Data from "./Data.js";
import Ham from "./Ham.png";
import Logo from "./BConnect.jpeg";
import Cross from "./Cross.png";
import "./Connect.css";

const PrivacyPolicy = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const [ham, setHam] = useState(false);

  const handleItemClick = (index) => {
    setVisibleIndex(index);
    setHam(false);
  };

  const toggleSidebar = () => {
    setHam(!ham);
  };

  const sidebarItems = [
    "Information We Collect",
    "How We Use Your Information",
    "Protecting Your Information",
    "Your Rights",
    "Changes to Our Privacy Policy",
  ];

  return (
    <>
      <div>
        {/* navbar for desktop view start*/}
        <div className="hidden lg:flex flex-row justify-center gap-4 items-center border-b-2 border-black list-none py-[2rem] flex-wrap">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className="rounded-[5px] p-[10px] cursor-pointer shadow-xl font-semibold font-sans"
              style={{
                borderBottom: visibleIndex === index ? "4px solid blue" : "",
              }}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </div>
        {/* navbar for desktop view end*/}


        {/* navbar for mobile view start */}
        <div className="flex flex-row lg:hidden p-[1rem] justify-between items-center">
          <img src={Logo} alt="" className="w-[7rem] h-[4rem] sm:w-[30%]" />
          <div>
            <img
              src={Ham}
              alt=""
              className="w-[2rem] h-[2rem]"
              onClick={toggleSidebar}
            />
          </div>
        </div>
        {/* navbar for mobile view end */}


        {/* complete sidebar code start*/}
        {ham && (
          <div className={`sidebar_content ${ham ? "show" : ""} `}>
            <img
              src={Cross}
              alt=""
              onClick={toggleSidebar}
              className="ml-[auto] my-[2rem] py-[0rem] px-[1rem]"
            />
            <div className="flex flex-col items-center justify-center list-none w-[100%] p-[1rem]">
              <li
                className="py-[20px] px-[0px] font-sans font-semibold w-[100%] hover:bg-sky-500 hover:text-white"
                onClick={() => handleItemClick(0)}
              >
                Information We Collect
              </li>
              <li
                className="py-[20px] px-[0px] font-sans font-semibold w-[100%] hover:bg-sky-500 hover:text-white"
                onClick={() => handleItemClick(1)}
              >
                How We Use Your Information
              </li>
              <li
                className="py-[20px] px-[0px] font-sans font-semibold w-[100%] hover:bg-sky-500 hover:text-white"
                onClick={() => handleItemClick(2)}
              >
                Protecting Your Information
              </li>
              <li
                className="py-[20px] px-[0px] font-sans font-semibold w-[100%] hover:bg-sky-500 hover:text-white"
                onClick={() => handleItemClick(3)}
              >
                Your Rights
              </li>
              <li
                className="py-[20px] px-[0px] font-sans font-semibold w-[100%] hover:bg-sky-500 hover:text-white"
                onClick={() => handleItemClick(4)}
              >
                Changes to Our Privacy Policy
              </li>
            </div>
          </div>
        )}
        {/* complete sidebar code end*/}


        {/* main section that show content start*/}
        <div className="bg-gray-200">
          {visibleIndex !== null && (
            <div className="p-[2rem]">
              <h2 className="txt_color font-sans text-[2rem] font-bold text-center">
                {sidebarItems[visibleIndex]}
              </h2>
            </div>
          )}
          {Data.map((item, index) => (
            <div
              className=""
              key={item.id}
              style={{ display: visibleIndex === index ? "block" : "none" }}
            >
              <div className="flex flex-col items-start justify-center p-[2rem]">
                <h2 className="font-sans text-[1.5rem] font-semibold">
                  {item.text1}
                </h2>
                <p className="font-sans">{item.para1}</p>
              </div>
              <div className="font-sans flex flex-col items-start justify-center p-[2rem]">
                <h2 className="text-[1.5rem] font-semibold">{item.text2}</h2>
                <p className="font-sans">{item.para2}</p>
              </div>
              <div className="font-sans flex flex-col items-start justify-center p-[2rem]">
                <h2 className="text-[1.5rem] font-semibold">{item.text3}</h2>
                <p className="font-sans">{item.para3}</p>
              </div>
            </div>
          ))}
        </div>
        {/* main section that show content end*/}
        
      </div>
    </>
  );
};

export default PrivacyPolicy;