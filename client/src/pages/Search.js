import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  return (
    <div className="pt-20 h-screen">
      <div className="px-4">
        <input
          type="text"
          placeholder="Search store"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full focus:outline-none p-4 text-lg"
        />
      </div>

      {search && (
        <div className="flex flex-col md:flex-row md:items-center md:gap-5">
          <div className="flex-1 px-4 md:p-4">
            <p className="p-4 md:text-xl">Products</p>
            <hr />
            <p className="py-8 px-4 text-sm text-gray-600">
              No results were found
            </p>
          </div>
          <div className="flex-2 px-4 md:p-4">
            <p className="p-4 md:text-xl">Articles</p>
            <hr />
            <p className="py-8 px-4 text-sm text-gray-600">
              No results were found
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
