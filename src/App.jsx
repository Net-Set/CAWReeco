import './App.css';
import CustomNavbar from './page/Navbar';
import Footers from './page/footer';
import InfoBlock from './page/InfoBlock';
import ProductOrderList from './page/ProductOrderList';
function App() {
  return (
   <>
   <CustomNavbar/>
    <InfoBlock/>
    <ProductOrderList/>
   {/* <Footers/> */}
   </>
  );
}

export default App;
