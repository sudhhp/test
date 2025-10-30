import React, { useState } from "react";

const Tab1 = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      <div>
        <div className="flex justify-around ">
          <ul className="flex min-w-max overflow-x-auto transition-all duration-300 overflow-hidden ">
            <li>
              <button
                role="tab"
                onClick={() => setActiveTab("tab1")}
                className={`flex items-center py-3 px-6 font-medium whitespace-nowrap border-b-2 ${
                  activeTab === "tab1"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-white-500 hover:text-sky-300"
                }`}
              >
                {" "}
                Tab 1{" "}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("tab2")}
                className={`flex items-center py-3 px-6 font-medium whitespace-nowrap border-b-2 ${
                  activeTab === "tab2"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-white-500 hover:text-sky-300"
                }`}
                data-tab="tabs-with-badge-2"
                role="tab"
              >
                {" "}
                Tab 2{" "}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("tab3")}
                className={`flex items-center py-3 px-6 font-medium whitespace-nowrap border-b-2 ${
                  activeTab === "tab3"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-white-500 hover:text-sky-300"
                }`}
                role="tab"
              >
                {" "}
                Tab 3{" "}
              </button>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <div
            id="tabs-with-badge-1"
            role="tabpanel"
            aria-labelledby="tabs-with-badge-item-1"
            className={activeTab === "tab1" ? "block" : "hidden"}
          >
            <p className="text-white-500 ">
              {" "}
              This is the{" "}
              <em className="font-semibold text-white-800 ">first</em> item's
              tab body.{" "}
            </p>
            <div className="relative overflow-x-auto glass-card">
              <table className="w-full text-sm text-left rtl:text-right ">
                <thead className="text-xs uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-white-900 whitespace-nowrap"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
                  </tr>
                  <tr className=" border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-white-900 whitespace-nowrap"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td className="px-6 py-4">$1999</td>
                  </tr>
                  <tr className="">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-white-900 whitespace-nowrap"
                    >
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">$99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            id="tabs-with-badge-2"
            className={activeTab === "tab2" ? "block" : "hidden"}
            role="tabpanel"
            aria-labelledby="tabs-with-badge-item-2"
          >
            <p className="text-white-500 ">
              {" "}
              This is the{" "}
              <em className="font-semibold text-white-800 ">second</em> item's
              tab body.{" "}
            </p>
          </div>
          <div
            id="tabs-with-badge-3"
            className={activeTab === "tab3" ? "block" : "hidden"}
            role="tabpanel"
            aria-labelledby="tabs-with-badge-item-3"
          >
            <p className="text-white-500 ">
              {" "}
              This is the{" "}
              <em className="font-semibold text-white-800 ">third</em> item's
              tab body.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
