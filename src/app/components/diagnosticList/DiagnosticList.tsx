"use client";
import React from "react";

const DiagnosticList = (patientsData: any) => {
  return (
    <div className="mt-[32px] bg-white rounded-[16px] p-[20px] h-[330px] overflow-hidden">
      <h2 className="text-[24px] font-manrope font-extrabold text-black mb-[40px]">
        Diagnostic List
      </h2>
      <div className="w-full">
      
      <table className="w-full">
        <thead className="sticky top-0">
          <tr className="bg-lightLightGray text-[14px] font-manrope text-black font-bold rounded-[24px]">
            <td className="w-[30%] p-[15px] rounded-l-[24px]">Problem/Disagnosis</td>
            <td className="w-[50%]">Description</td>
            <td className="w-[20%] rounded-r-[24px]">Status</td>
          </tr>
        </thead>
      </table>
        <ul className="w-full overflow-y-auto h-[200px]">
            {
                patientsData.patientsData[3].diagnostic_list?.map((diagnosis: { name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; status: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; })=>{
                    return(

          <li  className="text-[14px] font-manrope border-b-[1px] border-b-lightGrey flex w-full">
            <p className=" w-[30%] p-[15px]">{diagnosis.name}</p>
            <p className="w-[50%] py-[15px]">{diagnosis.description}</p>
            <p className="w-[20%] py-[15px]">{diagnosis.status}</p>
            
          </li>
                    )
                })
            }
        </ul>
     
      </div>
     
    </div>
  );
};

export default DiagnosticList;
