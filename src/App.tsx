import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthProvider';
import Home from './pages/Home';
import About from './pages/About';
import HarmReduction from './pages/HarmReduction';
import Medicines from './pages/Medicines';
import MedicineDetail from './pages/MedicineDetail';
import MDMA from './pages/medicines/MDMA';
import Login from './pages/Login';
import AuthCallback from './pages/AuthCallback';
import Consent from './pages/Consent';
import Dashboard from './pages/members/Dashboard';
import PrepProtocols from './pages/members/PrepProtocols';
import ScreeningTools from './pages/members/ScreeningTools';
import Integration from './pages/members/Integration';
import Resources from './pages/members/Resources';
import ComingSoon from './pages/ComingSoon';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/harm-reduction" element={<HarmReduction />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/medicines/mdma" element={<MDMA />} />
            <Route path="/medicines/:slug" element={<MedicineDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth/callback" element={<AuthCallback />} />

            {/* Gated */}
            <Route
              path="/consent"
              element={
                <ProtectedRoute>
                  <Consent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/members"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/members/prep-protocols"
              element={
                <ProtectedRoute>
                  <PrepProtocols />
                </ProtectedRoute>
              }
            />
            <Route
              path="/members/screening-tools"
              element={
                <ProtectedRoute>
                  <ScreeningTools />
                </ProtectedRoute>
              }
            />
            <Route
              path="/members/integration"
              element={
                <ProtectedRoute>
                  <Integration />
                </ProtectedRoute>
              }
            />
            <Route
              path="/members/resources"
              element={
                <ProtectedRoute>
                  <Resources />
                </ProtectedRoute>
              }
            />

            {/* Catch-all */}
            <Route path="*" element={<ComingSoon title="Page not found" />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}
