import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="flex w-full h-screen justify-center align-middle">
        <div className="w-5/6 my-auto">
          <div className="mt-14 shadow-lg bg-[#232527] p-14">
            <img src={logo} alt="sitename" />
            <h2 className="xl:text-5xl py-14 break-words whitespace-pre-line leading-snug">
              Welcome aboard <br/>
              to the future in the making <br/>
              you’ve just become a part of it</h2>
            <div>
              <Link to={'./Login'} className="btn px-4">Countinue ></Link>
            </div>
              
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
