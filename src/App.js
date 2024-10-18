import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./views/login/loginPage";
import SignupPage from "./views/login/signupPage";
import Landing from "./views/landing/Landing";
import Pricing from "./views/pricing/Pricing";
import ConnectBinance from "./views/binance/ConnectBinance";
import Dashboard from "./views/testing-dashboard/Dashboard";
import AuthRoutes from "./views/auth/AuthRoutes";
import AuthProvider from "./views/auth/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/connect-binance" element={<ConnectBinance />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
    // <AuthProvider>
    //   <AuthRoutes />
    // </AuthProvider>
  );
}

export default App;
