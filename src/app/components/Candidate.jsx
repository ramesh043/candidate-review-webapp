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
