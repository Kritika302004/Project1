import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import AnalyticsTab from "../components/AnalyticsTab";
import CreateProductForm from "../components/CreateProductForm";
import ProductsList from "../components/ProductsList";
import { useProductStore } from "../stores/useProductStore";

const tabs = [
  { id: "create", label: "Add Product", icon: PlusCircle },
  { id: "products", label: "Product List", icon: ShoppingBasket },
  { id: "analytics", label: "Report", icon: BarChart },
];

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("create");
  const { fetchAllProducts } = useProductStore();

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <div className="min-h-screen bg-amber-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-700 text-gray-50 p-4 shadow-lg">
        <motion.h1 
          className="text-2xl font-bold mb-10 mt-4 pl-3 font-serif"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Admin Dashboard
        </motion.h1>

        <nav className="space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition
                  ${
                    activeTab === tab.id
                      ? "bg-gray-600 text-white shadow-md"
                      : "text-gray-200 hover:bg-gray-600 hover:text-white"
                  }`}
              >
                <Icon className="h-5 w-5" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <motion.div
          className="bg-white shadow rounded-xl p-6 border border-gray-200 min-h-[calc(100vh-4rem)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "create" && <CreateProductForm />}
          {activeTab === "products" && <ProductsList />}
          {activeTab === "analytics" && <AnalyticsTab />}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPage;