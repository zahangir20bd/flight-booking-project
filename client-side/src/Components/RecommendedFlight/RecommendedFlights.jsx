import React from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import SectionTitle from "../SectionTitle";

const RecommendedFlights = () => {
  return (
    <>
      <div>
        {/* <h1 className="text-xl mt-2 font-semibold">Recommended Flights</h1>
          <p className="text-sky-700 flex mt-1 font-bold m">
            <GiAirplaneDeparture /> --------
          </p> */}
        <SectionTitle sectionTitle={"Recommended Flights"} />

        <p className="text-xs mb-10">
          Most famous Flights of us. Our happy clients always happy with these
          Flights. <br /> The flights are always maintenance there roles and
          regulations.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        <div className="border shadow-2xl p-2">
          <div>
            <div className="flex gap-5 container ">
              <img
                className="object-cover rounded-lg mb-14 shadow-2xl "
                src="https://c4.wallpaperflare.com/wallpaper/393/536/1/the-sky-clouds-flight-lights-wallpaper-preview.jpg"
              />
            </div>
          </div>
          <div className="flex mt-2 justify-between items-center">
            <div>
              <p className="w-6 h-6 rounded-[100%] border border-black text-black pl-1 pt-1  ">
                <GiAirplaneDeparture />
              </p>
            </div>
            <div>
              <h3 className="card-title mr-16">Bengaluru to Paris</h3>
              <p className="text-semibold text-xs font-semibold">
                ONE WAY FLIGHT
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">FROM</p>
              <p className="text-sky-400 font-bold">$620</p>
            </div>
          </div>
          <div className="flex items-center align-middle justify-between  mt-8">
            <button className="rounded-full bg-slate-600 font-bold px-3 pb-[0.13rem] text-white">
              View
            </button>
            <button className="rounded-full border text-sky-500 px-3 font-bold pb-[0.13rem] border-sky-500 ">
              Book
            </button>
          </div>
        </div>
        <div className="border shadow-2xl p-2">
          <div>
            <div className="flex gap-5 container ">
              <img
                className="object-cover mb-10 rounded-lg shadow-2xl "
                src="https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </div>
          </div>
          <div className="flex mt-2 justify-between items-center">
            <div>
              <p className="w-10 h-10 rounded-[100%] border border-black text-black pl-3 pt-3  ">
                <GiAirplaneDeparture />
              </p>
            </div>
            <div>
              <h3 className="card-title mr-16">Bengaluru to Paris</h3>
              <p className="text-semibold text-xs font-semibold">
                ONE WAY FLIGHT
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">FROM</p>
              <p className="text-sky-400 font-bold">$620</p>
            </div>
          </div>
          <div className="flex items-center align-middle justify-between mt-8">
            <button className="rounded-full bg-slate-600 font-bold px-3 pb-[0.13rem] text-white">
              View
            </button>
            <button className="rounded-full border text-sky-500 px-3 font-bold pb-[0.13rem] border-sky-500 ">
              Book
            </button>
          </div>
        </div>
        <div className="border shadow-2xl p-2">
          <div>
            <div className="flex gap-5 container ">
              <img
                className="object-cover rounded-lg shadow-2xl mb-10 "
                src="https://www.traveloffpath.com/wp-content/uploads/2021/11/New%E2%80%8B-Low-Cost-Airline-Set-To-Launch-In-Calgary-Next-Year.jpg"
              />
            </div>
          </div>
          <div className="flex mt-2 justify-between items-center">
            <div>
              <p className="w-10 h-10 rounded-[100%] border border-black text-black pl-3 pt-3">
                <GiAirplaneDeparture />
              </p>
            </div>
            <div>
              <h3 className="card-title mr-16">Bengaluru to Paris</h3>
              <p className="text-semibold text-xs font-semibold">
                ONE WAY FLIGHT
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">FROM</p>
              <p className="text-sky-400 font-bold">$620</p>
            </div>
          </div>
          <div className="flex items-center align-middle justify-between  mt-8">
            <button className="rounded-full bg-slate-600 font-bold px-3 pb-[0.13rem] text-white">
              View
            </button>
            <button className="rounded-full border text-sky-500 px-3 font-bold pb-[0.13rem] border-sky-500 ">
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedFlights;
