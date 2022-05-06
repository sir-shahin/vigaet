
import {Link} from 'react-router-dom'
import Footer from "../components/Footer"
import User from '../images/user-l.png'
import Tick from '../images/tick.svg'
import Times from '../images/times.svg'
import Loading from '../images/loading.svg'
import { useState, useEffect } from 'react'
import Webcam from "react-webcam";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Check = () => {
  const [items, setItems] = useState([
    {
      title: 'Webcam check',
      status: 0
    },
    {
      title: 'Mic testing',
      status: 0
    },
    {
      title: 'α Iris sync',
      status: 0
    },
    {
      title: 'BT / Alien hardware detection',
      status: 0
    },
    {
      title: 'QR / Virtual Machine detection',
      status: 0
    },
    {
      title: 'Browser lock',
      status: 0
    },
    {
      title: 'Screen capture',
      status: 0
    },
    {
      title: 'Identity authentication',
      status: 0
    }
  ]);
  
  useEffect(()=>{
    
    let i = 0;
    // Running a fake Process
    setInterval(() => {
        setTimeout(() =>{
          if(i < items.length){
            changer(i++);
          }
        }, 750);
    },1500);
    const changer = (ind) =>{
      let temp = [...items];
      temp[ind].status = ind == 3 ? 2 : 1;
      setItems(temp);
    }
  })
  
  return (
    <div>
      <div className="w-full px-2 xl:px-14">
        <div className="w-full block md:flex justify-between my-auto pt-20">
          <div className="inline-flex">
            <span onClick={()=> {window.history.back()}} className="text-5xl cursor-pointer">‹</span>
            <h1 className="my-auto px-5 md:text-3xl">Graduate Record Examination</h1>
          </div>

          <div className="text-right">
            <div className="text-lg">17th Dec 2020</div>
            <small className="text-gray-400 text-xs">9:00 am - 12:00 pm</small>
          </div>
          
        </div>

        <div className="flex mt-7">
          <div className="w-3/12 lg:w-1/2 lg:px-14 ">
            <Webcam onUserMediaError={()=>{toast("Turn on your webcam!",{toastId:403})}} className="bg-gray-800 bg-opacity-20"/>
          </div>
          <div className="w-9/12 lg:w-1/2 p-4">
            <ul>
            {
              items.map((item,i) =>(
                <li className="mb-3 flex" key={i}>
                  <img src={ item.status==1 ? Tick : item.status==2 ? Times : Loading } alt="item-status" className="mr-5 h-6" />
                  <span className="text-sm md:text-base">{item.title}</span>
                </li>
              ))
            }
            </ul>
            <div className="mt-14 mb-20">
              <Link to={'/exam'} className="btn px-5 text-base">Start Exam</Link>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
      <ToastContainer position="bottom-right" hideProgressBar={true} dark={true}/>
    </div>
  );
}

export default Check;
