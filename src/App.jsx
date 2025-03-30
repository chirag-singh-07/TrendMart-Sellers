import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import AuthLayout from "./layout/AuthLayout";
import DetailLayout from "./layout/DetailLayout";
import DataProtectionPolicyPage from "./pages/DataProtectionPolicyPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import TermsAndServicePage from "./pages/TermsAndServicePage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import ForgotPasswordSentPage from "./pages/ForgotPasswordSentPage";
import ProfilePage from "./pages/ProfilePage";
import OrdersPage from "./pages/OrdersPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Loader from "./components/others/Loader";
import AuthGuard from "./routes/AuthGuard";
import GuestGuard from "./routes/GuestGuard";
import HomePage from "./pages/HomePage";
import DeshBoradPage from "./pages/DeshBoradPage";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
// import DashboardLayout from "./routes/DashboardLayout";
import DeshboardLayout from "./layout/DeshboardLayout";
import SettingsPage from "./pages/SettingsPage";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // console.log("user", user);
  if (isCheckingAuth) return <Loader />;

  return (
    <Routes>
      {/* 
      Public Routes (Accessible to Everyone) if they not login or if they login then 
        they cannot be access the home page they always go to the deshborad page 
      */}
      <Route path="/" element={<PageLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      {/* Protected Routes (Require Authentication) */}
      <Route element={<AuthGuard />}>
        <Route path="/dashboard" element={<DeshboardLayout />}>
          <Route index element={<DeshBoradPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="orders" element={<OrdersPage />} />
        </Route>
      </Route>

      {/* Guest Routes (Only for Unauthenticated Users) */}
      <Route element={<GuestGuard />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordPage />}
          />
          <Route
            path="/forgot-password-sent"
            element={<ForgotPasswordSentPage />}
          />
        </Route>
      </Route>

      {/* Email Verification (Accessible to authenticated but unverified users) */}
      <Route element={<AuthGuard />}>
        <Route element={<AuthLayout />}>
          <Route path="/verify-email" element={<VerifyEmailPage />} />
        </Route>
      </Route>

      {/* Public Pages (Accessible to Everyone) */}
      <Route element={<DetailLayout />}>
        <Route path="/terms-of-service" element={<TermsAndServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/data-protection-policy"
          element={<DataProtectionPolicyPage />}
        />
      </Route>

      {/* Catch-All Route for 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
