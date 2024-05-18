"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import ChartSide from "./ChartSide";

const ChartDashboard = ({ patientsData }) => {
  console.error = () => {}; 
  const [timeRange, setTimeRange] = useState(3); 
  const [filteredData, setFilteredData] = useState([]);
  const [clikedData, setClickedData]=useState({})

  const diagnosisHistory = patientsData?.patientsData[3]?.diagnosis_history || [];
  const getFilteredData = (months) => {
    const sortedData = diagnosisHistory.sort((a, b) => {
      const dateA = new Date(`${a.month} 1, ${a.year}`);
      const dateB = new Date(`${b.month} 1, ${b.year}`);
      return dateA - dateB;
    });

    return sortedData.slice(-months).map((entry) => ({
      name: `${entry.month} ${entry.year}`,
      systolic: entry.blood_pressure.systolic.value,
      diastolic: entry.blood_pressure.diastolic.value,
      typeOfAverageSystolic:entry.blood_pressure.systolic.levels,
      typeOfAverageDyastolic:entry.blood_pressure.diastolic.levels
    }));
  };

  useEffect(() => {
    setFilteredData(getFilteredData(timeRange));
  }, [timeRange, diagnosisHistory]);

  const handleTimeRangeChange = (e) => {
    setTimeRange(parseInt(e.target.value, 10));
  };

  const handleClick = (data) => {
    setClickedData({
      name:data.name,
      systolic:data.systolic,
      diastolic:data.diastolic,
      typeOfAverageSystolic:data.typeOfAverageSystolic,
      typeOfAverageDyastolic:data.typeOfAverageDyastolic
    })
  };
  return (
    <div className="bg-lightPink p-[16px] rounded-[16px] flex">
      <div className="h-[300px] w-[75%]">
        <div className="flex justify-between w-[78%]">
          <h2 className="text-[18px] text-black font-bold ">Blood Pressure</h2>
          <select className="bg-[transparent] border-0 focus:border-none focus:border-0"
            name="timeRange"
            id="timeRange"
            value={timeRange}
            onChange={handleTimeRangeChange}>
            
          <option className="bg-[transparent]" value={3}>
              Last 3 months
            </option>
            <option className="bg-[transparent]" value={6}>
              Last 6 months
            </option>
            <option className="bg-[transparent]" value={12}>
              Last year
            </option>
          </select>
        </div>
        <ResponsiveContainer
          width="100%"
          height={300}
          className=" p-[16px] rounded-[12px]"
        >
          <LineChart
            data={filteredData}
            className="-ml-[4rem]"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 5,
            }}
            onClick={(e) => {
              if (e && e.activePayload) {
                handleClick(e.activePayload[0].payload);
              }
            }}
          >
            <CartesianGrid strokeDasharray="3" />
            <XAxis dataKey="name"  />
            <YAxis />
            <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
            <Line
              type="monotone"
              dataKey="diastolic"
              stroke="#7E6CAB"
            />
            <Line
              type="monotone"
              dataKey="systolic"
              stroke="#C26EB4"
            />
            <Line
              type="monotone"
              dataKey="typeOfAverageSystolic"
              stroke="#C26EB4"
              display='hidden'
            />
            <Line
              type="monotone"
              dataKey="typeOfAverageDyastolic"
              stroke="#C26EB4"
              display='hidden'
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <ChartSide patientsData={patientsData} clikedData={clikedData}/>
    </div>
  );
};

export default ChartDashboard;
