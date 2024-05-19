import React from "react";
import { Outlet } from "react-router-dom";
import "../../App.css";
import "./Main.css";

export default function Main() {
  return (
    <main>
      <div className="main-container">
        <Outlet />
      </div>
    </main>
  );
}