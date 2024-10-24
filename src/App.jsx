import "./App.css";
import Banner from "./Header/Banner";
import Navbar from "./Header/Navbar";

function App() {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
