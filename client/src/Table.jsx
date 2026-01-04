import React from "react";

export default function Table({ data }) {
  // console.log(data);
  return (
    <table className="w-[80%]">
      <thead className="bg-blue-400  text-white">
        <tr>
          <th className="py-2 text-gray-50">_id</th>
          <th className="py-2 text-gray-50">Name</th>
          <th className="py-2 text-gray-50">Email</th>
          <th className="py-2 text-gray-50">DOB</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr
            key={item._id}
            className={`text-center ${
              index % 2 == 0 ? "bg-white" : "bg-gray-100"
            }`}
          >
            <td className="py-2 text-sm text-green-700">{item._id}</td>
            <td className="py-2">
              {item.name[0].toUpperCase() + item.name.slice(1)}
            </td>
            <td className="py-2">{item.email}</td>
            <td className="py-2">
              {new Date(item.dob).toISOString().split("T")[0]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
