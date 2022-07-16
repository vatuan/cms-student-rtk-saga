import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { FiUsers, FiHelpCircle } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiLogOut, BiTask, BiSearch } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { Logo, LogoCollapse } from "icons";
import useToggle from "hooks/use-toogle";
import { ToolTip } from "components/Common";
import { useAppDispatch } from "app/hooks";
import { authActions } from "features/auth/authSlice";
import { Switch, Route, NavLink } from "react-router-dom";
import DashboardPage from "features/dashboard/index";
import StudentPage from "features/student";

export function AdminLayout() {
  const [collapsed, setCollapsed] = useToggle();
  const dispatch = useAppDispatch();
  const menuList = [
    {
      title: "Students",
      icon: <FiUsers size="22" color="#ffffff" />,
      path: "/admin/students",
    },
    {
      title: "Dashboard",
      icon: <MdOutlineSpaceDashboard size="22" color="#ffffff" />,
      path: "/admin/dashboard",
    },
  ];

  return (
    <div className="admin-layout relative w-full min-h-screen overflow-hidden">
      <div className={`sidebar fixed top-0 left-0 h-full p-3 bg-dark w-60 transition-all ${collapsed && "w-20"}`}>
        <div className="logo_content flex items-center justify-center my-12">
          <div className="logo">{collapsed ? <LogoCollapse /> : <Logo />}</div>
        </div>

        <ul className="nav_list">
          {menuList.map((item, index) => {
            return (
              <li
                key={index}
                className="relative transition duration-500 ease-in-out mb-2 hover:bg-primary rounded-md group"
              >
                <NavLink to={item.path} activeClassName="active">
                  <a href="#" className={`flex items-center py-2 px-7 ${collapsed && "justify-center"}`}>
                    <span className={`${collapsed ? "mr-0" : "mr-5"}`}>{item.icon}</span>
                    {!collapsed && <span className="text-white">{item.title}</span>}
                  </a>
                  <ToolTip title={item.title} isCollapsed={collapsed} />
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="profile_content absolute bottom-0 left-0 p-2 w-full bg-dark-light">
          <div className={`profile flex items-center ${collapsed ? "justify-center" : "justify-between"}`}>
            {!collapsed && (
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
            )}
            <span onClick={() => dispatch(authActions.logout())}>
              <BiLogOut color="#ffffff" size="24" className="cursor-pointer" />
            </span>
          </div>
        </div>
      </div>

      <div
        className={`side-contetn absolute h-full width-side-content left-60 transition-all ${
          collapsed && "left-20 width-side-content--collapsed"
        } overflow-y-scroll`}
      >
        <div className="header-content flex items-center justify-between px-12 py-5 bg-gray-light">
          <div className="flex items-center">
            <span onClick={setCollapsed} className="mr-7">
              <VscThreeBars color="#555555" size="24" className="cursor-pointer" />
            </span>
            <div className="search bg-gray-01 py-3 px-4 rounded-md">
              <div className="search-form flex items-center">
                <span className="mr-4">
                  <BiSearch color="#ADB1BD" size="22" />
                </span>
                <input className="border-none outline-none bg-transparent w-80" placeholder="Search student" />
              </div>
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

        <div className="p-9 relative">
          <Switch>
            <Route path="/admin/dashboard">
              <DashboardPage />
            </Route>
            <Route path="/admin/students">
              <StudentPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
