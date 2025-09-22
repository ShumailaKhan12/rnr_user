const PlanetProgress = ({ Pnt, prgicon, planets, borderstar }) => {

  

  return (

    
    <ul className=" mobile-horizontal list-unstyled mb-0 ps-4 pt-3 ">
      {planets.map((planet, index) => {
        const [start, end] = planet.range || [0, 0];

        const isActive = Pnt >= start && Pnt <= end;
        const showProgress = Pnt >= start;

        const showNextProgress = Pnt > end;

        return (
          <li
            key={index}
            className={`d-flex  ${isActive ? "position-relative" : ""} `}
          >
            <div className="d-lg-grid d-grid d-md-flex  progress-side-sec">
              {/* Show previous progress hr if not active */}
              {index !== 0 && (
                <hr className="opacity-100 progress-side-hr11" />
              )}


              {/* Show current step image */}
              <img
                className="lg-w-50 mx-auto prgicon"
                src={prgicon}
                alt="prgicon"
              />

              {/* Show active progress hr */}
              {isActive && <hr className="opacity-100 progress-side-hr" />}
            </div>

            {/* Tooltip for current range only */}
            {isActive && (
              <span className="position-absolute space-grotesk-medium font-12 tooltiptext p-2 rounded text-light-yellow">
                {Pnt} Meteors
              </span>
            )}

            {/* Planet Name */}
            <span
              className={`ms-lg-2 ms-2   progress-sect-name ${isActive && index == 0 ? "d-flex align-items-lg-start align-items-center" : "d-flex align-items-center mt-4 mt-lg-0  align-items-lg-end"} ${isActive && index !== 0 ? "d-flex align-items-center" : ""}  ${isActive || Pnt > end
                  ? "mt-0"
                  : "progress-test-mt"
                } space-grotesk-medium font-16 text-blue-2`}
            >
              {planet.name}
            </span>

            
          </li>
        );
      })}

      <li className="galaxy-star d-flex flex-column align-items-center flex-fill  mt-34 pb-3 d-lg-none d-block">
        <img className="w-44 " src={borderstar} alt="borderstar" />
        <h4 className="my-0  text-center text-blue-2 font-18 space-grotesk-medium">
          Galaxy Complete
        </h4>
      </li>
    </ul>

  );
};
export default PlanetProgress;