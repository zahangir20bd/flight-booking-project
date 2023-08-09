import React from "react";
import SectionTitle from "../../../Components/SectionTitle";

const Testomonial = () => {
  return (
    <section className="bg-[url('http://webdesign-finder.com/equestria/wp-content/uploads/2017/10/parallax.jpg')] h-[100%] p-4 mt-16 mb-16 bg-fixed">
      <h1 className="text-center mt-4 text-3xl font-bold ">Testimonials</h1>
      <div className="flex flex-col  mb-2 border-opacity-50 w-1/2 md:w-[20%] mx-auto">
        <div className="divider">
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 m-4">
        <div className="shadow-md bg-white rounded-md p-5 w-full text-gray-500">
          <p>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
                checked
              />
            </div>
          </p>

          <p className="mt-2 mb-3">
            "Airbless BD offers a user-friendly interface and seamless
            navigation, making flight booking a breeze. However, introducing
            more filters and sorting options could enhance the search experience
            further."
          </p>

          <div className="flex justify-start gap-4 items-center">
            <img
              className="h-16 w-16 rounded-full border-2 border-red-200"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMp1QavdAbGgEZhWPjtMyDy2gzmtPnJFrO2P1xOh9sJdpfR_G5KGyvh5oXVlozSU04Eo&usqp=CAU"
              alt=""
            />
            <div>
              <h1 className="font-bold text-xl">Mary Cruzen</h1>
              <p className="text-sm">Co founder</p>
            </div>
          </div>
        </div>

        <div className="shadow-md bg-white rounded-md p-5 w-full text-gray-500">
          <p>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
                checked
              />
            </div>
          </p>

          <p className="mt-2 mb-3">
            "The website's clean design and quick search functionality on
            Airbless BD are commendable. Adding a visible customer support
            option would provide more assistance during the booking process."
          </p>

          <div className="flex justify-start gap-4 items-center">
            <img
              className="h-16 rounded-full border-2 border-red-200"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzAqKERFeE4h-K3vnOWQSWJmxRTKTApVjEg&usqp=CAU"
              alt=""
            />
            <div>
              <h1 className="font-bold text-xl">Tom Cruz</h1>
              <p className="text-sm">Founder</p>
            </div>
          </div>
        </div>

        <div className="shadow-md bg-white rounded-md p-5 w-full text-gray-500">
          <p>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 h-4 bg-green-500"
                checked
              />
            </div>
          </p>

          <p className="mt-2 mb-3">
            "Airbless BD provides competitive prices and a straightforward
            booking process. Integrating a rewards program for loyal customers
            would boost user engagement and retention."
          </p>

          <div className="flex justify-start gap-4 items-center">
            <img
              className="h-16 w-16 rounded-full border-2 border-red-200"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
              alt=""
            />
            <div>
              <h1 className="font-bold text-xl">Alex Sujan</h1>
              <p className="text-sm">Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testomonial;
