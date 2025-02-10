import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { listShoe } from "../../services/All_Api";

function AllProduct() {
  const [color, setColor] = useState([]);
  const [gender, setGender] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false); 

  const toggleColor = (e) => {
    const value = e.target.value;
    setColor((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleGender = (e) => {
    const value = e.target.value;
    setGender((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };
  useEffect(() => {
    let filtered = products.slice();

    if (color.length > 0) {
      filtered = filtered.filter((item) => color.includes(item.color));
    }

    if (gender.length > 0) {
      filtered = filtered.filter((item) => gender.includes(item.gender));
    }

    setFilteredProducts(filtered);
  }, [color, gender, products]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await listShoe();
    if (res.data?.result) {
      setProducts(res.data.result);
      setFilteredProducts(res.data.result);
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-4">
        <button
          className="md:hidden  text-greem-900 border shadow-yellow-600 shadow px-4 py-2 rounded-md mb-4"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>

        <div className="grid md:grid-cols-[250px_1fr] gap-4">
          <div
            className={`md:block bg-white shadow-md p-4 rounded-md transition-all ${
              showFilters ? "block" : "hidden"
            } md:static fixed top-0 left-0 w-full md:w-auto h-full md:h-auto bg-gray-100 md:bg-white p-6 md:p-4 z-50`}
          >
            <p className="text-xl font-bold cursor-pointer hover:text-blue-500 transition">
              Colors:
            </p>
            <div className="flex flex-col gap-2 mt-2">
              {["black", "white", "blue"].map((c) => (
                <label key={c} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" value={c} onChange={toggleColor} />
                  {c}
                </label>
              ))}
            </div>

            <p className="text-xl font-bold cursor-pointer hover:text-blue-500 transition mt-4">
              Gender:
            </p>
            <div className="flex flex-col gap-2 mt-2">
              {["men", "women", "kids", "unisex"].map((g) => (
                <label key={g} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" value={g} onChange={toggleGender} />
                  {g}
                </label>
              ))}
            </div>

            <button
              className="md:hidden mt-4 border shadow-amber-500 shadow-sm text-red-900 px-4 py-2 rounded-md"
              onClick={() => setShowFilters(false)}
            >
              Close
            </button>
          </div>

          {/* Right Products Section */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => 
              <Card key={item.id} item={item} />
            )
            ) : (
              <h2 className="text-red-600 text-2xl col-span-full text-center">
                No products available
              </h2>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AllProduct;
