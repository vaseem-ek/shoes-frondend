import React from "react";

const Footer = () => {
  return (
    <footer className="  py-4 mt-2">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Shoes Planet</h3>
          <p className="text-sm">
            We are dedicated to providing the best service in the industry. Our
            commitment to quality and excellence sets us apart.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                allProduct
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>123 Main Street</li>
            <li>City, State, ZIP</li>
            <li>
              Email:{" "}
              <a href="" className="hover:underline">
                shoes@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="" className="hover:underline">
                +1 234 567 89
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; 2025 ShoesOnlineShop. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
