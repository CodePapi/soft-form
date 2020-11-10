import React from "react";
import softcomLogo from "./softcom.svg";

export default function Dashboard() {
  return (
    <div className="mx-auto h-screen ">
      <div className="h-full">
        <header className="bg-gray-900">
          <div className="px-4 py-1">
            <img className="h-10 w-16" src={softcomLogo} alt="workcation" />
          </div>
        </header>
        <p className="text-2xl text-center py-4">Welcome to Softcom!</p>
      </div>
    </div>
  );
}
