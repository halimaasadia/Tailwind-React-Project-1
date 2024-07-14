import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import Banner from "./component/Banner/Banner";
import Supplier from "./component/Supplier/Supplier";
import Industry from "./component/Industry/Industry";
import Services from "./component/Services/Services";
import Aboutcompany from "./component/aboutcompany/Aboutcompany";
import Biosool from "./component/Biosool/Biosool";
import Blog from "./component/Blog/Blog";
import Map from "./component/Map/Map";
import Footer from "./component/Footer/Footer";
import Copyright from "./component/Copyright/Copyright";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
      <Industry />
      <Services />
      <Aboutcompany />
      <Biosool />
      <Blog />
      <Map />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
