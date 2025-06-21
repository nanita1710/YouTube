import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //update cache
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  const handleToggleMenuCLick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md">
      <div className="flex col-span-1 space-x-2">
        <img
          className="h-8 cursor-pointer"
          onClick={handleToggleMenuCLick}
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
          alt="logo"
        />
        <img
          className="h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="yt_logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <div className="relative">
          <input
            value={searchQuery}
            className="w-1/2 pl-3 border border-gray-400 p-1 rounded-l-full"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-1  rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute bg-white py-2 px-2 w-[32.3rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggest) => (
                <li
                  key={suggest}
                  className="shadow-sm py-2 px-3 hover:bg-gray-100 w-full"
                >
                  🔍 {suggest}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-8"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          alt="user_logo"
        />
      </div>
    </div>
  );
};

export default Head;
