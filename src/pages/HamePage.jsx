import React, { useState } from "react";
import Tab1 from "./Tab1";
import "../index.css";
import { IoHome } from "react-icons/io5";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
const Homepage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const tabs = [
    { id: 1, label: "", icon: <FaHome size={30} /> },
    { id: 2, label: "", icon: <FaUser size={30} /> },
    { id: 3, label: "", icon: <FaCog size={30} /> },
  ];
  return (
    <>
      <div className=" backgroundm">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className=" p-4 lg:col-span-3 order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
              <div className=" p-2 md:order-2">
                <ul className="flex md:flex-col rounded-2xl justify-around shadow-lg p-3 glass-card md:h-[95vh]">
                  {tabs.map((tab) => (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-left py-3 px-6 font-medium rounded-2xl transition-all duration-200 flex items-center justify-center space-x-2 ${
                          activeTab === tab.id
                            ? "bg-white/80 text-indigo-600 shadow opacity-75"
                            : "text-sky-100 hover:bg-white/70 hover:text-indigo-800"
                        }`}
                      >
                        <span className="text-lg">{tab.icon}</span>
                        <span>{tab.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" p-2 md:col-span-5 ">
                <div className="flex-1  rounded-2xl p-6 shadow-md glass-card md:h-[95vh] h-[80vh]">
                  {activeTab === 1 && (
                    <div>
                      <p className="text-white-700">
                        <em className="font-semibold text-indigo-800">
                          <FaHome size={30} />
                        </em>{" "}
                      </p>
                      <Tab1 />
                    </div>
                  )}
                  {activeTab === 2 && (
                    <p className="text-white-700">
                      <em className="font-semibold text-indigo-800">
                        {" "}
                        <FaUser size={30} />
                      </em>{" "}
                    </p>
                  )}
                  {activeTab === 3 && (
                    <p className="text-white-700">
                      <em className="font-semibold text-indigo-800">
                        <FaCog size={30} />{" "}
                      </em>{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className=" py-6 px-2 order-2 lg:order-1 ">
            <div className=" rounded-2xl overflow-hidden shadow-md glass-card lg:h-[95vh]">
              <img
                className="w-full opacity-75 hover:opacity-100 transition duration-300"
                src="/images/card.jpg"
                alt="entekhab elc"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  enetekhab electronic Co
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #snowa
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #TV
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
