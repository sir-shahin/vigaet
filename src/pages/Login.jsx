import logo from "../images/vector.svg";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  var navigate = useNavigate();
  const submit = (ev) => {
    ev.preventDefault();
    // Request will be sent here
    navigate('/onboard');
  }
  return (
    <div>
      <div className="flex w-full h-screen justify-center align-middle">
        <div className="w-full px-5 lg:w-2/6 md:px-0 my-auto">
          <div className="mt-14 shadow-lg bg-[#232527] p-14">
            <div className="flex justify-center w-full mb-10">
                <img src={ logo } alt="logo" />
            </div>
            <form onSubmit={submit}>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="username" value={username} onInput={(event) => {setUsername(event.target.value)}}
                        className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
                    <label for="username" className="input-label">Username</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="password" name="password" value={password} onInput={(event) => {setPassword(event.target.value)}}
                      className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
                    <label for="password" className="input-label">Password</label>
                </div>
                <div className="text-center">
                    <div>
                        <a href="#" className="text-xs hover:text-[#36e5f2a4] leading-5 block"><div>Reset Password From Default/</div>Forgot Password</a>
                    </div>
                    <button type="submit" className="btn px-8 mt-10">Log In</button>
                </div>
            </form>
            
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Login;
