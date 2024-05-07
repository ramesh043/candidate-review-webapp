This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
### [you can click on link to see live webiste in your browser] 🌐 <a href="https://candidate-review-webapp.vercel.app/">Candiadte Review Webapp</a>

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

#Page Tsx File is here 
``` js
import Sidebar from "./components/Sidebar";
import DashBoard from "./components/DashBoard";

function Home() {
  return (
    <>
      <main>
        <div>
          <Sidebar />
        </div>
        <div>
          <DashBoard />
        </div>
      </main>
      <div className="flex justify-between pt-4 my-4 items-center px-4 border-t-2 divide-slate-100">
        <p>2024 &copy; ❤️Ramesh</p>
        <div className="text-sm">
          <a href="/" className="text-sm font-thin mx-2">
            Contact Us
          </a>
          <a href="/" className="text-sm font-thin mx-2">
            Privacy
          </a>
          <a href="/" className="text-sm font-thin">
            Terms
          </a>
        </div>
      </div>
    </>
  );
}
export default Home;

```
## DashBoard File
``` js
import React from "react";
import Sales from "./Sales";
import Profile from "./Profile";
function DashBoard() {
  return (
    <div className="dashboard">
      <div className="sales">
        <Sales />
      </div>
      <div className="profile">
        <Profile />
      </div>
    </div>
  );
}

export default DashBoard;

```
## Data File here
``` js
export const data = [
  {
    id: 1,
    title: "About",
    description:
      "I am Ramesh. Good in Frontend Technologies to create beautful user interfaces ",
  },
  {
    id: 2,
    title: "Experience",
    description:
      "Good Intern Experience in Frontend Technologies. I have Completed Projects also",
  },
  {
    id: 3,
    title: "Hobbies",
    description: "Reading Books,Playing Cricket, Gym Lover, Coding Lover",
  },
  {
    id: 1,
    title: "Introduction",
    description:
      "I am Ramesh. Good in Frontend Technologies to create beautful user interfaces ",
  },
];
```
## Sidebar File Ypu can check here
``` js
"use client";

import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { CiBoxes } from "react-icons/ci";
function Sidebar() {
  const [assigNment, setAssignMent] = useState("hello");
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div className="sidebar">
      <div className="sidebarContent">
        <div className="mainSidebarHeading">
          <div className="mainSidebar">
            <CiBoxes size={30} />
          </div>
          <div>
            <h5 className="font-bold text-sm">Hi, AltWorld</h5>
          </div>
        </div>
        <div className="sidebarDashboard">
          <div className="homeIconBar">
            <IoHome className="homeIcon" size={20} />
          </div>
          <h5>dashboard</h5>
        </div>
        <div className="assignNewBoard">
          <div className="plusContainer">
            <FaPlus className="plusIcon" size={20} />
          </div>
          <h5>New Assignment?</h5>
          <p>Select from pre-defined questions to have a quick turnaround</p>
          <button className="btn text-sm" onClick={handleClick}>
            Create New Assignment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;


```
## profile file
``` js
import React from "react";

import CarouselIntro from "../components/CarouselIntro";
import { data } from "./data";
import { Progress } from "flowbite-react";
import PersionBio from "../components/PersionBio";
import ProgressBar from "../components/ProgressBar";
function Profile() {
  return (
    <div className="profile">
      <div className="profileSections">
        <div className="profileBio py-4">
          <PersionBio />
          <div className="pt-2">
            <div className="shadow-lg  rounded bg-white p-2 mb-2 progress">
              <ProgressBar title="Behaviour" score={`${9}/${0}`} />

              <Progress progress={90} color="green" />
            </div>
            <div className="shadow-lg rounded bg-white p-2 mb-2 progress">
              <ProgressBar title="Communication" score={`${8}/${0}`} />

              <Progress progress={80} color="green" />
            </div>
            <div className="shadow-lg rounded bg-white p-2 progress">
              <ProgressBar title="Situation Handling" score={`${6}/${0}`} />

              <Progress progress={60} color="yellow" />
            </div>
          </div>
          {data.map((item, id) => {
            return (
              <div key={id} className="pt-4 ">
                <h5 className="text-black font-bold">{item.title}</h5>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </div>
            );
          })}
          <div className="max-w-40 m-auto pt-4">
            <button className="py-1 bg-teal-500 px-20 text-center uppercase rounded font-bold text-white ">
              ShortList
            </button>
          </div>
        </div>

        <div className="carousel">
          <CarouselIntro />
        </div>
      </div>
    </div>
  );
}

export default Profile;

```
## Carousel File 
``` js
"use client";
import React from "react";
import { Carousel } from "flowbite-react";
function CarouselIntro() {
  return (
    <div className="h-full bg-slate-200 pt-8 m-2 rounded-t-lg">
      <div className=" mt-2"></div>
      <Carousel slideInterval={5000}>
        <img
          src="https://images.unsplash.com/photo-1560543685-824b3c5e82ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZHklMjBnaXJsfGVufDB8fDB8fHww"
          alt="..."
        />
        <img
          src="https://images.unsplash.com/photo-1560543685-824b3c5e82ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZHklMjBnaXJsfGVufDB8fDB8fHww"
          alt="..."
        />
        <img
          src="https://images.unsplash.com/photo-1587614295506-f03c0e6f5b44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0dWR5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
          alt="..."
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1666961359225-9cb8e6c984e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZHklMjBnaXJsfGVufDB8fDB8fHww"
          alt="..."
        />
      </Carousel>
      <div className="relative">
        <div className="absolute bottom-2 left text-white font-light w-full bg-slate-500 shadow-neutral-900 ">
          <p className="text-center">Tell me about your self</p>
          <p className="text-center">Question {`${1}/${11}`}</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselIntro;

```
## Person file
``` js
import React from "react";

function PersionBio() {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex mx-3 text-sm text-slate-500 ">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D"
          alt="profile"
          width={40}
          className="rounded-md"
        />
        <div className="mx-4">
          <h6 className="font-bold">Saurav Singh</h6>
          <a href="" className="text-sm font-normal">
            saurav@gmail.com
          </a>
        </div>
      </div>
      <div>
        <h1 className="text-green-400 font-bold text-2xl">{`${78}%`}</h1>
      </div>
    </div>
  );
}

export default PersionBio;

```
## Candiadte File
``` js
import React from "react";

function Candidate() {
  return (
    <div className="flex justify-between items-center">
      <div className="candidateProfile flex my-2">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D"
          alt="profile"
        />
        <div className="mx-3 text-sm text-slate-500">
          <h6 className="font-bold">Saurav Singh</h6>
          <a href="" className="text-sm font-normal">
            saurav@gmail.com
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-green-400 font-bold">{`${78}%`}</h2>
      </div>
    </div>
  );
}

export default Candidate;

```
## Global CSS file
``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
/* 52D3D8 */
main {
  display: flex;
  gap: 0.45rem;
}

