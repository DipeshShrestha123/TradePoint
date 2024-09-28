import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import "../layout/layout.css"
export default function Layout() {
    return (
        <div className="layout">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}