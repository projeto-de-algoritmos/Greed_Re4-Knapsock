import { 
  BrowserRouter,
  Route,
  Routes as Switch,
} from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import { ResultPage } from "./pages/ResultPage";

export function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="" element={<HomePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Switch>
    </BrowserRouter>
  );
}