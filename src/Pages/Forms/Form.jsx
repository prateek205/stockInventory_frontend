import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import DealerForm from "./DealerForm";
import CustomerForm from "./CustomerForm";
import PurchaseForm from "./PurchaseForm";
import SalesForm from "./SalesForm";
import { useLocation } from "react-router-dom";

const Form = () => {
  const [activeForm, setActiveForm] = useState("product");

  const location = useLocation();

  useEffect(() => {
    if (location.state?.activeForm) {
      setActiveForm(location.state.activeForm);
    }
  }, [location.state]);

  const buttons = [
    { id: "product", label: "Product" },
    { id: "dealer", label: "Dealer" },
    { id: "customer", label: "Customer" },
    { id: "purchase", label: "Purchase" },
    { id: "sales", label: "Sales" },
  ];

  const renderForm = () => {
    switch (activeForm) {
      case "product":
        return <ProductForm />;

      case "dealer":
        return <DealerForm />;

      case "customer":
        return <CustomerForm />;

      case "purchase":
        return <PurchaseForm />;

      case "sales":
        return <SalesForm />;

      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen space-y-4">
      <div className="bg-white rounded-xl shadow-lg p-2">
        <h1 className="text-3xl font-bold mb-8">Create New</h1>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4 mb-8">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveForm(button.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300
              ${
                activeForm === button.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>

        {/* Form */}

        <div className="border rounded-xl p-6 bg-gray-50">{renderForm()}</div>
      </div>
    </div>
  );
};

export default Form;
