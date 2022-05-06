
const AccordionPanel = (props) => {
    return(
        <div className="mt-4 md:mt-8 shadow-lg bg-[#232527]">
          <h2 className="accordion-header mb-0" id={`heading${props.id}`}>
            <button className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-left
              border-0
              rounded-none
              transition
              focusoutline-none
            " type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.id}`} aria-expanded="true"
              aria-controls={`collapse${props.id}`}>
              <div className="text-white">
                { props.subject}
                <div className="text-xs font-light opacity-50">{ props.code }</div>
              </div>
            </button>
          </h2>
          <div id={`collapse${props.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${props.id}`}
            data-bs-parent="#accordionExample">
            <div className="accordion-body py-4 px-2 md:px-5">
              { props.children }
            </div>
          </div>
      </div>
    )
}
export default AccordionPanel;