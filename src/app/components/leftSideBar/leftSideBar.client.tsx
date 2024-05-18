"use client";
import React from "react";
import './../leftSideBar/leftSideBar.css'
//@ts-ignore
const LeftSideBar = (patientsData: any) => {
  return (
    <>
      <div className=" bg-white h-[1054px] rounded-[16px] py-[20px] font-manrope overflow-auto">
        <div className="header flex justify-between mb-8 px-[20px]">
          <h2 className="text-[24px] font-extrabold">Patients</h2>
          <img src="./images/search_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
        </div>
        <div className="patients">
          <ul>
            {patientsData?.patientsData?.map(
              (patient: any, i: React.Key | null | undefined) => {
                return (
                
                    <li
                      key={i}
                      className="flex justify-between hover:bg-lightGreen p-[20px] hover:cursor-pointer"
                    >
                      <div className="flex">
                        <img
                          className="mr-[4px]"
                          width={44}
                          height={44}
                          src={patient?.profile_picture}
                          alt="Doctor's image"
                        />
                        <div className="px-2">
                          <p className="name text-[14px] font-bold">
                          {patient?.name}
                          </p>
                          <p className="text-[14px] text-grey">
                            {patient?.gender}, {patient?.age}
                          </p>
                        </div>
                      </div>
                      <img
                        className=""
                        src="./images/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
                        alt=""
                      />
                    </li>
                 
                );
              }
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
