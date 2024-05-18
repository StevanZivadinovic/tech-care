"use client";
import React from "react";

import ChartDashboard from "./Chart";

const DiagnosisHistory = (patientsData: any) => {
  const respiratoryRateValue =
    patientsData.patientsData[3]?.diagnosis_history[0]?.respiratory_rate
      ?.value + " bpm";
  const respiratoryRateLevels =
    patientsData.patientsData[3]?.diagnosis_history[0]?.respiratory_rate
      ?.levels;

  const temperatureValue =
    patientsData.patientsData[3]?.diagnosis_history[0]?.temperature?.value;
  const temperatureLevels =
    patientsData.patientsData[3]?.diagnosis_history[0]?.temperature?.levels;

  const heartRateValue =
    patientsData.patientsData[3]?.diagnosis_history[0]?.heart_rate?.value +
    " bpm";
  const heartRateLevels =
    patientsData.patientsData[3]?.diagnosis_history[0]?.heart_rate?.levels;
  return (
    <div className="bg-white rounded-[16px] p-[20px] ">
      <h2 className="text-[24px] font-manrope font-extrabold mb-[20px]">
        Diagnosis History
      </h2>

      <ChartDashboard patientsData={patientsData}/>

      <div className="flex mt-[20px]">
        <div className="bg-lightBlue flex-1 rounded-[12px] mr-[21px] p-[16px]">
          <img src="./images/respiratory rate.svg" alt="" />
          <div className="mt-[16px] mb-[17px]">
            <p className="text-[16px] text-black font-manrope">
              Respiratory Rate
            </p>
            <p className="text-[30px] text-black font-manrope font-extrabold">
              {respiratoryRateValue}
            </p>
          </div>
          <p className="text-[14px] text-black font-manrope">
            {respiratoryRateLevels}
          </p>
        </div>
        <div className="bg-lightRed flex-1 rounded-[12px] mr-[21px] p-[16px]">
          <img src="./images/temperature.svg" alt="" />
          <div className="mt-[16px] mb-[17px]">
            <p className="text-[16px] text-black font-manrope">Temperature</p>
            <p className="text-[30px] text-black font-manrope font-extrabold">
              {temperatureValue} &#176;{"F"}
            </p>
          </div>
          <p className="text-[14px] text-black font-manrope">
            {temperatureLevels}
          </p>
        </div>
        <div className="bg-lightPinkSecond flex-1 rounded-[12px] p-[16px]">
          <img src="./images/HeartBPM.svg" alt="" />
          <div className="mt-[16px] mb-[17px]">
            <p className="text-[16px] text-black font-manrope">Heart Rate</p>
            <p className="text-[30px] text-black font-manrope font-extrabold">
              {heartRateValue}
            </p>
          </div>
          <p className="text-[14px] text-black font-manrope">
            {heartRateLevels}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
