import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import SidebarLayout from "./layout/SidebarLayout";
import Candidates from "./pages/candidates";
import UserHandling from "./pages/users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SidebarLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="users" element={<UserHandling />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
