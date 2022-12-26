// import { AuthContext } from "../authContext";
import React, { useEffect, useState } from "react";

import { AuthContext } from "../authContext";
import MkdSDK from "../utils/MkdSDK";

const AdminDashboardPage = () => {
  // const { dispatch } = React.useContext(AuthContext);
  let sdk = new MkdSDK();
  const [page, setPage] = useState(1);
  const [maxNumberOfPages, setMaxNumberOfPages] = useState(0);
  const [videoList, setVideoList] = useState([]);
  const { dispatch, state } = React.useContext(AuthContext);


  useEffect(() => {
    const fetchData = async () => {
      sdk.setTable("video")
      const res = await sdk.callRestAPI({
        "payload": {},
        "page": page,
        "limit": 10
      }, "PAGINATE");
      setVideoList(res.list)
      setMaxNumberOfPages(res.num_pages)
    }
    fetchData()
  }, [page])
  
  return (
    <>
      <div className="w-full flex flex-col justify-start items-center h-screen text-gray-700 font-thin max-w-7xl mx-auto">
       <nav className="flex flex-row justify-between items-center w-full mb-28">
          <span className="uppercase text-white text-5xl font-black">app</span>
          <button className="flex justify-center items-center outline-none bg-green px-6 py-[14px] rounded-[40px]" 
          onClick={()=>{
            dispatch({
              type: "LOGOUT",
            });
            window.location.href = "/" + state.role + "/login";
          }}
          >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2478_592)">
              <path d="M5 20C5 17.544 6.991 15.553 9.447 15.553H14.553C17.009 15.553 19 17.544 19 20" stroke="#696969" strokeWidth="1.4824" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.0052 5.2448C16.6649 6.90453 16.6649 9.59548 15.0052 11.2552C13.3455 12.9149 10.6545 12.9149 8.9948 11.2552C7.33507 9.59548 7.33507 6.90453 8.9948 5.2448C10.6545 3.58507 13.3455 3.58507 15.0052 5.2448" stroke="#696969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

        <div>
         <table className="w-full table-fixed border-separate border-spacing-y-6">
					<thead className="w-full pb-2">
						<tr>
							<th className="text-black-tertiary whitespace-nowrap text-sm font-normal text-left w-[5%] pl-4">#</th>
							<th className="text-black-tertiary whitespace-nowrap text-sm font-normal text-left w-[35%]">Title</th>
							<th className="text-black-tertiary whitespace-nowrap text-sm font-normal text-left w-[40%]">Author</th>
							<th className="text-black-tertiary whitespace-nowrap text-sm font-normal text-right w-[20%]">
                <div className="flex justify-end items-center space-x-2">
                  <span>
                    Most Liked
                  </span>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#696969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </th>
						</tr>
					</thead>
					<tbody>
            {!!(videoList.length>0) && videoList.map((_video, index)=>(
              <tr key={index + 1}>
                <td 
                className="rounded-l-2xl border-b border-t border-diver border-l pl-4"
                width="5%"
                >
                  <div className="flex justify-start items-center w-full">
                    <span className="text-black-tertiary text-sm">{index+ 1}</span>
                  </div>
                </td>
                <td className="border-b border-t border-diver"
                width="35%">
                  <div className="flex justify-start items-center w-full py-4 space-x-4 pr-4">
                    <div><img src={_video.photo} alt={_video.title} className="h-16 w-32 rounded-lg" /></div>
                    <div className="text-white text-xl">{_video.title}</div>
                  </div>
                </td>
                <td className="border-b border-t border-diver"
                width="40%">
                  <div className="flex justify-start items-center w-full">
                    <span className="text-green">{_video.username}</span>
                  </div>
                </td>
                <td className="rounded-r-2xl border-b border-t border-diver border-r pr-4"
                width="20%">
                  <div className="flex flex-row justify-end items-center w-full space-x-2">
                    <span className="text-white">{_video.like}</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_2478_1113)">
                      <path d="M10.0085 3.75833V16.25" stroke="#9BFF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.01929 8.76167L10.0001 3.74834L14.981 8.76167" stroke="#9BFF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_2478_1113">
                      <rect width="20" height="20" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
				</table>

        <div className="flex justify-end items-center w-full pt-6 pb-12">
          <div className="flex justify-start items-center space-x-4">
            <button type="button" className="flex justify-center items-center outline-none" onClick={()=>page>1 && setPage(prev=>prev-1)}>
              <span className="text-base text-white">Prev</span>
            </button>
             <button type="button" className="flex justify-center items-center outline-none" onClick={()=>page!==maxNumberOfPages && setPage(prev=>prev+1)}>
              <span className="text-base text-white">Next</span>
            </button>
          </div>
        </div>
        </div>
      </main>
      </div>
    </>
  );
};

export default AdminDashboardPage;
