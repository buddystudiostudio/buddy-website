import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import ScrollToTop from "./ScrollToTop";

import BuddyEnglishStudioWebsite from "./App.jsx";
import Blog from "./Blog.jsx";
import BlogPost from "./BlogPost.jsx";
import FAQPage from "./FAQPage.jsx";
import PlansPage from "./PlansPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<BuddyEnglishStudioWebsite />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/plans" element={<PlansPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
