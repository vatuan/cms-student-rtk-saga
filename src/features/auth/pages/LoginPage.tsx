import { useAppDispatch } from "app/hooks";
import React from "react";
import { authActions } from "../authSlice";

export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  const dispatch = useAppDispatch();
  const handleLoginClick = () => {
    dispatch(
      authActions.login({
        userName: "tuanva",
        passWord: "123456",
      }),
    );
  };

  return (
    <div className="flex justify-center items-center h-full min-h-screen">
      <div className="login-container p-10 bg-gray-100 rounded-xl shadow-lg">
        <h1 className="text-primary mb-4 font-body-bold text-xl">Student Management</h1>
        <button
          onClick={handleLoginClick}
          className="bg-primary w-full rounded-md p-2 text-white font-bold uppercase tracking-wide"
        >
          Fake Login
        </button>
      </div>
    </div>
  );
}
