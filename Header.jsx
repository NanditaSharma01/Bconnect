import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import Support from "../assets/Support.png";
import Report from "../assets/Report.png";
import Profile from "../assets/Profile.png";
import Setting from "../assets/Setting.png";

function Header() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the date and time every second
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format date and time
  const timeString = currentDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Manually format the date string
  const weekday = currentDateTime.toLocaleDateString([], { weekday: "short" });
  const month = currentDateTime.toLocaleDateString([], { month: "short" });
  const year = currentDateTime.toLocaleDateString([], { year: "2-digit" }); // Use 2-digit for short year format
  const dateString = `${weekday}, ${month} ${year}`;

  return (
    <main className="flex justify-between items-center px-3 lg:px-14 py-10 h-[8vh] lg:py-10">
      <div className="">
        <img src={Logo} alt="" className="w-40 h-15" />
      </div>
      <div className="flex justify-between gap-6">
        <div className="flex justify-between items-center gap-6 font-semibold text-slate-700">
          <h2 className="hidden md:block">{timeString}</h2>
          <h2 className="hidden md:block">{dateString}</h2>
          <div className="md:flex gap-3 hidden">
            <img src={Support} alt="" className="w-6 h-6" />
            <img src={Report} alt="" className="w-6 h-6" />
            <img src={Setting} alt="" className="w-6 h-6"/>
          </div>
        </div>

        <div className="flex justify-between gap-5">
          <img src={Profile} alt="" className="" />
        </div>
      </div>
    </main>
  );
}

export default Header;
