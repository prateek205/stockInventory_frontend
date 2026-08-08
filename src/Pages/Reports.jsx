// import React from "react";
// import {
//   FaChartLine,
//   FaShoppingCart,
//   FaBoxes,
//   FaRupeeSign,
//   FaFilePdf,
//   FaFileExcel,
//   FaDownload,
// } from "react-icons/fa";

// const Reports = () => {
//   const reports = [
//     {
//       id: "REP-1001",
//       report: "Monthly Sales Report",
//       generated: "06 Aug 2026",
//       type: "Sales",
//       status: "Completed",
//     },
//     {
//       id: "REP-1002",
//       report: "Purchase Summary",
//       generated: "05 Aug 2026",
//       type: "Purchase",
//       status: "Completed",
//     },
//     {
//       id: "REP-1003",
//       report: "Inventory Report",
//       generated: "04 Aug 2026",
//       type: "Inventory",
//       status: "Completed",
//     },
//   ];

//   return (
//     <div className="space-y-6">
//       {/* Header */}

//       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800">Reports</h1>

//           <p className="text-gray-500 mt-1">
//             View business insights and export reports.
//           </p>
//         </div>

//         <div className="flex gap-3">
//           <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg">
//             <FaFilePdf />
//             Export PDF
//           </button>

//           <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg">
//             <FaFileExcel />
//             Export Excel
//           </button>
//         </div>
//       </div>

//       {/* Summary Cards */}

//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
//         <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
//           <div>
//             <p className="text-gray-500">Revenue</p>
//             <h2 className="text-3xl font-bold">₹15.2L</h2>
//           </div>

//           <FaRupeeSign className="text-4xl text-green-500" />
//         </div>

//         <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
//           <div>
//             <p className="text-gray-500">Sales</p>
//             <h2 className="text-3xl font-bold">520</h2>
//           </div>

//           <FaShoppingCart className="text-4xl text-blue-500" />
//         </div>

//         <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
//           <div>
//             <p className="text-gray-500">Purchases</p>
//             <h2 className="text-3xl font-bold">312</h2>
//           </div>

//           <FaBoxes className="text-4xl text-orange-500" />
//         </div>

//         <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
//           <div>
//             <p className="text-gray-500">Profit</p>
//             <h2 className="text-3xl font-bold">₹4.8L</h2>
//           </div>

//           <FaChartLine className="text-4xl text-purple-500" />
//         </div>
//       </div>

//       {/* Filters */}

//       <div className="bg-white rounded-xl shadow p-4 flex flex-wrap gap-4 justify-between">
//         <div className="flex gap-3 flex-wrap">
//           <input type="date" className="border rounded-lg px-4 py-3" />

//           <input type="date" className="border rounded-lg px-4 py-3" />

//           <select className="border rounded-lg px-4 py-3">
//             <option>All Reports</option>
//             <option>Sales</option>
//             <option>Purchase</option>
//             <option>Inventory</option>
//           </select>
//         </div>

//         <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg">
//           <FaDownload />
//           Generate Report
//         </button>
//       </div>

//       {/* Charts */}

//       <div className="grid lg:grid-cols-2 gap-6">
//         <div className="bg-white rounded-xl shadow p-6">
//           <h2 className="text-xl font-semibold mb-5">Sales Report</h2>

//           <div className="h-72 border-2 border-dashed rounded-xl flex items-center justify-center text-gray-400">
//             📈 Sales Chart
//           </div>
//         </div>

//         <div className="bg-white rounded-xl shadow p-6">
//           <h2 className="text-xl font-semibold mb-5">Purchase Report</h2>

//           <div className="h-72 border-2 border-dashed rounded-xl flex items-center justify-center text-gray-400">
//             📊 Purchase Chart
//           </div>
//         </div>
//       </div>

//       {/* Bottom Widgets */}

//       <div className="grid lg:grid-cols-2 gap-6">
//         <div className="bg-white rounded-xl shadow p-6">
//           <h2 className="text-xl font-semibold mb-4">Top Selling Products</h2>

//           <ul className="space-y-3">
//             <li className="flex justify-between border-b pb-2">
//               <span>HP Laptop</span>
//               <span>120 Sold</span>
//             </li>

//             <li className="flex justify-between border-b pb-2">
//               <span>Wireless Mouse</span>
//               <span>95 Sold</span>
//             </li>

//             <li className="flex justify-between border-b pb-2">
//               <span>Keyboard</span>
//               <span>81 Sold</span>
//             </li>
//           </ul>
//         </div>

//         <div className="bg-white rounded-xl shadow p-6">
//           <h2 className="text-xl font-semibold mb-4">Low Stock Report</h2>

//           <ul className="space-y-3">
//             <li className="flex justify-between border-b pb-2">
//               <span>Monitor</span>
//               <span className="text-red-600">3 Left</span>
//             </li>

//             <li className="flex justify-between border-b pb-2">
//               <span>Printer</span>
//               <span className="text-red-600">2 Left</span>
//             </li>

//             <li className="flex justify-between border-b pb-2">
//               <span>SSD</span>
//               <span className="text-red-600">5 Left</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Reports Table */}

//       <div className="bg-white rounded-xl shadow overflow-x-auto">
//         <table className="min-w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-4 text-left">Report ID</th>
//               <th className="px-6 py-4 text-left">Report Name</th>
//               <th className="px-6 py-4 text-left">Generated On</th>
//               <th className="px-6 py-4 text-left">Type</th>
//               <th className="px-6 py-4 text-center">Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {reports.map((report) => (
//               <tr key={report.id} className="border-t hover:bg-gray-50">
//                 <td className="px-6 py-4 font-semibold">{report.id}</td>

//                 <td className="px-6 py-4">{report.report}</td>

//                 <td className="px-6 py-4">{report.generated}</td>

//                 <td className="px-6 py-4">{report.type}</td>

//                 <td className="px-6 py-4 text-center">
//                   <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
//                     {report.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Reports;
