import React from "react";

export default function Table({ data }) {
  // console.log(data);
  return (
    <table className="w-[80%]">
      <thead className="bg-blue-400  text-white">
        <tr>
          <th className="py-2 text-gray-50">Name</th>
          <th className="py-2 text-gray-50">Surname</th>
          <th className="py-2 text-gray-50">Email</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className={`text-center ${
              index % 2 == 0 ? "bg-white" : "bg-gray-100"
            }`}
          >
            
            <td className="py-2">{item.first_name}</td>
            <td className="py-2">{item.last_name}</td>
            <td className="py-2">{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}