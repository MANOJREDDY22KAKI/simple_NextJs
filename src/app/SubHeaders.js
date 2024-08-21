"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Items } from "../data/items"; // Ensure the correct path

const SubHeaders = () => {
  const [products, setProducts] = useState(Items);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isDialogBoxOpen, setIsDialogBoxOpen] = useState(false);
  const [selectdItem, setSelectedItem] = useState(null);

  const handleFilterMale = () => {
    const filtered = products.filter((item) => item.gender === "Male");
    setFilteredProducts(filtered);
  };

  const handleFilterFemale = () => {
    const filtered = products.filter((item) => item.gender === "Female");
    setFilteredProducts(filtered);
  };

  const handlePriceLTH = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setFilteredProducts(sorted);
  };

  const handlePriceHTL = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setFilteredProducts(sorted);
  };

  const openDialog = (item) => {
    setSelectedItem(item);
    setIsDialogBoxOpen(true);
  };

  const closeDialog = () => {
    setSelectedItem(null);
    setIsDialogBoxOpen(false);
  };

  return (
    <div>
      <div className="flex justify-evenly text-white font-semibold">
        <button onClick={handleFilterMale}>Male</button>
        <button onClick={handleFilterFemale}>Female</button>
        <button onClick={handlePriceLTH}>Price (Low to High)</button>
        <button onClick={handlePriceHTL}>Price (High to Low)</button>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-lg cursor-pointer"
            onClick={() => openDialog(item)}
          >
            <div className="flex flex-col h-full justify-center items-center">
              <Image src={item.url} alt={item.name} width={200} height={200} />
              <h1 className="text-lg font-semibold text-center">{item.name}</h1>
              <h2 className="text-lg font-semibold text-center">
                ₹{item.price}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {isDialogBoxOpen && selectdItem && (
        <div>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex justify-center">
                <Image
                  src={selectdItem.url}
                  alt={selectdItem.name}
                  width={200}
                  height={200}
                >
                
                </Image>
              </div>
              <h1 className="text-lg font-semibold text-center">
                {selectdItem.name}
              </h1>
              <h2 className="text-lg font-semibold text-center">
                ₹{selectdItem.price}
              </h2>
              <p className="text-center font-semibold">{selectdItem.gender}</p>
              <p className="text-center">{selectdItem.description}</p>
              <button  className="bg-red-800 mt-4 p-2 rounded-lg text-white font-semibold"onClick={closeDialog}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubHeaders;
