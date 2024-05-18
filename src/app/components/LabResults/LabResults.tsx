import React from 'react'

const LabResults = (patientsData:any) => {
  return (
    <div className='mt-[32px] bg-white rounded-[16px] p-[20px] max-h-[290px] overflow-hidden'>
        <h2 className='text-[24px] font-manrope font-extrabold mb-[16px]'>Lab Results</h2>
        <ul className='overflow-y-auto max-h-[200px]'>
            {patientsData.patientsData[3].lab_results.map((result: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined)=>{
                return(                  
                    <li className='hover:bg-lightLightGray flex justify-between cursor-pointer'>
                    <p className='text-[13px] font-manrope py-[11px] px-[16px]'>{result}</p>
                    <img className='mr-[16px]' src="./images/download_FILL0_wght300_GRAD0_opsz24 (1).svg" alt=""/>
                </li>
                 
                )
            })
                
            }
           
        </ul>
    </div>
  )
}

export default LabResults