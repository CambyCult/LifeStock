
import { Login } from "./pages/Login";
import Field from "./pages/Field";
import { SupervisorView } from "./pages/Supervisor";
import "./style/field.css";
import { Protected } from "./Security/Protected";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Items } from "./pages/Items";
import { Checklists } from "./pages/Checklists";

function App() {
  return (
    <main className="App">
      <div></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/field"
            element={
              <Protected>
                <Field />
              </Protected>
            }
          />
          <Route path="/supervisor" element={<SupervisorView />} />
          <Route path="/items" element={<Items />} />
          <Route path="/checklists" element={<Checklists />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;