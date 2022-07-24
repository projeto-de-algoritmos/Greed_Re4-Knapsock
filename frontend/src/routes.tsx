import { 
  BrowserRouter,
  Route,
  Routes as Switch,
} from "react-router-dom";

import { HomePage } from "./pages/HomePage";

export function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="" element={<HomePage />} />
      </Switch>
    </BrowserRouter>
  );
}