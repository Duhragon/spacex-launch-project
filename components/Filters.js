// import React from "react";

// const launchYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
// const launchStatus = ["True", "False"];
// const landingStatus = ["True", "False"];

// const Filters = ({ onYearFilter, onLaunchFilter, onLandingFilter }) => {
//   return (
//     <div className="">
//       {/* Year filter */}
//       <div className="flex flex-col justify-center mx-auto">
//         <h4 className="text-black w-[9rem] mx-auto mb-2 border-b border-black flex justify-center">Launch Year</h4>
//         {/* <></> */}
//         <div className="flex flex-wrap w-[11rem] mx-auto justify-between">
//           {launchYears.map((year, index) => (
//             <button
//               key={index}
//               className="bg-[#A3CB38] my-2 py-[2px] px-4 hover:bg-[#649403] rounded-md text-black"
//               onClick={() => onYearFilter(year)}
//             >
//               {year}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Successful Launch filter */}
//       <div>
//         <h4 className="text-black w-[9rem] mx-auto mb-2 border-b border-black flex justify-center">
//           Successful Launch
//         </h4>
//         <div className="flex flex-wrap w-[11rem] mx-auto justify-between">
//           {launchStatus.map((launch, index) => (
//             <button
//               key={index}
//               className="bg-[#A3CB38] my-2 py-[2px] px-4 hover:bg-[#649403] rounded-md text-black"
//               onClick={() => onLaunchFilter(launch)}
//             >
//               {launch}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Landing filter */}
//       <div>
//         <h4 className="text-black w-[9rem] mx-auto mb-2 border-b border-black flex justify-center">
//           Successful Landing
//         </h4>

//         <div className="flex flex-wrap w-[11rem] mx-auto justify-between">
//           {landingStatus.map((land, index) => (
//             <button
//               key={index}
//               className="bg-[#A3CB38] mt-3 mb-16 py-[2px] px-4 hover:bg-[#649403] rounded-md text-black"
//               onClick={() => onLandingFilter(land)}
//             >
//               {land}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filters;

import React from "react";

const launchYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
const launchStatus = ["True", "False"];
const landingStatus = ["True", "False"];

const Filters = ({ year_st, launch_st, landing_st, onYearFilter, onLaunchFilter, onLandingFilter }) => {
  return (
    <div className="">
      {/* Year filter */}
      <div className="flex flex-col justify-center mx-auto">
        <h4 className="text-black w-[9rem] mx-auto mb-2 border-b border-black flex justify-center">Launch Year</h4>
        <div className="flex flex-wrap w-[11rem] mx-auto justify-between">
          {launchYears.map((year, index) => (
            <button
              key={index}
              className={`bg-[${
                year === year_st ? "#649403" : "#A3CB38"
              }] my-2 py-[2px] px-4 hover:bg-[#649403] rounded-md text-black`}
              onClick={() => onYearFilter(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Successful Launch filter */}
      <div>
        <h4 className="text-black w-[9rem] mx-auto mb-2 border-b border-black flex justify-center">
          Successful Launch
        </h4>
        <div className="flex flex-wrap w-[11rem] mx-auto justify-between">
          {launchStatus.map((launch, index) => (
            <button
              key={index}
              className={`bg-[${
                launch === launch_st ? "#649403" : "#A3CB38"
              }] my-2 py-[2px] px-4 hover:bg-[#649403] rounded-md text-black`}
              onClick={() => onLaunchFilter(launch)}
            >
              {launch}
            </button>
          ))}
        </div>
      </div>

      {/* Landing filter */}
      <div>
        <h4 className="text-black w-[9rem] mx-auto mb-2 border-b border-black flex justify-center">
          Successful Landing
        </h4>

        <div className="flex flex-wrap w-[11rem] mx-auto justify-between">
          {landingStatus.map((land, index) => (
            <button
              key={index}
              className={`bg-[${
                land === landing_st ? "#649403" : "#A3CB38"
              }] mt-3 mb-16 py-[2px] px-4 hover:bg-[#649403] rounded-md text-black`}
              onClick={() => onLandingFilter(land)}
            >
              {land}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
