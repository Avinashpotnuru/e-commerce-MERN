import React from "react";
import { Routes, Route } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Kitchen from "./components/Kitchen";
import MobilePage from "./pages/MobilePage";
import CompPage from "./pages/CompPage";
import WatchPage from "./pages/WatchPage";
import MenPage from "./pages/MenPage";
import WomanPage from "./pages/WomanPage";
import FurniturePage from "./pages/FurniturePage";
import AcPage from "./pages/AcPage";
import KitchenPage from "./pages/KitchenPage";
import MobileSingle from "./singles/MobileSingle";
import UserCart from "./UserCart";
import FridgePage from "./pages/FridgePage";
import ComputerSingle from "./singles/ComputerSingle";
import FurnitureSingle from "./singles/FurnitureSingle";
import KitchenSingle from "./singles/KitchenSingle";
import AcSingle from "./singles/AcSingle";
import MenSingle from "./singles/MenSingle";
import WatchSingle from "./singles/WatchSingle";
import WomanSingle from "./singles/WomanSingle";
import FridgeSingle from "./singles/FridgeSingle";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PriviteRoute";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <LandingPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/kitchen"
          element={
            <PrivateRoute>
              <KitchenPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/mobiles"
          element={
            <PrivateRoute>
              <MobilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/computers"
          element={
            <PrivateRoute>
              <CompPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/watch"
          element={
            <PrivateRoute>
              <WatchPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/fridge"
          element={
            <PrivateRoute>
              <FridgePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/men"
          element={
            <PrivateRoute>
              <MenPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/woman"
          element={
            <PrivateRoute>
              <WomanPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/furniture"
          element={
            <PrivateRoute>
              <FurniturePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/ac"
          element={
            <PrivateRoute>
              <AcPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/mobiles/:id"
          element={
            <PrivateRoute>
              <MobileSingle />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <UserCart />
            </PrivateRoute>
          }
        />
        <Route
          path="/ac/:id"
          element={
            <PrivateRoute>
              <AcSingle />
            </PrivateRoute>
          }
        />
        <Route
          path="/computers/:id"
          element={
            <PrivateRoute>
              <ComputerSingle />
            </PrivateRoute>
          }
        />
        <Route
          path="/furniture/:id"
          element={
            <PrivateRoute>
              <FurnitureSingle />
            </PrivateRoute>
          }
        />
        <Route
          path="/kitchen/:id"
          element={
            <PrivateRoute>
              <KitchenSingle />
            </PrivateRoute>
          }
        />
        <Route
          path="/men/:id"
          element={
            <PrivateRoute>
              <MenSingle />
            </PrivateRoute>
          }
        />
        <Route
          path="/watch/:id"
          element={
            <PrivateRoute>
              <WatchSingle />
            </PrivateRoute>
          }
        />
        <Route
          path="/woman/:id"
          element={
            <PrivateRoute>
              <WomanSingle />
            </PrivateRoute>
          }
        />
        <Route
          path="/fridge/:id"
          element={
            <PrivateRoute>
              <FridgeSingle />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
