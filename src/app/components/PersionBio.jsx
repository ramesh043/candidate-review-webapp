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
