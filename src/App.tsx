import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import ProtectedRoute from "./routes/protectedRoute/ProtectedRoute";
import Home from "./pages/home/Home";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/*" element={<Home />}></Route>
          {/* Protected Routes */}
          <Route path="/emptypage" element={<div>You are connected!</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
