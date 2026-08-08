import React from "react";
import {
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaRupeeSign,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

import { useGetDashboardQuery } from "../Services/DashboardApi";

const Dashboard = () => {
  const { data, isLoading, isError, error, refetch } = useGetDashboardQuery();

  // ==============================
  // LOADING
  // ==============================

  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  // ==============================
  // ERROR
  // ==============================

  if (isError) {
    console.error("Dashboard Error:", error);

    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
        <p className="text-lg text-red-500">Failed to load dashboard data.</p>

        <button
          onClick={refetch}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Try Again
        </button>
      </div>
    );
  }

  // ==============================
  // BACKEND DATA
  // ==============================

  const dashboard = data?.dashboard || {};

  const {
    totalProducts = 0,
    totalDealers = 0,
    totalCustomers = 0,

    totalPurchase = 0,
    totalSales = 0,

    totalPurchaseAmount = 0,
    totalSalesAmount = 0,
    totalProfit = 0,

    availableStock = 0,
    lowStockProducts = 0,
    outOfStock = 0,

    todaysPurchaseAmount = 0,
    todaysSalesAmount = 0,

    monthlyPurchase = [],
    monthlySales = [],

    recentPurchase = [],
    recentSales = [],
  } = dashboard;

  // ==============================
  // DASHBOARD CARDS
  // ==============================

  const cards = [
    {
      title: "Total Products",
      value: totalProducts,
      icon: <FaBoxOpen />,
      color: "bg-blue-500",
    },

    {
      title: "Dealers",
      value: totalDealers,
      icon: <FaUsers />,
      color: "bg-green-500",
    },

    {
      title: "Today's Sales",
      value: `₹${Number(todaysSalesAmount).toLocaleString("en-IN")}`,
      icon: <FaShoppingCart />,
      color: "bg-orange-500",
    },

    {
      title: "Total Revenue",
      value: `₹${Number(totalSalesAmount).toLocaleString("en-IN")}`,
      icon: <FaRupeeSign />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="p-6">
      {/* ==============================
          HEADING
      ============================== */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        <p className="text-gray-500 mt-1">Stock Inventory Overview</p>
      </div>

      {/* ==============================
          CARDS
      ============================== */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">{card.title}</p>

                <h2 className="text-3xl font-bold mt-2 text-gray-800">
                  {card.value}
                </h2>
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

      {/* ==============================
          INVENTORY SUMMARY
      ============================== */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Available Stock */}

        <div className="bg-white rounded-2xl shadow-md p-6">
          <p className="text-gray-500">Available Stock</p>

          <h2 className="text-3xl font-bold mt-2">{availableStock}</h2>

          <p className="text-green-600 mt-2">Units available</p>
        </div>

        {/* Low Stock */}

        <div className="bg-white rounded-2xl shadow-md p-6">
          <p className="text-gray-500">Low Stock Products</p>

          <h2 className="text-3xl font-bold mt-2">{lowStockProducts}</h2>

          <p className="text-yellow-600 mt-2">Need attention</p>
        </div>

        {/* Out of Stock */}

        <div className="bg-white rounded-2xl shadow-md p-6">
          <p className="text-gray-500">Out of Stock</p>

          <h2 className="text-3xl font-bold mt-2">{outOfStock}</h2>

          <p className="text-red-600 mt-2">Products unavailable</p>
        </div>
      </div>

      {/* ==============================
          FINANCIAL SUMMARY
      ============================== */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Purchase */}

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Purchase</p>

              <h2 className="text-2xl font-bold mt-2">
                ₹{Number(totalPurchaseAmount).toLocaleString("en-IN")}
              </h2>
            </div>

            <FaArrowDown className="text-red-500 text-2xl" />
          </div>
        </div>

        {/* Sales */}

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Sales</p>

              <h2 className="text-2xl font-bold mt-2">
                ₹{Number(totalSalesAmount).toLocaleString("en-IN")}
              </h2>
            </div>

            <FaArrowUp className="text-green-500 text-2xl" />
          </div>
        </div>

        {/* Profit */}

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Profit</p>

              <h2
                className={`text-2xl font-bold mt-2 ${
                  totalProfit >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                ₹{Number(totalProfit).toLocaleString("en-IN")}
              </h2>
            </div>

            {totalProfit >= 0 ? (
              <FaArrowUp className="text-green-500 text-2xl" />
            ) : (
              <FaArrowDown className="text-red-500 text-2xl" />
            )}
          </div>
        </div>
      </div>

      {/* ==============================
          CHARTS
      ============================== */}

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        {/* Sales Chart */}

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-5">Sales Overview</h2>

          <div className="h-72 flex items-center justify-center border-2 border-dashed rounded-xl text-gray-400">
            <div className="text-center">
              <p className="text-3xl mb-2">📈</p>

              <p>Sales Chart</p>

              <p className="text-sm mt-2">
                {monthlySales.length} months available
              </p>
            </div>
          </div>
        </div>

        {/* Purchase Chart */}

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-5">Purchase Overview</h2>

          <div className="h-72 flex items-center justify-center border-2 border-dashed rounded-xl text-gray-400">
            <div className="text-center">
              <p className="text-3xl mb-2">📊</p>

              <p>Purchase Chart</p>

              <p className="text-sm mt-2">
                {monthlyPurchase.length} months available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==============================
          RECENT SALES
      ============================== */}

      <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
        <h2 className="text-xl font-semibold mb-5">Recent Sales</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Customer</th>

                <th className="text-left py-3">Amount</th>

                <th className="text-left py-3">Date</th>
              </tr>
            </thead>

            <tbody>
              {recentSales.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-gray-500">
                    No recent sales.
                  </td>
                </tr>
              ) : (
                recentSales.map((sale) => (
                  <tr key={sale._id} className="border-b hover:bg-gray-50">
                    <td className="py-4">
                      {sale.customer?.customerName ||
                        sale.customerName ||
                        "Unknown Customer"}
                    </td>

                    <td>
                      ₹{Number(sale.totalAmount || 0).toLocaleString("en-IN")}
                    </td>

                    <td>
                      {sale.createdAt
                        ? new Date(sale.createdAt).toLocaleDateString("en-IN")
                        : "-"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ==============================
          RECENT PURCHASES
      ============================== */}

      <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
        <h2 className="text-xl font-semibold mb-5">Recent Purchases</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Dealer</th>

                <th className="text-left py-3">Amount</th>

                <th className="text-left py-3">Date</th>
              </tr>
            </thead>

            <tbody>
              {recentPurchase.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-gray-500">
                    No recent purchases.
                  </td>
                </tr>
              ) : (
                recentPurchase.map((purchase) => (
                  <tr key={purchase._id} className="border-b hover:bg-gray-50">
                    <td className="py-4">
                      {purchase.dealer?.dealerName ||
                        purchase.dealerName ||
                        "Unknown Dealer"}
                    </td>

                    <td>
                      ₹
                      {Number(purchase.totalAmount || 0).toLocaleString(
                        "en-IN",
                      )}
                    </td>

                    <td>
                      {purchase.createdAt
                        ? new Date(purchase.createdAt).toLocaleDateString(
                            "en-IN",
                          )
                        : "-"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
