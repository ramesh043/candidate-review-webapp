import React from "react";
import { MdEdit } from "react-icons/md";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import Candidate from "../components/Candidate";

function Sales() {
  return (
    <div className="mainSales">
      <div className="salesHeading">
        <h4 className="font-bold">Sales BDE </h4>
        <div className="flex items-center mx-2">
          <a href="/" className="active ">
            Active
          </a>
          <MdEdit className="edit" size={10} />
        </div>
      </div>
      <div>
        <div className="py-2  text-sm ">
          <div className="flex justify-between  items-center">
            <p className="text-slate-500">Assignment Link</p>
            <a
              href="https://github.com/ramesh043 "
              className="py-2  text-sm text-sky-600 "
            >
              https://github.com/ramesh043
            </a>
          </div>
          <div className="flex justify-between">
            <p className="text-slate-500">Assignment Hour</p>
            <p className="text-slate-500 py-2 ">3 hours</p>
          </div>
          <div className="flex justify-between">
            <p className="text-slate-500">Assignment Ends at</p>
            <p className="text-slate-500">11 march 2024</p>
          </div>
        </div>
        <div className="flex justify-start items-center py-4">
          <div className="bg-white shadow-lg border text-black mx-4 text-sm font-bold py-1 px-4 rounded flex ml-2">
            <svg
              class="w-4 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z" />
              <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z" />
            </svg>
            <span className="pl-2 uppercase">To Review</span>
          </div>

          <div>
            <svg
              class="w-4 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M8 12.732A1.99 1.99 0 0 1 7 13H3v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2h-2a4 4 0 0 1-4-4v-2.268ZM7 11V7.054a2 2 0 0 0-1.059.644l-2.46 2.87A2 2 0 0 0 3.2 11H7Z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M14 3.054V7h-3.8c.074-.154.168-.3.282-.432l2.46-2.87A2 2 0 0 1 14 3.054ZM16 3v4a2 2 0 0 1-2 2h-4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div>
            <button
              className="text-sm font-bold uppercase pl-1
            "
            >
              {" ShortListed"}
            </button>
          </div>
        </div>
        <div className="flex justify-between  text-sm text-slate-500 pt-4 font-bold">
          <h6>Candidate</h6>
          <h6>Score</h6>
        </div>
        <div className="my-2">
          <div className="bg-gray-200">
            <Candidate />
          </div>
          <Candidate />
          <Candidate />
          <Candidate />
        </div>
      </div>
    </div>
  );
}

export default Sales;
