import HeaderBtns from './HeaderBtn';
import Searchbox from './Searchbox';
import { useState } from 'react'

const Header = () => {

  const [searchStatus,setSearchStatue] = useState(false);

  const search_icon = 
  <svg onClick={()=>{setSearchStatue(!searchStatus)}} 
      className="mr-3 md:hidden cursor-pointer" width="25" height="25" 
      viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" 
      d="M3.75 8C3.75 5.65279 5.65279 3.75 8 3.75C10.3472 3.75 12.25 5.65279 
      12.25 8C12.25 9.08337 11.8446 10.0721 11.1773 10.8227L10.8227 11.1773C10.0721
        11.8446 9.08337 12.25 8 12.25C5.65279 12.25 3.75 10.3472 3.75 8ZM11.501 
        12.5617C10.5314 13.3069 9.31745 13.75 8 13.75C4.82436 13.75 2.25 11.1756 
        2.25 8C2.25 4.82436 4.82436 2.25 8 2.25C11.1756 2.25 13.75 4.82436 13.75 
        8C13.75 9.31745 13.3069 10.5314 12.5617 11.501L15.5303 14.4697L14.4697 
        15.5303L11.501 12.5617Z" fill="white" fillOpacity="0.9"/>
  </svg>;

  return (
    <>
    <header className="shadow-lg fixed top-0 right-0 w-full z-10">
      <div className="bg-[#232527] flex md:px-3">

        <div className="w-1/2 md:w-2/6 my-auto pl-3 md:pl-5 inline-flex">
          { search_icon }
          <h2 className="whitespace-nowrap">Proctor Vision</h2>
        </div> 

        <div className="w-3/6 my-auto hidden md:inline">
          <Searchbox />
        </div> 

        <div className="md:w-2/6 py-2 ml-auto">
          <HeaderBtns />
        </div>
      </div>
    </header>
    <div 
      className={`${searchStatus ? 'top-15' : 'top-0'} mobile-search block md:hidden w-full fixed left-0 z-0 border-b border-gray-600`}>
        <Searchbox />
    </div>
    </>
  );
}

export default Header;