.sidebar {
  flex: 1.5;
  height: 100vh;
}

.mainSidebar {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 0.64rem;
}
.homeIcon {
  color: #52d3d8;
}
.homeIconBar {
  background-color: hsla(360, 100%, 100%, 1);
  padding: 0.42rem;
  border-radius: 50%;
}
.sidebarDashboard h5 {
  text-transform: capitalize;
  font-weight: 900;
}
.sidebarDashboard {
  display: flex;

  align-items: center;
  gap: 0.76rem;
  padding: 30px 30px 30px 0;
}

.assignNewBoard {
  background-image: url("../images/rrreflection\ \(1\).svg");
  margin-top: 20px;
  padding: 20px;
  border-radius: 19px;
  background-color: #52d3d8;
}
.mainSidebarHeading {
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 0.34rem;
  border-bottom: 1px solid #ddd;
}
.sidebarContent {
  padding: 30px;
}
.mainSidebar h5 {
  color: grey;
  /* text-align: center; */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #eef7ff;
}

.btn {
  background-color: white;
  border: none;
  margin-top: 10px;
  padding: 9px;
  width: 100%;
  border-radius: 9px;
  font-weight: bold;
}
.assignNewBoard p {
  font-size: 13px;
  margin-top: 10px;
  color: white;
}
.assignNewBoard h5 {
  margin-top: 20px;
  color: white;
}
.plusContainer {
  /* background-color: rgba(251, 246, 246, 0.995); */
  padding: 0.45rem;
  background-color: white;
  width: 40px;
  text-align: center;
  border-radius: 12px;
}
.dashboard {
  margin-top: 40px;

  display: flex;
  width: 1200px;
  height: 100%;

  /* background-color: white; */
  /* gap: 1rem; */
}
.sales {
  flex: 2;
  background-color: white;
  margin: 10px;
  height: 70%;
  border-radius: 9px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.034) 0px 0.25em 1em;
}
/* Profile Main */
.profile {
  flex: 4;
  background-color: white;
  height: 750px;
  margin: 10px;
  padding: 5px;
  border-radius: 9px;
}
.salesHeading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
.mainSales {
  padding: 20px;
}
.progress {
  border: 1px solid #ddd;
}
a {
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;
}
.active {
  color: #5fd068;
}
.edit {
  margin-left: 5px;

  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  border-radius: 50%;
}
.profileSections {
  display: flex;
  gap: 1rem;
  /* height: 650px; */
}
.profileBio {
  flex: 2.2;
  padding: 10px;
}
.carousel {
  flex: 2.5;
  height: 600px;
}
.candidateProfile img {
  width: 25px;
  border-radius: 9px;
  object-fit: cover;
}

```
## First Sidebar Person Information File
``` js
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

```
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
