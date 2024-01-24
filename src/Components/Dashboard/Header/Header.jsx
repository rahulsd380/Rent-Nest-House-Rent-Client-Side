import 'regenerator-runtime/runtime';
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { IoSearchOutline, IoTimerOutline } from "react-icons/io5";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { BiMicrophoneOff } from 'react-icons/bi';
import { HiOutlineMicrophone } from 'react-icons/hi';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
  const {user} = useContext(AuthContext);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Format only the time portion
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const currentHour = currentTime.getHours();

  const getGreeting = () => {
    if (currentHour >= 6 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 15) {
      return "Good Noon";
    } else if (currentHour >= 15 && currentHour < 17) {
      return "Good Afternoon";
    } else if (currentHour >= 17 && currentHour < 22) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  };


  // Voice typing functionality
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  useEffect(() => {
    const inputField = document.getElementById('searchInputField');
    if (inputField) {
      inputField.value = transcript;
    }
  }, [transcript]);

    return (
        <div>
            
            <div className="space-y-7 pb-8">
            <div className="flex justify-between">


            <div className="w-1/2 flex">
          <input
          id="searchInputField"
            className="rounded-md border border-blue-300  bg-white h-12 px-3 text-sm focus:outline-none focus:border-blue-600 transition duration-300 ease-in-out w-full hover:border-blue-300"
            type="text"
            placeholder="Find Item"
          />
          <div className="-ml-20 flex items-center gap-3">
          {
            listening? 
            <BiMicrophoneOff onClick={SpeechRecognition.stopListening} className="text-2xl text-blue-600 cursor-pointer tooltip" data-tip="Stop"></BiMicrophoneOff> :
            <HiOutlineMicrophone onClick={SpeechRecognition.startListening} className="text-2xl cursor-pointer tooltip" data-tip="Start"></HiOutlineMicrophone>
            
          }
          <button>
            <IoSearchOutline className="text-3xl font-bold hover:text-blue-500 transition duration-300"></IoSearchOutline>
          </button>
          </div>
        </div>


    <div className="flex items-center gap-5">
        <GoQuestion className="text-2xl"></GoQuestion>
        <IoMdNotificationsOutline className="text-3xl"></IoMdNotificationsOutline>
        <div className="w-0.5 bg-gray-300 h-8"></div>
        {/* user icon */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    </div>


  </div>

  <div className="bg-gray-100 p-3 rounded-2xl">
        <div className="max-w-2xl">
        <h1 className="text-gray-500 text-2xl font-bold mb-1"><span span className="text-blue-500">{getGreeting()},</span> {user?.displayName}</h1>
        <p className="text-gray-400">Discover and control all aspects within your realm with our Dashboard. Effortlessly manage everything in your domain from one central hub.</p>
        <p className="flex items-center gap-3 mt-1"><IoTimerOutline className="text-blue-600"></IoTimerOutline> {formattedTime}</p>
        </div>
  </div>
            </div>
        </div>
    );
};

export default Header;