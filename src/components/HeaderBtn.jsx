
const HeaderBtns = () => {
    return(
        <div className="flex justify-end items-center header-btn-tools">
            {/* minimize icon */}
            <span className="inline-flex py-5">
              <svg width="13" height="3" className="mx-4" viewBox="0 0 13 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.5H12.5" stroke="white" strokeWidth="2"/>
              </svg>
            </span>
            {/* down icon */}
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="15" width="18" height="13" stroke="white" strokeWidth="2"/>
            </svg>
            {/* close icon */}
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1487 13.3987L28.3515 28.6015" stroke="white" strokeWidth="2"/>
              <path d="M28.3513 13.3987L13.1485 28.6015" stroke="white" strokeWidth="2"/>
            </svg>
        </div>
    )
};
export default HeaderBtns;