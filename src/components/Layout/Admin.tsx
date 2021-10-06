import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { FiUsers, FiHelpCircle } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiLogOut, BiTask, BiSearch } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { Logo } from "icons";

export function AdminLayout() {
  return (
    <div className="admin-layout relative w-full min-h-screen overflow-hidden">
      <div className="sidebar fixed top-0 left-0 h-full p-3 w-60 bg-dark">
        <div className="logo_content flex items-center justify-between mb-14">
          <div className="logo">
            <div className="logo__name text-white">
              <Logo />
            </div>
          </div>
          <span>
            <VscThreeBars color="#ffffff" size="24" className="cursor-pointer" />
          </span>
        </div>

        <ul className="nav_list">
          <li className="relative transition duration-500 ease-in-out mb-2 hover:bg-primary rounded-md">
            <a href="#" className="flex items-center py-2 px-7">
              <span className="mr-5">
                <FiUsers color="#ffffff" size="24" />
              </span>
              <span className="links_name text-white">Students</span>
            </a>
            <span className="tooltip absolute h-9 w-32 bg-white shadow-md left-32 top-1/2 -translate-y-1/2 flex items-center justify-center">
              Students
            </span>
          </li>
          <li className="relative transition duration-500 ease-in-out mb-2 hover:bg-primary rounded-md">
            <a href="#" className="flex items-center py-2 px-7">
              <span className="mr-5">
                <MdOutlineSpaceDashboard color="#ffffff" size="24" />
              </span>
              <span className="links_name text-white">Dashboard</span>
            </a>
            <span className="tooltip absolute h-9 w-32 bg-white shadow-md left-32 top-1/2 -translate-y-1/2 flex items-center justify-center">
              Dashboard
            </span>
          </li>
        </ul>

        <div className="profile_content absolute bottom-0 left-0 p-2 w-full bg-dark-light">
          <div className="profile flex items-center justify-between">
            <div className="profile_details flex items-center">
              <img
                className="w-11 h-11 rounded-full mr-2"
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />
              <div className="name_job">
                <div className="name text-white">Micheal Vu</div>
                <div className="job text-white text-xs">Frontend Developer</div>
              </div>
            </div>
            <span>
              <BiLogOut color="#ffffff" size="24" className="cursor-pointer" />
            </span>
          </div>
        </div>
      </div>

      <div className="side-contetn absolute h-full width-side-content left-60">
        <div className="header-content flex items-center justify-between px-12 py-5 bg-gray-light">
          <div className="search bg-gray-01 py-3 px-4 rounded-md">
            <div className="search-form flex items-center">
              <span className="mr-4">
                <BiSearch color="#ADB1BD" size="22" />
              </span>
              <input className="border-none outline-none bg-transparent w-80" placeholder="Search student" />
            </div>
          </div>
          <div className="manage-account flex items-center">
            <span className="mr-7">
              <IoNotificationsOutline color="#ADB1BD" size="22" className="cursor-pointer" />
            </span>
            <span className="mr-7">
              <BiTask color="#ADB1BD" size="22" className="cursor-pointer" />
            </span>
            <span className="mr-7">
              <FiHelpCircle color="#ADB1BD" size="22" className="cursor-pointer" />
            </span>
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="w-11 h-11 rounded-full mr-2"
                  src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="avatar"
                />
                <div>
                  <div className="name font-body-bold text-base">Micheal Vu</div>
                  <div className="job text-sm text-gray-02">Frontend Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
