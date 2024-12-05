import React from "react";
import "./styles/App.css";
import Header from "./pages/Header";
import HotGame from "./pages/HotGame";
import Category from "./pages/Category";
import Footer from "./pages/Footer";
import SwiperComponent from "./pages/Swiper";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <SwiperComponent />
      <HotGame />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
