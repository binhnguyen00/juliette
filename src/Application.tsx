import { Route, Routes } from "react-router-dom";

import { Home, Page } from "@pages";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page" element={<Page />} />
    </Routes>
  );
}