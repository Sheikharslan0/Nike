import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import New from './Components/New/New'
import Footer from './Components/Footer/Footer'
import Shoe from './Components/Shoe/Shoe'
import Likes from './Components/Likes/Likes'
import Bag from './Components/Bag/Bag'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Home/>
      <New/>
    </div>
  );
};

const Cart = () => {
  return (
    <div>
      <Shoe/>
      <Likes/>
    </div>
  );
}
const Bags=() => {
  return (
    <div>
      <Bag/>
      <Likes/>
    </div>
  );
}

const App=()=> {
  return (
    <BrowserRouter>
    <Header/>
        <Navbar/>
    <Routes >
      <Route path="/" element={<MainLayout />} />
      <Route path="/Shoe/:id" element={<Cart/>} />
      <Route path="/Bag/:id" element={<Bags/>} />
    </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App