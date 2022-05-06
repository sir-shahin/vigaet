
import {Link} from 'react-router-dom'
import AccordionPanel from '../components/AccordionPanel'
import Exam from '../components/Exam'
import Footer from "../components/Footer"
import 'tw-elements'

const Dashboard = () => {
  return (
    <div>
      <div className="flex w-full px-2 md:px-0">
        <div className="lg:px-14 my-auto w-full py-20">
          <h1 className="font-bold md:text-3xl">My Classes</h1>
          
          <div className="accordion" id="accordionExample">

            <AccordionPanel 
                id="One"
                code="CSE3013" 
                subject="Neural Networks and Fuzzy Control"
             >
              <Exam 
                name="Net 1"
                date="20nd Jun 2020"
                time="9:00 am - 12:00 pm"
                status="3"
                mute={true}
                url="/check"></Exam>
             </AccordionPanel>

            <AccordionPanel 
                id="Two"
                code="ECE1029" 
                subject="IOT System Architecture"
             >

              <Exam 
                name="CAT 1"
                date="22nd Dec 2020"
                time="9:00 am - 12:00 pm"
                status="3"
                mute={true}
                url="/check"></Exam>

              <Exam 
                name="CAT 2"
                date="12th Jan 2021"
                time="9:00 am - 12:00 pm"
                status="2"
                mute={false}
                url="/check"></Exam>

              <Exam 
                name="Lab FAT"
                date="22nd Mar 2021"
                time="9:00 am - 12:00 pm"
                status="1"
                mute={false}
                url="/check"></Exam>

             </AccordionPanel>
            
          </div>

        </div>
        
      </div>

      <Footer>
        <Link to={'/'} className="text-sm underline hover:text-[#36e5f2a4]">Take Demo Exam</Link>
      </Footer>
    </div>
  );
}

export default Dashboard;
