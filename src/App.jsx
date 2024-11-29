import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import MyMovies from "./components/Mymovies";
import MyMovie3 from "./components/MyMovie3";
import MyMovie2 from "./components/MyMovie2";

function App() {
  return (
    <>
      <MyNav />
      <MyHeader />

      <MyMovies />
      <MyMovie2 />
      <MyMovie3/>

      <MyFooter />
    </>
  );
}

export default App;
