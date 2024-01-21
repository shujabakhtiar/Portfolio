import './assets/styles/App.css';
import {Navbar} from "./containers/Navbar.jsx"
import {Home} from "./pages/Home.jsx"
import { Work } from './pages/Work.jsx';
import { FStudioz } from './pages/Work/FStudioz.jsx';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import ed from "./assets/images/edv1.png"
import edDashboard from "./assets/images/edDashboard.png"
import ed1 from "./assets/images/edTime.png"
import f1 from "./assets/images/f1.png"
import xitLanding from "./assets/images/xitDashboard.png"
import xit1 from "./assets/images/xit2.png"
import xit2 from "./assets/images/xitscene.png"
import xit3 from "./assets/images/xitscene2.png"

function App() {

  const F1 = {
    appName:"Xit Innovation",
    appSubtitle:"In association with F1 Studioz",

    appDescription:"THIS IS THE APPS DESCRIPTION TOOK SOME TIME WRITING IT",
    appHowItStarted:"This was the begining of time and thats how shit started",
    goalDescription:"Development-wise, the goal for Edvora was to create a comprehensive and user-friendly platform using ReactJS for frontend development. The major pages, including the Dashboard, Subjects, Attendance, Assignments, and Clubs, were meticulously designed to provide students with easy access to crucial information.",
    goalDescription2:"THis is GOal Description",
    launchTitle:"XIT Live",
    launchDescription:"this is how we launched it and lil about devops",
        img:xitLanding,

    myRole:"PARA 1",
    myRole2:"PARA 2",
    myRole3: "PARA 3",
    appImg:[xit1,xit2,xit3],
  }

const edvora = {
  appName:"Edvora",
  appSubtitle:"By Starwisp Industries",
  img:ed,

  appDescription:"Edvora, an innovative ed tech application, served as a transformative bridge between education and technology within universities. This platform aimed to elevate the university experience by seamlessly transitioning key aspects online. Students could form clubs and unions, register for courses, and access a wealth of study materials. Edvora envisioned a connected and dynamic educational ecosystem, bringing convenience and collaboration to the forefront for students navigating their academic journey.",
  appHowItStarted:"TEdvora was tailored for university students seeking a streamlined and connected educational experience. The app targeted individuals enrolled in universities, offering them a platform to form clubs and unions, register for courses, and access study materials conveniently online. By focusing on the needs of university students, Edvora aimed to enhance collaboration, engagement, and efficiency in navigating academic pursuits.",
  goalDescription:"The development goal for Edvora was to create a dynamic and user-centric platform using ReactJS. The primary focus was on designing key pages such as the Dashboard, Subjects, Attendance, Assignments, and Clubs to ensure a seamless and intuitive user experience.",
  goalDescription2:"In addition to these core functionalities, the development team incorporated thoughtful features such as inspirational quotes, notifications from the management, personal notes for students, and a chat feature. The aim was to not only digitize essential aspects like attendance tracking and assignment submissions but also to enrich the student experience with additional tools for communication, personal organization, and motivation. The overarching goal was to create a robust and engaging educational platform that seamlessly integrated technology into various facets of university life.",
  launchTitle:"Edvora Live",
  launchDescription:"Embarking on a new era of education, we proudly presented Edvora Live – a transformative platform that redefines the student experience.",
  appImg:[edDashboard,ed1],
  github:"",
  myRole:"PARA 1",
  myRole2:"PARA 2",
  myRole3: "PARA 3",
}
  return (
    
    
      <div className="App">
        <Navbar/>
        <div className='body'>
        <Routes >
       <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/projects/f1" element={<FStudioz  Data={F1}/>} />        <Route path="/projects/f1" element={<FStudioz  Data={F1}/>} />
        <Route path="/projects/ed" element={<FStudioz  Data={edvora}/>} />
  </Routes >
        </div>
      </div>

  );
}

export default App;
