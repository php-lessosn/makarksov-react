import "./App.css";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";
import { Route, Switch } from "react-router";
import { Contacts } from "./pages/Contacts";
import { Portfolio } from "./pages/Portfolio";
import { Signup } from "./pages/Signup";
import { Footer } from "./components/footer/Footer";
import { Image } from "./pages/Image";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact={true} path={"/"} component={Home} />
          <Route exact={true} path={"/contacts"} component={Contacts} />
          <Route exact={true} path={"/portfolio"} component={Portfolio} />
          <Route exact={true} path={"/image"} component={Image} />
          <Route exact={true} path={"/signup"} component={Signup} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
