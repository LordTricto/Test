// import { AuthContext } from "../authContext";
import React from "react";

const AdminDashboardPage = () => {
  // const { dispatch } = React.useContext(AuthContext);

  return (
    <>
      <div className="w-full flex flex-col justify-start items-center h-screen text-gray-700 font-thin max-w-7xl mx-auto">
       <nav className="flex flex-row justify-between items-center w-full mb-28">
          <span className="uppercase text-white text-5xl font-black">app</span>
          <button className="flex justify-center items-center outline-none bg-green px-6 py-[14px] rounded-[40px]">
          {/* <button className="flex justify-center items-center outline-none bg-green px-6 py-[14px] rounded-[40px]" onClick={()=> dispatch({type: "LOGOUT"})}> */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2478_592)">
              <path d="M5 20C5 17.544 6.991 15.553 9.447 15.553H14.553C17.009 15.553 19 17.544 19 20" stroke="#696969" stroke-width="1.4824" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.0052 5.2448C16.6649 6.90453 16.6649 9.59548 15.0052 11.2552C13.3455 12.9149 10.6545 12.9149 8.9948 11.2552C7.33507 9.59548 7.33507 6.90453 8.9948 5.2448C10.6545 3.58507 13.3455 3.58507 15.0052 5.2448" stroke="#696969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_2478_592">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
            <span className="text-base text-black-secondary">Logout</span>
          </button>
			  </nav>
      <main className="flex flex-col justify-start items-start w-full">
        <div className="flex flex-row justify-between items-center mb-8 w-full">
          <h4 className="text-white text-[40px]">Today's leaderboard</h4>
          <div className="flex flex-row justify-start items-center gap-4 bg-black-item-bg px-10 py-[18px] rounded-2xl">
            <span className="text-base text-white">30 may 2022</span>
            <div>
              <div className="h-1 w-1 bg-icon-secondary rounded-full"></div>
            </div>
            <div className="bg-green px-[10px] py-1 rounded-lg">
              <span className="uppercase text-black text-base">submissions open</span>
            </div>
             <div>
              <div className="h-1 w-1 bg-icon-secondary rounded-full"></div>
            </div>
            <span className="text-base text-white">11:34</span>
          </div>
        </div>
      </main>
      </div>
    </>
  );
};

export default AdminDashboardPage;
