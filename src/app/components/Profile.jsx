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
