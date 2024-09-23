import React from "react";

function aditionalExpensiveTable({ title, cost }) {
  const handleDelete = (event) => {
    const row = event.target.closest("tr");
    if (row) {
      row.remove();
    }
  };

  return (
    <div class="relative w-full">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
          <tr class="border-y-2  dark:border-gray-700">
            <td className="w-4 p-4">
              <div className="flex items-center b-r">
                <button
                  onClick={handleDelete}
                  className="w-6 h-6 text-gray-600 hover:text-red-600 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  delete
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {title}
            </th>
            <td class="px-6 py-4">${cost}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default aditionalExpensiveTable;
