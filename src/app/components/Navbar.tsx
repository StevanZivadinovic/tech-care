import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="min-h-[72px] bg-white w-full flex justify-between items-center px-8 rounded-[70px] font-manrope text-black">
      <img className="logo" src="./images/TestLogo.svg" />
      <ul className="list-none flex justify-between">
        <Link href={'/'} className="rounded-[41px] flex items-center max-h-[41px]  px-[20px] text-[14px] cursor-pointer hover:bg-nav_green">
          <img src="./images/home_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
          <p className="ml-2 font-bold">Overview</p>
        </Link>
        <Link href={'/'} className=" rounded-[41px] flex items-center max-h-[41px]  px-[20px] text-[14px] cursor-pointer hover:bg-nav_green">
          <img src="./images/group_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
          <p className="ml-2 font-bold">Patients</p>
        </Link>
        <Link href={'/'} className="rounded-[41px] flex items-center max-h-[41px] p-[20px] text-[14px] cursor-pointer hover:bg-nav_green">
          <img src="./images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
          <p className="ml-2 font-bold">Schedule</p>
        </Link>
        <Link href={'/'} className="rounded-[41px] flex items-center max-h-[41px] p-[20px] text-[14px] cursor-pointer hover:bg-nav_green">
          <img src="./images/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
          <p className="ml-2 font-bold">Message</p>
        </Link>
        <Link href={'/'} className="rounded-[41px] flex items-center max-h-[41px] p-[20px] text-[14px] cursor-pointer hover:bg-nav_green">
          <img src="./images/credit_card_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
          <p className="ml-2 font-bold">Transactions</p>
        </Link>
      </ul>
      <div className="userDetails flex">
        <img className="mr-[4px]" width={44} height={44} src="./images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="Doctor's image"  />
        <div className="border-r-[1px] border-r-lightGrey mr-lightGrey px-2">
          <p className="name text-[14px] font-bold">Dr Jose Simmons</p>
          <p className="text-[14px] text-grey">General Practitioner</p>
        </div>
        <div className="settings flex">
          <img className="ml-2 cursor-pointer" src="./images/settings_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
          <img className="ml-2 cursor-pointer" src="./images/more_vert_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
