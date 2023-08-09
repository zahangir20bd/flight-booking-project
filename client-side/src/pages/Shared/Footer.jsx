import React from "react";
import {
  AiOutlineArrowRight,
  AiOutlinePhone,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";
import { IoAirplaneSharp, IoLocationOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className="primary_background ">
      {/* <div className="wave-decoration">
        <div className="wave02">
          <svg
            version="1.1"
            width="2000"
            height="131"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 2000 131.2"
            style={{ enableBackground: "new 0 0 2000 131.2" }}
            xmlSpace="preserve"
          >
            <path
              className="st0"
              d="M-0.5,83.4c59.6,40.5,193.3,35,316.7-12.3C525.6-9.2,756.7-9.6,979.8,12.3s445.6,57.9,669.8,54.1C1821.1,63.5,1932,56,2000,53c0,36,0,76.4,0,76.4H1L-0.5,83.4z"
            ></path>
            <path
              className="st1"
              d="M309.2,46.1c265.1-57.8,453.7-19.6,687.9,6.8c285.1,32.2,564.2,63,863.4,33.4c94-9.3,119.5-19.6,139.5-19c0,32.2,0,63,0,63H0v-66C0,64.3,152.7,80.2,309.2,46.1z"
            ></path>
            <path
              className="st1"
              d="M344.5,54.9c82.3-26.3,167.2-46,253-36.5S767,51.6,851.9,67.8c272.3,52,522.5,16.7,819.3,5c90-3.5,293.8-13.6,328.8-12.6c0,24,0,71,0,71H-1v-59C-1,72.3,198.7,101.6,344.5,54.9z"
            ></path>
            <path d="M1731.8,97.1c-289.3,18.5-590.4,17.2-873.9-16.8C746,66.9,641.1,42.1,528.5,39.5s-249.3,31-353.7,69.9c-57.5,21.4-164.7,2.3-175.7-4.7c0,8,0,26.5,0,26.5h2003v-58C2002,73.3,1854.2,89.2,1731.8,97.1z"></path>
          </svg>
        </div>
      </div> */}

      {/* Footer Item Design */}
      <section className=" text-white p-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Airblees Text */}
        <div>
          <img
            className="w-24"
            src="https://i.ibb.co/C8G1Npj/airbliss-White.png"
            alt=""
          />

          <p className="mt-1 text-left text-sm mr-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            ipsum, sed dignissimos iure deserunt fugit soluta eum eaque tenetur
            recusandae quibusdam. Quia, magnam? Aperiam ut neque molestias id
            aut, quam quod ipsum, ea eligendi sed sunt hic delectus minima quia!
          </p>

          <div className="mt-4 flex justify-start items-center gap-2">
            <div className="bg-gray-700 rounded-md border-[1px] h-10 w-10 text-center flex justify-center items-center">
              <p>
                <FaFacebookF />{" "}
              </p>
            </div>

            <div className="bg-gray-700 rounded-md border-[1px] h-10 w-10 text-center flex justify-center items-center">
              <p>
                {" "}
                <AiOutlineTwitter />{" "}
              </p>
            </div>

            <div className="bg-gray-700 rounded-md border-[1px] h-10 w-10 text-center flex justify-center items-center">
              <p>
                {" "}
                <AiFillLinkedin />{" "}
              </p>
            </div>

            <div className="bg-gray-700 rounded-md border-[1px] h-10 w-10 text-center flex justify-center items-center">
              <p>
                {" "}
                <AiOutlineWhatsApp />{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-flow-col gap-4">
          <div className="mt-6 lg:mt-0">
            <h1 className="text-xl font-bold">Quick Links</h1>
            <p>
              <span className="flex items-center  tracking-widest">
                <IoAirplaneSharp />
                <BsDashLg />
                <BsDashLg />
                <BsDashLg />
                <BsDashLg />
                <BsDashLg />
                <BsDashLg />
              </span>
            </p>

            <div>
              <p className="inline-flex items-center gap-1 mt-3">
                <span>
                  <AiOutlineArrowRight size={16} />
                </span>
                <span>About Us</span>
              </p>
            </div>

            <div>
              <p className="inline-flex items-center gap-1 mt-3">
                <span>
                  <AiOutlineArrowRight size={16} />
                </span>
                <span>Blogs</span>
              </p>
            </div>

            <div>
              <p className="inline-flex items-center gap-1 mt-3">
                <span>
                  <AiOutlineArrowRight size={16} />
                </span>
                <span>Destination</span>
              </p>
            </div>

            <div>
              <p className="inline-flex items-center gap-1 mt-3">
                <span>
                  <AiOutlineArrowRight size={16} />
                </span>
                <span>Booking Flight</span>
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <h1 className="text-xl font-bold">Contact Us</h1>
            <p>
              <span className="flex items-center  tracking-widest">
                <IoAirplaneSharp />
                <BsDashLg />
                <BsDashLg />
                <BsDashLg />
                <BsDashLg />
                <BsDashLg />
                <BsDashLg />
              </span>
            </p>

            <div>
              <p className="inline-flex justify-start items-center gap-1 mt-3">
                <span>
                  <IoLocationOutline size={20} />
                </span>
                <span>5807W 63rd Dhaka,Bangladesh</span>
              </p>
            </div>

            <div>
              <p className="inline-flex justify-start items-center gap-1 mt-3">
                <span>
                  <AiOutlinePhone size={20} />
                </span>
                <span>+88 0150000001</span>
              </p>
            </div>

            <div>
              <p className="inline-flex justify-start items-center gap-1 mt-3">
                <span>
                  <CgMail size={20} />
                </span>
                <span>info@airbless.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-0">
          <h1 className="text-xl font-bold">Recent Postes</h1>
          <p>
            <span className="flex items-center  tracking-widest">
              <IoAirplaneSharp />
              <BsDashLg />
              <BsDashLg />
              <BsDashLg />
              <BsDashLg />
              <BsDashLg />
              <BsDashLg />
            </span>
          </p>

          <div className="mt-2 flex justify-start items-center gap-2">
            <img
              className="rounded shadow-md"
              src="https://www.adivaha.com/themeforest-travon/assets/img/blog/recent-post-2-1.jpg"
              alt=""
            />

            <div>
              <h1 className="font-bold ">
                5 Ways To Get Your Dream Photos On Picnic
              </h1>
              <p className="mt-1 inline-flex items-center gap-1">
                <span>
                  <AiOutlineCalendar size={18} />{" "}
                </span>{" "}
                <span>21 June,2023</span>
              </p>
            </div>
          </div>

          <div className="mt-2 flex justify-start items-center gap-2">
            <img
              className="rounded shadow-md"
              src="https://www.adivaha.com/themeforest-travon/assets/img/blog/recent-post-2-2.jpg"
              alt=""
            />

            <div>
              <h1 className="font-bold ">9 Essential Tips For Ture.</h1>
              <p className="mt-1 inline-flex items-center gap-1">
                <span>
                  <AiOutlineCalendar size={18} />{" "}
                </span>{" "}
                <span>18 June,2023</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Partner */}
      <div>
        <h1 className="ml-12 text-white text-xl font-bold mb-2">
          Payment Partner
        </h1>
        <hr className="w-[170px] ml-12" />

        <div className="ml-10 flex lg:flex-row flex-col ">
          <div className="flex justify-start items-center">
            <img
              className="h-16 img_bg"
              src="https://i.ibb.co/gTF85MF/unnamed-removebg-preview.png"
              alt=""
            />

            <img
              className="h-10 img_bg"
              src="https://i.ibb.co/bzNCqnQ/Master-Card-early-1990s-logo-svg-removebg-preview.png"
              alt=""
            />
          </div>

          <div className="flex justify-start items-center">
            <img
              className="h-6 lg:ml-1 img_bg"
              src="https://i.ibb.co/J2fnFdy/2560px-Pay-Pal-logo-svg.png"
              alt=""
            />

            <img
              className="h-16 lg:ml-1 img_bg"
              src="https://i.ibb.co/BPwnQFQ/Discover-logo-removebg-preview.png"
              alt=""
            />
          </div>

          <div className="flex justify-start items-center">
            <img
              className="h-6 img_bg"
              src="https://i.ibb.co/C6Hzwdc/logo-black-59208b9-removebg-preview.png"
              alt=""
            />

            <img
              className="h-16 img_bg"
              src="https://i.ibb.co/qMLHdgs/download-2-removebg-preview-1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr className="mt-12" />

      <p className="pb-4 text-white text-center mt-4">
        &copy; 2023 Airbliess Bd Ltd. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
