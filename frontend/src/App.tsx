import { type FC } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Create from "./pages/create";
import Detail from "./pages/detail";
const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container flex-1 my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/create" element={<Create />} />
            <Route path="/places/:id" element={<Detail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
