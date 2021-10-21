import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CatsConatiner from "./Components";
import CatsUpload from "./Components/CatsUpload";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <CatsConatiner />
        </Route>
        <Route path="/upload" exact>
          <CatsUpload />
        </Route>
      </Switch>
      <ToastContainer position="bottom-center" />
    </Router>
  );
}

export default App;
