import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./Pages/LoginForm";
import Dashboard from "./Pages/Dashboard";
import Customer from "./Pages/Customer";
import Sidebar from "./Components/Layouts/Sidebar";
import Sales from "./Pages/Sales";
import Purchase from "./Pages/Purchase";
import Product from "./Pages/Product";
import Layout from "./Components/Layouts/Layout";
import Dealer from "./Pages/Dealer";
import Profile from "./Pages/Profile";
import Reports from "./Pages/Reports";
import Inventory from "./Pages/Inventory";
import Form from "./Pages/Forms/Form";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="forms" element={<Form />} />
          <Route path="customer" element={<Customer />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="sales" element={<Sales />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="product" element={<Product />} />
          <Route path="dealer" element={<Dealer />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="report" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
