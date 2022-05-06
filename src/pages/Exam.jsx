import Clock from '../images/clock.svg'
import {Link} from 'react-router-dom'
import Countdown from 'react-countdown'
import Chart from '../images/chart.png'

const Exam = () => {
  return (
    <div>
      <div className="flex w-full pt-20">
        
        <div className="md:flex w-full px-2 xl:px-20">
          <div className="w-full md:w-8/12">
            <div className="inline-flex">
              <img src={Clock} alt="clock" />
              <Countdown date={Date.now() + 600*60*60} zeroPadTime={1} className="my-auto pl-2"></Countdown>
            </div>
            <div className="py-5">
              <div className="block font-bold">Question1</div>
              <div className="mt-5 bg-[#232527] w-full p-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, alias. Debitis amet eos rerum cum labore nobis assumenda, officiis atque, neque totam laboriosam repudiandae dolorem quasi fugit dignissimos iusto est!</p>
                <img src={Chart} alt="echart" className="p-4"/>
              </div>
              <div className="mt-5 bg-[#232527] w-full p-3">
                <input type="radio" name="answer" id="a1"/>
                <label for="a1" className="cursor-pointer p-3">Lorem ipsum, dolor sit amet</label>  
              </div>
              <div className="mt-5 bg-[#232527] w-full p-3">
                <input type="radio" name="answer" id="a2"/>
                <label for="a2" className="cursor-pointer p-3">Lorem ipsum, dolor sit amet consectetur</label>  
              </div>
              <div className="mt-5 bg-[#232527] w-full p-3">
                <input type="radio" name="answer" id="a3"/>
                <label for="a3" className="cursor-pointer p-3">Lorem ipsum, dolor sit amet</label>  
              </div>
              <div className="mt-5 bg-[#232527] w-full p-3">
                <input type="radio" name="answer" id="a4"/>
                <label for="a4" className="cursor-pointer p-3">Lorem ipsum, dolor sit amet consectetur</label>  
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 py-10 md:py-0">
            <div className="inline-flex">
              <button className="btn text-base px-8 ml-5">Exit</button>
              <button className="btn text-base px-8 ml-5">Submit</button>
            </div>

            <div className="grid w-full p-5 grid-cols-5">
              
              <div className="flex p-3">
                <span className="bg-white text-black w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-[#a7f93f] text-black w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-red-500 text-black w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-red-500 text-black w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>
              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>
              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>

              <div className="flex p-3">
                <span className="bg-gray-800 w-8 h-8 flex justify-center items-center">1</span>
              </div>

            </div>

            <div className="p-4">
              <span className="px-3 py-1 cursor-pointer hover:bg-gray-300 hover:bg-opacity-5">‹</span>
              <span className="px-3 py-1 cursor-pointer hover:bg-gray-300 hover:bg-opacity-5">1</span>
              <span className="px-3 py-1 cursor-pointer opacity-40 hover:bg-gray-300 hover:bg-opacity-5">2</span>
              <span className="px-3 py-1 cursor-pointer opacity-40 hover:bg-gray-300 hover:bg-opacity-5">3</span>
              <span className="px-3 py-1 cursor-pointer hover:bg-gray-300 hover:bg-opacity-5">›</span>
            </div>
            <div>
              <button className="btn px-5 xl:px-10 ml-5 text-base opacity-40 pointer-events-none">‹ Previous</button>
              <button className="btn px-5 xl:px-10 ml-5 text-base"> Next ›</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Exam;
