import './assets/styles/App.css';
import {Navbar} from "./containers/Navbar.jsx"
import {Home} from "./pages/Home.jsx"
import { Work } from './pages/Work.jsx';
import { FStudioz } from './pages/Work/FStudioz.jsx';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import ed from "./assets/images/edv1.png"
import edDashboard from "./assets/images/edDashboard.png"
import ed1 from "./assets/images/edTime.png"
import three from "./assets/images/three.png"
import three1 from "./assets/images/three1.png"
import three2 from "./assets/images/three2.png"

import xitLanding from "./assets/images/xitDashboard.png"
import xit1 from "./assets/images/xit2.png"
import xit2 from "./assets/images/xitscene.png"
import xit3 from "./assets/images/xitscene2.png"

function App() {

  const projectsData =[
    {
      appName:"Xit Innovation",
      appSubtitle:"In association with F1 Studioz",
  
      appDescription:" Xit is a powerful platform designed to empower employees to design, pitch, and champion their innovative ideas. With a robust set of features, including storyboard, use cases, challenges, and story points, the tool offers a comprehensive environment for turning creative sparks into impactful projects.",
      appHowItStarted:"The creation of the Xit Innovation Tool stemmed from a desire to cultivate a dynamic and innovative culture within the company. Recognizing the untapped potential within our talented workforce, we sought a solution that would empower every employee to contribute their creative ideas and actively participate in the innovation process.",
      goalDescription:"The overarching technical and development goal of the project was to enhance and optimize the existing Vue.js-based frontend application, primarily focusing on the creation of challenges and use cases within a structured role-based system.",
      goalDescription2:"The Mission is to elevate the user experience for managing challenges and use cases. We're crafting sleek, dedicated pages that effortlessly allow users to create, view, and edit challenges and use cases. Integrating a sophisticated role-based system, we're enabling each user with precise control over their actions based on their organizational role. For those invited into the editing realm, dynamic capabilities will enable collaborative refinement of challenges and use cases in real-time. Bridging the gap between frontend and backend, our integration efforts ensure a seamless flow of data, orchestrated by APIs that facilitate the required functionalities. Rigorous testing ensuring our frontend is robust, while scalability considerations guarantee we're ready for future feature expansions. ",
      launchTitle:"XIT Live",
      launchDescription:"Leveraging Strapi for Continuous Deployment - Exclusive Master Branch Access.",
      liveEnd:"[ I am bound by a Non-Disclosure Agreement (NDA), restricting the disclosure of specific workings of the application. The content shared here is limited to information made publicly available by the company and is intended for display on my website.]",
      img:xitLanding,
      myRole:["My journey is characterized by a strategic application of Agile methodology, optimizing efficiency and adaptability. The cornerstone of my technical feats lies in the conception and refinement of dynamic creation and challenges pages, a testament to my proficiency in React. Utilizing Agile sprints, I architected a modular system, swiftly iterating through features, and orchestrating their seamless integration.", "I became the bridge connecting the frontend, backend, and UI/UX teams. Acting as a communication conduit between these realms, I immersed myself in thoughtful discussions, carefully assessing the feasibility of designs from both technical and user experience angles. I played a crucial role in ensuring that our technical decisions seamlessly aligned with the end-user's experience. It was about striking a delicate balance between creative design elements and the technical intricacies beneath."," I seamlessly integrated custom-made components, swiftly adapting to the intricacies of our technology stack. My primary focus was on the dynamic functionalities surrounding the creation, deletion, and editing of use cases and challenges. The crux of my work lay in integrating conditional rendering tailored to our role-based system based on the users access to features within the company. My primary focus remained on enabling the creation, deletion, and editing of use cases and challenges. Implementing conditional rendering to support our role-based system, I ensured a secure and tailored user experience. ",],
      appImg:[xit1,xit2,xit3],
      outroTitle:"Tech Stack",
      outro:["Frontend: VueJS, Typescript, html, css","Backend: Sql, MongoDB, NodeJS, ExpressJs","DEV_OPS: GITHUB, GITLAB, Strapi"],
      next:"/projects/ed"

    },
    {
      appName:"Edvora",
      appSubtitle:"By Starwisp Industries",
      img:ed,
    
      appDescription:"Edvora, an innovative ed tech application, served as a transformative bridge between education and technology within universities. This platform aimed to elevate the university experience by seamlessly transitioning key aspects online. Students could form clubs and unions, register for courses, and access a wealth of study materials. Edvora envisioned a connected and dynamic educational ecosystem, bringing convenience and collaboration to the forefront for students navigating their academic journey.",
      appHowItStarted:"Edvora was tailored for university students seeking a streamlined and connected online educational experience. By focusing on the needs of university students, Edvora aimed to enhance collaboration, engagement, and efficiency in navigating academic pursuits.",
      goalDescription:"The development goal for Edvora was to create a dynamic and user-centric platform using ReactJS. The primary focus was on designing key pages such as the Dashboard, Subjects, Attendance, Assignments, and Clubs to ensure a seamless and intuitive user experience.",
      goalDescription2:"In addition to these core functionalities, the development team incorporated thoughtful features such as inspirational quotes, notifications from the management, personal notes for students, and a chat feature. The aim was to not only digitize essential aspects like attendance tracking and assignment submissions but also to enrich the student experience with additional tools for communication, personal organization, and motivation. The overarching goal was to create a robust and engaging educational platform that seamlessly integrated technology into various facets of university life.",
      launchTitle:"Edvora Live",
      launchDescription:"Embarking on a new era of education, we proudly presented Edvora Live – a transformative platform that redefines the student experience.",
      appImg:[edDashboard,ed1],
      liveEnd:"[ I am bound by a Non-Disclosure Agreement (NDA), restricting the disclosure of specific workings of the application. The content shared here is limited to information made publicly available by the company and is intended for display on my website.]",

      github:"",
      myRole:[
        "I orchestrated the entire application's development, from conceptualizing the folder structure to engineering reusable components and functions. In the creation of the Main Student App, I designed a comprehensive suite encompassing key functionalities such as Dashboard, Attendance, Timetable, Assignments and submission, Settings, Learning Data, Notifications, and Chat. Simultaneously, I assumed a leadership role, guiding a team of four individuals with meticulous oversight of task delegation to ensure the project's coherence.",
        "Extending my efforts to the Social Media, Clubs, and Unions App, I crafted features like a dynamic Feed page, Club page, club creation, and Announcements. The emphasis was on fostering community engagement and optimizing communication within the educational context. Additionally, in the development of the Webrtc-powered Video Call App, I facilitated seamless communication between educators and students, incorporating advanced video calling capabilities. To enhance collaborative learning experiences, I implemented a canvas feature, creating an interactive environment.",
        "In tandem with these responsibilities, I collaborated closely with backend and UI/UX teams, contributing to the design process to ensure feasibility from all perspectives. Taking a keen interest in testing, I ensured that all pages were not only pixel-perfect but also maintained compatibility across various devices, both in design and code.  This experience broadened my understanding of full-stack applications, allowing me to navigate seamlessly across the entire development spectrum."
      ],
      outroTitle:"Tech Stack",
      outro:["Frontend: NextJs, ReactJs, Typescript, html, css","Backend: Sql, MongoDB, NodeJS, ExpressJs","DEV_OPS: GITHUB, GITLAB, Digital Ocean, AWS"],
      next:"/projects/threejs"


    },
    {
      appName:"Three JS GAME",
      appSubtitle:"Navigating the World of 3D Graphics in My Learning Journey",
      img:three,
    
      appDescription:"Explore my Three.js learning journey through an interactive web experience. Maneuver a block using W, A, S, and D keys while avoiding approaching enemy boxes that move linearly towards you. This game is my hands-on exploration of Three.js. More Projects to come soon.",
      appHowItStarted:"I chose to delve into Three.js for its powerful capabilities in creating immersive 3D graphics on the web. By mastering Three.js, I aim to enhance my web development skills and bring a dynamic visual dimension to my projects. Its versatility and wide industry adoption make it a valuable tool for creating interactive and engaging user experiences. Learning Three.js not only expands my skill set but also opens doors to creating visually stunning applications, games, and simulations that push the boundaries of web development.",
      goalDescription:"my primary goal is to solidify my understanding of the foundational principles inherent in Three.js. I aspire to acquaint myself with the complexities of 3D visuals, entering the captivating realm of graphic programming. This undertaking serves as a pivotal step towards achieving mastery in crafting immersive and visually compelling 3D experiences within the web development landscape.",
      goalDescription2:" my technical goals encompass mastering fundamental scene setup, initiating responsive user controls for block movement, and implementing dynamic creation and animation of 3D objects, specifically player and enemy boxes. The focus lies on developing a robust collision detection system, integrating game logic for loss conditions upon player-enemy interaction, and ensuring scalability through varied difficulty levels and randomized enemy spawns. Additionally, attention is directed towards enhancing the game's visual appeal by thoughtful design, color selection, and texture incorporation. Emphasis is placed on maintaining organized and well-documented code to facilitate understanding and potential collaboration. Ultimately, the overarching objective is continuous learning and exploration, cultivating a comprehensive skill set in Three.js and 3D game development for the creation of immersive and visually captivating web experiences.",
      launchTitle:"Game Live",
      launchDescription:"",
      appImg:[three1,three2],
      github:"",
      myRole:[
        "The project commenced with the establishment of a well-structured 3D scene, meticulously defining lighting, camera perspectives, and the initial game elements. User interactivity was prioritized through the implementation of responsive controls, allowing seamless maneuvering of a central block using W, A, S, and D keys.",
        "The heart of the project lies in the intricate creation and manipulation of 3D objects, with a specific focus on the player's controllable block and the dynamic spawning and linear movement of enemy boxes. A robust collision detection system was meticulously integrated to identify instances where the player's block intersects with approaching enemies, triggering loss conditions and adding a layer of complexity to the gaming experience.",
        "he journey also involved continuous exploration and learning, with an active pursuit of understanding Three.js concepts, experimenting with features, and expanding technical proficiency in the realm of 3D graphics and game development.",
        "This comprehensive approach to the Three.js game project aimed not only at achieving technical mastery but also at creating an immersive and visually captivating web experience, marking a significant milestone in the ongoing journey of mastering the art of 3D web development.",
        "A big thanks to Chris Courses for being a guiding light in my Three.js game development journey. Their insightful tutorials and clear explanations have been instrumental, making the learning process enjoyable and rewarding."
      ],
      outroTitle:"Tech Stack",
      outro:["Frontend: ThreeJs, html, css, JavaScript"],
      liveLink:"https://gamebyshuja.netlify.app/",
      next:"/projects/f1"

    }
  ]
  
  return (
    
    
      <div className="App">
        <Navbar/>
        <div className='body'>
        <Routes >
      <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/projects/f1" element={<FStudioz  Data={projectsData[0]}/>} />   
        <Route path="/projects/ed" element={<FStudioz  Data={projectsData[1]}/>} />
        <Route path="/projects/threejs" element={<FStudioz  Data={projectsData[2]}/>} />
      </Routes >
        </div>
      </div>

  );
}

export default App;
