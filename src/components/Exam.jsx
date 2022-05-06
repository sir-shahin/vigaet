import {Link} from 'react-router-dom'
import Bell from '../images/bell.svg'
import noBell from '../images/no-bell.svg'

const Exam = (props) => {
    return(
      <div className="w-full block md:flex justify-between bg-[#484C50] p-4 mb-3">
          <div>{ props.name }</div>
          <div className="text-sm my-auto inline-flex">
            { props.date } 🞄 { props.time } 
            <span className="ml-3">
              <img src={props.mute ? noBell : Bell} alt="bell" width="22"/>
            </span>
          </div>
          <div className="mt-5 md:mt-0">
            <Link to={props.url} className={`btn px-5 text-base ${ props.status!=2 && 'pointer-events-none opacity-50'}`}>
            { props.status==1 ? 'Yet to start' : (props.status==2 ? 'Join Exam' : props.status==3 && 'Completed')}
            </Link>
          </div>
      </div>
    )
}
export default Exam;