
import {Link} from 'react-router-dom'
import AccordionPanel from '../components/AccordionPanel'
import Footer from "../components/Footer"
import User from '../images/user.png'
import Pen from '../images/pen.svg'
import 'tw-elements'

const Settings = () => {
  return (
    <div>
      <div className="flex w-full">
        <div className="px-2 lg:px-20 my-auto w-full py-20">

          <div className="block md:flex justify-between">
            <div className="inline-flex">
              <span onClick={()=> {window.history.back()}} className="text-5xl cursor-pointer">‹</span>
              <img src={User} alt="username" className="mx-3 md:mx-5"/>
              <h1 className="font-bold md:text-3xl my-auto px-2">Samuel Doe</h1>
              <span className="text-xs my-auto pt-3 text-gray-300 ml-5">18BIS1241</span>
            </div>
            
            <Link to="#" className="inline-flex mt-5 md:mt-0">
              <img src={ Pen } alt="edit" className="my-auto"/>
              <div className="block text-sm whitespace-nowrap my-auto mx-3">Edit Profile Picture</div>
            </Link>
          </div>
          
          <h2 className="mt-10">General Settings</h2>
          <div className="accordion" id="accordionExample">

            <AccordionPanel 
                id="One" 
                subject="Setting1"
             >
              <div className="w-full flex py-4 justify-between border-t">
                <div>Setting1</div>
                <div>
                  <div className="flex justify-center">
                    <div className="form-check form-switch">
                      <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-[#393c3f] focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault56" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex py-4 justify-between border-t">
                <div>Setting2</div>
                <div>
                  <div className="flex justify-center">
                    <div className="form-check form-switch">
                      <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-[#393c3f] focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault76" />
                    </div>
                  </div>
                </div>
              </div>
             </AccordionPanel>
          </div>

          <h2 className="mt-10">General Settings</h2>
          <div className="p-5 bg-[#232527] w-full mt-8">
            <div className="flex justify-between py-4">
              <div>Setting1</div>
              <span className="text-sm my-auto underline cursor-pointer">View More</span>
            </div>
            <div className="flex justify-between py-4 border-t">
              <div>Setting2</div>
              <div>
                <div className="flex justify-center">
                  <div className="form-check form-switch">
                    <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-[#393c3f] focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault76" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
      </div>

    </div>
  );
}

export default Settings;
