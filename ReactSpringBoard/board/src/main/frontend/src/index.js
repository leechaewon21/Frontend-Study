import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import './index.css';
import App from './App';
import EnrollMember from "./routes/EnrollMember";
import SearchMember from "./routes/SearchMember";
import ListMember from "./routes/ListMember";
import Login from "./routes/Login"
import Library from "./routes/Library"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/enroll_member" element={<EnrollMember />} />
        <Route path="/search_member" element={<SearchMember />} />
        <Route path="/list_member" element={<ListMember />} />
        <Route path="/login" element={<Login />} />
        <Route path="/library" element={<Library />} />
    </Routes>
  </BrowserRouter>
);