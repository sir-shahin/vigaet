
const OnboardSlide = (props) =>{
    return(
        <div className="px-2 md:px-14">
            <div className="bg-no-repeat py-7 md:py-14" style={{ backgroundImage: `url(${ props.background })` }}>
                <img src={ props.poster } alt={ props.caption } className="mx-auto slide-image"/>
            </div>
            <div className="text-sm">{ props.caption }</div>
        </div>
    )
}
export default OnboardSlide;