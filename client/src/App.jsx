import { useEffect, useState } from "react";
import { users } from "./users";
import axios from 'axios'
import Table from "./Table";

function App() {


  const [query,setQuery]=useState("");
  const [data,setData]=useState([])
  useEffect(()=>{

    const fetchUsers= async()=>{
      const res = await axios.get(`http://localhost:5000?q=${query}`)
      console.log(res)

      setData(res.data)

    }

    if(query.length===0 || query.length>=2 )
    {
       fetchUsers();
    }
    
  },[query])





  // const [count, setCount] = useState(0);

  // const [query, setQuery] = useState("");

  // const keys = ["first_name", "last_name", "email"];

  // console.log(query);
  // console.log(
  //   users.filter((user) => user.first_name.toLowerCase().includes("sh"))
  // );

  // this is second way

  //   The some() method checks if any array elements pass a test (provided as a callback function).
  // The some() method executes the callback function once for each array element.
  // The some() method returns true (and stops) if the function returns true for one of the array elements.

    // const search = (data) => {
    //   return data.filter((item) =>
    //     keys.some((key) => item[key].toLowerCase().includes(query))
    //   );
    // };





  // this is not first way to start searching

  // const search = (data) => {
  //   return data.filter(
  //     (item) =>
  //       item.first_name.toLowerCase().includes(query) ||
  //       item.last_name.toLowerCase().includes(query) ||
  //       item.email.toLowerCase().includes(query)
  //   );
  // };

  return (
    <div>
      <nav className="bg-blue-500 h-14 md:h-18 flex items-center px-8 text-xl text-white shadow">
        <h2>Search List</h2>
      </nav>

      <div className="flex flex-col items-center space-y-4 ">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          className="border px-3 py-2 my-10 w-50 md:w-70 lg:w-80 rounded-lg text-gray-800 "
          placeholder="Search..."
        />

        <Table data={data} />
      </div>
    </div>
  );
}

export default App;

