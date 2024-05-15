import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

import { ToastContainer } from "react-toastify";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./api/index.js";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ApiProvider api={api}>
            <App />
            <ToastContainer rtl={true} />
        </ApiProvider>
    </React.StrictMode>
);
