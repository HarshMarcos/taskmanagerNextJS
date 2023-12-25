"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { RiLoginBoxFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { FaUserPlus } from "react-icons/fa";
import UserContext from "../context/userContext";
import { LuLogOut } from "react-icons/lu";
import { logout } from "@/services/userService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  //   console.log(context.user.name);
  const router = useRouter();

  const doLogout = async () => {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/login");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <nav className="bg-gray-600 h-16 py-2 px-36 flex justify-evenly items-center sticky top-0">
      <div className="brand text-white text-2xl font-semibold">
        <h1>
          <Link href={"/"}>Work Manager</Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-10 text-white">
          {context.user && (
            <>
              <li className="hover:text-blue-200">
                <Link href={"/"}>
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      dataslot="icon"
                      className="w-6 h-6 hover:text"
                    >
                      <title>Home</title>
                      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
                    <span>Home</span>
                  </div>
                </Link>
              </li>
              <li className="hover:text-blue-200">
                <Link href={"/add-task"}>
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      dataslot="icon"
                      className="w-6 h-6"
                    >
                      <title>Add Task</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    <span>Add Tasks</span>
                  </div>
                </Link>
              </li>
              <li className="hover:text-blue-200">
                <Link href={"/show-task"}>
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      dataslot="icon"
                      className="w-6 h-6"
                    >
                      <title>Show Task</title>
                      <path
                        fillRule="evenodd"
                        d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Show Tasks</span>
                  </div>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4 text-white">
          {context.user && (
            <>
              <li className="hover:text-blue-200 px-2">
                <Link href={"/login"}>
                  <IconContext.Provider
                    value={{
                      color: "inherit",
                      className: "global-class-name",
                      size: "2em",
                      title: "Login",
                    }}
                  >
                    <div className="flex flex-col items-center">
                      {/* <RiLoginBoxFill /> */}
                      {/* {context.user.name} */}
                      <span className="font-semibold">
                        Hello Welcome {context.user.name}
                      </span>
                    </div>
                  </IconContext.Provider>
                </Link>
              </li>
              <li className="hover:text-blue-200 px-5">
                {/* <Link href={"/signup"}> */}
                <IconContext.Provider
                  value={{
                    color: "inherit",
                    className: "global-class-name",
                    size: "2em",
                    title: "Login",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <button
                      onClick={doLogout}
                      className="font-semibold cursor-pointer"
                    >
                      <LuLogOut className="cursor-pointer" />
                      Logout
                    </button>
                  </div>
                </IconContext.Provider>
                {/* </Link> */}
              </li>
            </>
          )}
          {!context.user && (
            <>
              <li className="hover:text-blue-200 px-2">
                <Link href={"/login"}>
                  <IconContext.Provider
                    value={{
                      color: "inherit",
                      className: "global-class-name",
                      size: "2em",
                      title: "Login",
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <RiLoginBoxFill />
                      <span className="font-semibold">Login</span>
                    </div>
                  </IconContext.Provider>
                </Link>
              </li>
              <li className="hover:text-blue-200 px-5">
                <Link href={"/signup"}>
                  <IconContext.Provider
                    value={{
                      color: "inherit",
                      className: "global-class-name",
                      size: "2em",
                      title: "Login",
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <FaUserPlus />
                      <span className="font-semibold">Signup</span>
                    </div>
                  </IconContext.Provider>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
