import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./layouts/base-layout/base-layout.component.tsx";
import { Home } from "./pages";
import { NotFound } from "./components/notfound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
