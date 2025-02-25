import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getUserRepos,
  getForkedRepos,
  getNonForkedRepos,
  getStarredRepos,
} from "../redux/slices/repoSlice";
import { useMediaQuery } from "@mui/material";
import RepoList from "../components/RepoList";
import "../login.css";
import DateRangeToolbar from "../components/DateRangeToolbar";
import gitnalsyisBackground from "../assets/gitnalysis_coder.png";
import MetricsIcon from "../icons/MetricsIcon";
import LinkIcon from "../icons/LinkIcon";
import RepoSearch from "../components/RepoSearch";
import { BsStars } from "react-icons/bs";
import { FaCodeFork } from "react-icons/fa6";
import { VscRepo, VscGitPullRequest } from "react-icons/vsc";

const ReposHome = () => {
  return (
    <div
      className="flex w-full bg-gray-200 overflow-scroll text-white h-2/3 mt-24"
      style={{ backgroundColor: "#111526ff" }}
    >
      <div className="grid w-3/4 grid-cols-2 grid-rows-0 row-span-8 ml-8 text-center z-10">
        <div
          className="flex row-span-1 col-span-2  justify-center items-end pb-8 text-5xl"
          style={{ fontFamily: `'Domine', serif` }}
        >
          <div className="mr-1" style={{ color: "#f3502aff" }}>
            git
          </div>
          <div>nalysis</div>
        </div>
        <div
          className="flex col-start-1 col-span-2 break-words  font-bold items-begin justify-center"
          style={{
            fontFamily: `"Montserrat", sans-erif`,
          }}
        >
          {/* Discover insights and metrics of your favorite GitHub repositories */}
          Discover insights and metrics of your favorite GitHub repositories
        </div>
        <div
          className="flex col-start-1 col-span-2 break-words  font-bold items-center justify-center mb-2"
          style={{
            fontFamily: `"Montserrat", sans-erif`,
          }}
        >
          {/* Discover insights and metrics of your favorite GitHub repositories */}
          <RepoSearch/>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 col-span-2 row-span-4">
          <div
            className="flex col-start-1 col-span-1 row-span-4 text-3xl"
            style={{
              fontFamily: `"Montserrat", sans-erif`,
            }}
          >
            <div className="grid items-center ml-12 mr-10">
              Or, choose from repo categories to:
              <ul className="-mt-10">
                <li className="flex flex-start break-normal mb-2">
                  <MetricsIcon />
                  <div className="text-base text-left ml-4 w-5/6 mb-4">
                    View metrics for owned and starred repos
                  </div>
                </li>
                <li className="flex items-center">
                  <LinkIcon />
                  <div className="text-base text-left ml-4 w-5/6">
                    Link to your forked repos and others you've contributed to
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flex col-start-2 border-white border-2 border-dotted row-start-1 col-span-1 rounded-md h-4/5 shadow-3xl m-2 items-center justify-center font-bold text-white"
            style={{ backgroundColor: "#171C2Eff" }}
          >
            <div className="mr-4">
              <VscRepo style={{ color: "green", fontSize: "24px" }} />
            </div>
            Repos You Own
            <div className="ml-4">
              <VscRepo style={{ color: "green", fontSize: "24px" }} />
            </div>
          </div>
          <div
            className="flex col-start-2 h-4/5 col-span-1  border-white border-2 border-dotted row-start-2 rounded-md shadow-3xl m-2 items-center justify-center font-bold text-white"
            style={{ backgroundColor: "#171C2Eff" }}
          >
            <div className="mr-4">
              <BsStars style={{ color: "yellow", fontSize: "24px" }} />
            </div>
            Your Starred Repos
            <div className="ml-4">
              <BsStars style={{ color: "yellow", fontSize: "24px" }} />
            </div>
          </div>
          <div className="mr-4">
            <BsStars style={{ color: "yellow" }} />
          </div>
          <div
            className="flex col-start-2 h-4/5 row-start-3 border-white border-2 border-dotted rounded-md shadow-3xl m-2 items-center justify-center font-bold text-white"
            style={{ backgroundColor: "#171C2Eff" }}
          >
            <div className="mr-4">
              <FaCodeFork style={{ color: "gray", fontSize: "24px" }} />
            </div>
            Repos You've Forked
            <div className="ml-4">
              <FaCodeFork style={{ color: "gray", fontSize: "24px" }} />
            </div>
          </div>
          <div
            className="flex col-start-2 h-4/5 row-start-4 border-white border-2 border-dotted rounded-md shadow-3xl m-2 items-center justify-center font-bold text-white"
            style={{ backgroundColor: "#171C2Eff" }}
          >
            <div className="mr-4">
              <VscGitPullRequest
                style={{ color: "#cb9ac4ff", fontSize: "24px" }}
              />
            </div>
            Other Repos
            <div className="ml-4">
              <VscGitPullRequest
                style={{ color: "#cb9ac4ff", fontSize: "24px" }}
              />
            </div>
          </div>
          {/* <div>ReposHome3</div>
        <div>ReposHome4</div>
        <div>ReposHome5</div>
        <div>ReposHome6</div>
        <div>ReposHome7</div>
        <div>ReposHome8</div>
        <div>ReposHome9</div>
        <div>ReposHome10</div> */}
        </div>
      </div>
      <div className="flex justify-center items-center -translate-x-14 ">
        <img src={gitnalsyisBackground} />
      </div>
    </div>
  );
};

export default ReposHome;
