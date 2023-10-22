import React from "react";

const LaunchList = ({ launches, loading }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4">
      {loading && <p>Loading...</p>}
      {!loading &&
        launches.map((item, index) => (
          <div key={index} className="px-2 pb-4 flex-grow w-full ">
            <div className="bg-white p-6 h-full min-w-full border border-gray-300 rounded-md shadow">
              <div className="bg-whitesmoke">
                <img className="w-full bg-gray-300 mb-4" src={item.links.mission_patch_small} alt="Mission Patch" />
              </div>
              <p className="text-blue-500 font-bold text-lg mb-3">
                {item.mission_name} #{item.flight_number}
              </p>
              <p className="text-lg">
                <b className="text-black">Mission Ids:</b>
              </p>
              <ul className="list-disc mx-4">
                {item.mission_id.map((id, index) => (
                  <li key={index} className="ml-4 text-black">
                    <span className="text-blue-500">{id}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg">
                <b className="text-black">Launch Year:</b>
                <span className="text-blue-500 ml-2">{item.launch_year}</span>
              </p>
              <p className="text-lg w-full flex justify-between">
                <b className="text-black w-[5rem]">Successful Launch:</b>
                <span className="text-blue-500">{JSON.stringify(item.launch_success)}</span>
              </p>
              <p className="text-lg w-full flex justify-between">
                <b className="text-black w-[5rem]">Successful Landing:</b>
                <span className="text-blue-500 ml-auto">
                  {JSON.stringify(item.rocket.first_stage.cores[0].land_success)}
                </span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LaunchList;
