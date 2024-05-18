import React from 'react'

const RightSideComponent = (patientsData: any) => {
  return (
    <div className='bg-white rounded-[16px] p-[20px]'>
        <div className="flex flex-col justify-center items-center">
            <img className='w-[200px] h-[200px] mb-[24px] mt-[12px]' src={patientsData?.patientsData[3].profile_picture} alt="" />
            <p className='text-[24px] font-manrope text-black font-extrabold mb-[32px]'>{patientsData?.patientsData[3].name}</p>
        </div>
        <div className="">
            <div className="flex mb-[24px]">
                <img width={42} height={42} src="./images/BirthIcon.svg" alt="" />
                <div className="pl-[20px]">
                    <p className='font-manrope text-[14px] text-black font-medium'>Date Of Birth</p>
                    <p className='font-manrope text-[14px] text-black font-bold'>{patientsData?.patientsData[3].date_of_birth}</p>
                </div>
            </div>
            <div className="flex mb-[24px]">
                <img width={42} height={42} src="./images/BirthIcon.svg" alt="" />
                <div className="pl-[20px]">
                    <p className='font-manrope text-[14px] text-black font-medium'>Gender</p>
                    <p className='font-manrope text-[14px] text-black font-bold'>{patientsData?.patientsData[3].gender}</p>
                </div>
            </div>
            <div className="flex mb-[24px]">
                <img width={42} height={42} src="./images/BirthIcon.svg" alt="" />
                <div className="pl-[20px]">
                    <p className='font-manrope text-[14px] text-black font-medium'>Contact Info.</p>
                    <p className='font-manrope text-[14px] text-black font-bold'>{patientsData?.patientsData[3].phone_number}</p>
                </div>
            </div>
            <div className="flex mb-[24px]">
                <img width={42} height={42} src="./images/BirthIcon.svg" alt="" />
                <div className="pl-[20px]">
                    <p className='font-manrope text-[14px] text-black font-medium'>Emergency Contacts</p>
                    <p className='font-manrope text-[14px] text-black font-bold'>{patientsData?.patientsData[3].emergency_contact}</p>
                </div>
            </div>
            <div className="flex mb-[24px]">
                <img width={42} height={42} src="./images/BirthIcon.svg" alt="" />
                <div className="pl-[20px]">
                    <p className='font-manrope text-[14px] text-black font-medium'>Insurance Provider</p>
                    <p className='font-manrope text-[14px] text-black font-bold'>{patientsData?.patientsData[3].insurance_type}</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-[40px]">
        <button className='rounded-[41px] bg-nav_green cursor-pointer py-[11px] px-[40px] text-[14px] text-black font-bold'>Show All Information</button>
        </div>
    </div>
  )
}

export default RightSideComponent;