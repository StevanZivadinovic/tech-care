import 'tailwindcss/tailwind.css'
// import './globals.css'
import LeftSideBar from './components/leftSideBar/leftSideBar.client';
import { getAllUsers } from './api/users';
import DiagnosisHistory from './components/diagnosisHistory/DiagnosisHistory';
import DiagnosticList from './components/diagnosticList/DiagnosticList';
import RightSideComponent from './components/rightSideComponent/rightSideComponent';
import LabResults from './components/LabResults/LabResults';


export default  async function Home() {
  let patientsData =  []
  try {
    patientsData =  await getAllUsers('coalition','skills-test')
  } catch (error) {
  }
  return (
    <main className="py-[32px] flex">
      <div className="w-[25%]">
    <LeftSideBar patientsData={patientsData}/>
      </div>
      <div className="w-[50%] mx-[32px]">
    <DiagnosisHistory patientsData={patientsData}/>
    <DiagnosticList patientsData={patientsData}/>
      </div>
      <div className="w-[25%] flex flex-col">
    <RightSideComponent patientsData={patientsData}/>
    <LabResults patientsData={patientsData}/>
      </div>

    </main>
  );
}
