import React from "react";
import FormLayout from "../admin/FormLayout";

export function Home() {
  
  return (
    <>
    <div className="mt-16">
      <section className="grid grid-cols-4 gap-3 ">
        <div className="bg-red-100 rounded-lg shadow-md p-4 flex justify-between items-center">
          <div className="font-bold text-xl mb-2">GA</div>
          <div>
            <p className="text-lg">Graph API</p>
            <p className="text-xl">16 Members</p>
          </div>
        </div>
        <div className="bg-blue-100 rounded-lg shadow-md p-4 flex justify-between items-center">
          <div className="font-bold text-xl mb-2">CD</div>
          <div>
            <p className="text-lg">Component Design</p>
            <p className="text-xl">12 Members</p>
          </div>
        </div>
        <div className="bg-green-100 rounded-lg shadow-md p-4 flex justify-between items-center">
          <div className="font-bold text-xl mb-2">T</div>
          <div>
            <p className="text-lg">Templates</p>
            <p className="text-xl">16 Members</p>
          </div>
        </div>
        <div className="bg-yellow-100 rounded-lg shadow-md p-4 flex justify-between items-center">
          <div className="font-bold text-xl mb-2">RC</div>
          <div className="text-gray-700">
            <p className="text-lg">React Components</p>
            <p className="text-xl">8 Members</p>
          </div>
        </div>
      </section>
      <FormLayout />

    </div>

    </>
  );
}
