import { BrowserRouter as Router, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Router>
      <Route path={"/"} exact render={() => <div>Main</div>} />
    </Router>
  );
};
