import "@fontsource/montserrat";
import "./styles/App.css";
import Body from "./views/Body";
import Footer from "./views/Footer";
import Header from "./views/Header";
import SwiperComponent from "./views/Swiper";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <SwiperComponent />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
