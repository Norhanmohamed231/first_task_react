import Navbar from "./Home/Navbar";
import  Header from "./Home/Header";
import About  from "./Home/About";
import Device  from "./Home/Device";
import Age  from "./Home/Age";
import Download  from "./Home/Download";
import Appsection  from "./Home/Appsection";
import Footer  from "./Home/Footer";
function App(){

  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Device/>
      <Download/>
      <Appsection/>
      <Footer/>
    </div>
  )
}

export default App ;