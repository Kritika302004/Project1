import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Upload, Loader } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

const categories = ["women", "accessories", "men", "others"];

const CreateProductForm = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const { createProduct, loading } = useProductStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(newProduct);
      setNewProduct({ name: "", description: "", price: "", category: "", image: "" });
    } catch {
      console.log("error creating a product");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      className="bg-amber-50 shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto border border-amber-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-amber-900 font-serif">Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-amber-800">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="mt-1 block w-full bg-white border border-amber-300 rounded-md shadow-sm py-2 px-3 
                      text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-amber-800">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            rows="3"
            className="mt-1 block w-full bg-white border border-amber-300 rounded-md shadow-sm py-2 px-3 
                      text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-amber-800">
            Price (INR)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            step="0.01"
            className="mt-1 block w-full bg-white border border-amber-300 rounded-md shadow-sm py-2 px-3 
                      text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-amber-800">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            className="mt-1 block w-full bg-white border border-amber-300 rounded-md shadow-sm py-2 px-3 
                      text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-1 flex items-center">
          <input type="file" id="image" className="sr-only" accept="image/*" onChange={handleImageChange} />
          <label
            htmlFor="image"
            className="cursor-pointer bg-amber-100 py-2 px-3 border border-amber-300 rounded-md shadow-sm 
                      text-sm leading-4 font-medium text-amber-800 hover:bg-amber-200 focus:outline-none 
                      focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 flex items-center"
          >
            <Upload className="h-5 w-5 mr-2 text-amber-600" />
            Upload Image
          </label>
          {newProduct.image && (
            <span className="ml-3 text-sm text-amber-600">Image selected</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
                    shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 
                    disabled:opacity-50 mt-6"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader className="mr-2 h-5 w-5 animate-spin" />
              Creating...
            </>
          ) : (
            <>
              <PlusCircle className="mr-2 h-5 w-5" />
              Add Product
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default CreateProductForm;