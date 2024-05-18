"use client";
import {
  getInitialClickedData,
  isEmptyObject,
} from "@/app/helperFunc/globalFunc";
import React, { useEffect, useState } from "react";

const ChartSide = ({ patientsData, clikedData }: any) => {
  const [clickedDataState, setClickedDateState] = useState(
    getInitialClickedData(clikedData)
  );

  useEffect(() => {
    if (clikedData && !isEmptyObject(clikedData)) {
      setClickedDateState(clikedData);
      localStorage.setItem("clickedDataLocal", JSON.stringify(clikedData));
    }
  }, [clikedData]);

  if (!clickedDataState || isEmptyObject(clickedDataState)) {
    return null;
  }
const systoleArrayImage =  clickedDataState.typeOfAverageSystolic !== "Normal" &&
clickedDataState.typeOfAverageSystolic === "Higher than Average"
  ? "./images/ArrowUp.svg"
  : clickedDataState.typeOfAverageSystolic !== "Normal"
  ? "./images/ArrowDown.svg"
  : ""

  const daystoleArrayImage = clickedDataState.typeOfAverageDyastolic !== "Normal" &&
  clickedDataState.typeOfAverageDyastolic ===
    "Higher than Average"
    ? "./images/ArrowUp.svg"
    : clickedDataState.typeOfAverageDyastolic !== "Normal"
    ? "./images/ArrowDown.svg"
    : ""
  return (
    <div className="w-[35%] -ml-20">
      <div className="font-manrope border-b-[1px] border-b-chartSideGray mb-4">
        <h3 className="text-[14px] text-black font-bold flex items-center mb-2">
          <span
            className="inline-block bg-pinkChart border-[1px] border-white rounded-full mr-1"
            style={{ width: "14px", height: "14px" }}
          ></span>
          Systolic
        </h3>
        <p className="font-bold text-black text-[22px] mb-2">
          {clickedDataState.systolic}
        </p>
        <p className="flex items-center text-[14px] mb-4">
          <span className="mr-2">
            <img
              src={
                systoleArrayImage
              }
              alt=""
            />
          </span>
          {clickedDataState.typeOfAverageSystolic}
        </p>
      </div>
      <div className="font-manrope">
        <h3 className="text-[14px] text-black font-bold flex items-center mb-2">
          <span
            className="inline-block bg-chartSidePurple border-[1px] border-white rounded-full mr-1"
            style={{ width: "14px", height: "14px" }}
          ></span>
          Diastolic
        </h3>
        <p className="font-bold text-black text-[22px] mb-2">
          {clickedDataState.diastolic}
        </p>
        <p className="flex items-center text-[14px] mb-4">
          <span className="mr-2">
            <img
              src={
                daystoleArrayImage
              }
              alt=""
            />
          </span>
          {clickedDataState.typeOfAverageDyastolic}
        </p>
      </div>
    </div>
  );
};

export default ChartSide;
