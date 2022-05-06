
const Searchbox = () =>{
    const search_icon = <svg className="absolute left-4 top-2.5" width="20" height="20" 
                      viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" 
                      d="M3.75 8C3.75 5.65279 5.65279 3.75 8 3.75C10.3472 3.75 12.25 5.65279 
                      12.25 8C12.25 9.08337 11.8446 10.0721 11.1773 10.8227L10.8227 11.1773C10.0721
                       11.8446 9.08337 12.25 8 12.25C5.65279 12.25 3.75 10.3472 3.75 8ZM11.501 
                       12.5617C10.5314 13.3069 9.31745 13.75 8 13.75C4.82436 13.75 2.25 11.1756 
                       2.25 8C2.25 4.82436 4.82436 2.25 8 2.25C11.1756 2.25 13.75 4.82436 13.75 
                       8C13.75 9.31745 13.3069 10.5314 12.5617 11.501L15.5303 14.4697L14.4697 
                       15.5303L11.501 12.5617Z" fill="white" fillOpacity="0.5"/>
                    </svg>;
    return(
        <form className="relative">
        { search_icon }
        <input type="text" 
            className="bg-[#131415]
            w-full py-2 pr-5 pl-12 outline-none focus:outline-[#36e5f2a4] font-normal text-sm" 
            placeholder="search"/>
        </form>
    )
}
export default Searchbox;