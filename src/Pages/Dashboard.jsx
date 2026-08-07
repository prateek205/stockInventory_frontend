import React from "react";
import {
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaRupeeSign,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

const Dashboard = () => {
  const cards = [
    {
      title: "Total Products",
      value: "250",
      icon: <FaBoxOpen />,
      color: "bg-blue-500",
      change: "+12%",
      status: "up",
    },
    {
      title: "Dealers",
      value: "45",
      icon: <FaUsers />,
      color: "bg-green-500",
      change: "+8%",
      status: "up",
    },
    {
      title: "Today's Sales",
      value: "₹28,500",
      icon: <FaShoppingCart />,
      color: "bg-orange-500",
      change: "+15%",
      status: "up",
    },
    {
      title: "Monthly Revenue",
      value: "₹5,42,000",
      icon: <FaRupeeSign />,
      color: "bg-purple-500",
      change: "-2%",
      status: "down",
    },
  ];

  const lowStock = [
    {
      id: 1,
      product: "HP Laptop",
      stock: 4,
    },
    {
      id: 2,
      product: "Logitech Mouse",
      stock: 6,
    },
    {
      id: 3,
      product: "Samsung Monitor",
      stock: 2,
    },
    {
      id: 4,
      product: "Keyboard",
      stock: 8,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen space-y-6">
      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        <p className="text-gray-500">Stock Inventory Overview</p>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500">{card.title}</p>

                <h2 className="text-3xl font-bold mt-2">{card.value}</h2>

                <div
                  className={`flex items-center mt-4 text-sm ${
                    card.status === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {card.status === "up" ? <FaArrowUp /> : <FaArrowDown />}

                  <span className="ml-2">{card.change} this month</span>
                </div>
              </div>

              <div
                className={`${card.color} w-16 h-16 rounded-xl text-white flex items-center justify-center text-2xl`}
              >
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-5">Sales Overview</h2>

          <div className="h-72 flex items-center justify-center border-2 border-dashed rounded-xl text-gray-400">
            📈 Sales Chart
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-5">Purchase Overview</h2>

          <div className="h-72 flex items-center justify-center border-2 border-dashed rounded-xl text-gray-400">
            📊 Purchase Chart
          </div>
        </div>
      </div>

      {/* Bottom Section */}

      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        {/* Low Stock */}

        <div className="lg:col-span-1 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-5">Low Stock Alert</h2>

          {lowStock.map((item) => (
            <div key={item.id} className="flex justify-between py-3 border-b">
              <span>{item.product}</span>

              <span className="text-red-500 font-semibold">
                {item.stock} Left
              </span>
            </div>
          ))}
        </div>

        {/* Recent Sales */}

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-5">Recent Sales</h2>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Customer</th>

                <th className="text-left">Product</th>

                <th className="text-left">Amount</th>

                <th className="text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-4">Rahul</td>
                <td>HP Laptop</td>
                <td>₹65,000</td>
                <td>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                    Paid
                  </span>
                </td>
              </tr>

              <tr className="border-b">
                <td className="py-4">Amit</td>
                <td>Mouse</td>
                <td>₹850</td>
                <td>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td className="py-4">Sneha</td>
                <td>Keyboard</td>
                <td>₹1,200</td>
                <td>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                    Paid
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
