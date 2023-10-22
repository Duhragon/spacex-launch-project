import React, { useState, useEffect } from "react";
import Head from "next/head";
import Filters from "../components/Filters";
import LaunchList from "../components/LaunchList";
import { fetchLaunches } from "../utils/spacexApi";

const Home = () => {
  const [launchArray, setLaunchArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState(null);
  const [launch, setLaunch] = useState(null);
  const [landing, setLanding] = useState(null);

  useEffect(() => {
    fetchData(year, launch, landing);
  }, [year, launch, landing]);

  const fetchData = async (year, launchStatus, landingStatus) => {
    setLoading(true);
    const data = await fetchLaunches(year, launchStatus, landingStatus);
    setLaunchArray(data);
    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>SpaceX Launch Finder</title>
        <meta name="description" content="SpaceX launch missions." />
        <meta name="keywords" content="SpaceX, astronomy, space, launch, rocket" />
        <meta name="author" content="Shubham Dhoot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-300 px-3 h-full">
        <div className="flex justify-between items-center">
          <h1 className=" mx-4  text-black font-semibold text-3xl mb-2">SpaceX Launch Programs</h1>
        </div>
        <div className="sm:flex max-w-[1440px] mx-auto">
          <div className="bg-white px-5 rounded max-h-full pt-1 mx-2 sm:mr-4 mb-4 h-full">
            <h3 className="text-black px-3 font-bold text-xl">Filters</h3>
            <Filters
              year_st={year}
              launch_st={launch}
              landing_st={landing}
              onYearFilter={setYear}
              onLaunchFilter={setLaunch}
              onLandingFilter={setLanding}
            />
          </div>
          <div className="">
            <LaunchList launches={launchArray} loading={loading} />
          </div>
        </div>
        <div className="pt-4 pb-6 flex  justify-center">
          <h2 className="text-black">
            <span className="font-bold text-lg pr-2 ">Developed by:</span>
            Shubham Dhoot
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;

Home.getInitialProps = async ctx => {
  const data = await fetchLaunches();
  return {
    launches: data,
  };
};
