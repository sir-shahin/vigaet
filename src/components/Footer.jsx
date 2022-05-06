import {Link} from 'react-router-dom'
import User from '../images/user.png'

const Footer = (props) => {
    return(
      <div className="w-full flex justify-between fixed bottom-0 left-0 px-2 lg:px-10 bg-black bg-opacity-30 md:bg-opacity-0">
        <div className="my-auto">
          { props.children }
        </div>
        <div>
          <Link to={'/settings'} className="inline-flex text-sm py-2 md:py-4 xxl:pb-6">
            <div className="text-right pr-4 my-auto">
              <div>Samuel Doe</div>
              <div>18BIS1241</div>
            </div>
            <img src={User} alt="username" className="rounded-full" width="55" height="55"/>
          </Link>
        </div>
      </div>
    )
}
export default Footer;