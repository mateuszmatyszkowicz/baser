import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path={"/"} exact render={() => <div>Main</div>} />
    </Router>
  );
}

export default App;
