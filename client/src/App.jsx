import { useEffect, useState } from "react";
// import { users } from "./users";
import axios from "axios";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [usersData, setUserData] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0,
  });


  

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/user?page=${usersData.page}&limit=${usersData.limit}`
      );
      console.log(res.data);

      setData(res.data.result);
      // usersData.total = res.data.total;
      // setUserData(Math.ceil(res.data.total / usersData.limit));
      // console.log(Math.ceil(res.data.total/usersData.limit))

      setUserData((prev) => ({
        ...prev,
        total: res.data.totalUsers,
        totalPages: Math.ceil(res.data.totalUsers / usersData.limit),
        // totalPages:res.data.totalPages,
      }));

      // console.log(Math.ceil(res.data.totalUsers/usersData.limit))
    };

    if (query.length === 0 || query.length >= 2) {
      fetchUsers();
    }
  }, [query, usersData.page, usersData.limit]);

  console.log(query);

  const handlePrev = () => {
    if (usersData.page > 1) {
      setUserData((prev) => ({
        ...prev,
        page: prev.page - 1,
      }));
    }
  };

  const handelNext = () => {
    if (usersData.page < usersData.totalPages) {
      setUserData((prev) => ({
        ...prev,
        page: prev.page + 1,
      }));
    }
  };


  const pages=[];

  for(let i=1;i<=usersData.totalPages;i++)
  {
    pages.push(i);
  }
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
      <nav className="bg-blue-500 h-14 md:h-18 flex justify-between items-center px-8 text-xl text-white shadow">
        <h2>Search List</h2>

        <h2 className="mr-20 text-white ">Total Users:- {usersData?.total}</h2>
      </nav>

      <div className="flex flex-col items-center space-y-4 ">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          className="border px-3 py-2 my-10 w-50 md:w-70 lg:w-80 rounded-lg text-gray-800 "
          placeholder="Search..."
        />

        <Table data={data} />



        <div>

          <button>prev</button>

          {
            pages.map((item,index)=>(
              <button
                onClick={()=>{
                  setUserData((prev)=>({
                    ...prev,
                    page:item
                  }))
                }}

                className={`px-4 py-2  border border-gray-400 ${usersData.page==item ? "bg-blue-500 text-white":"bg-gray-50"} `}>{item}</button>
            ))
          }

          <button>next</button>



        </div>

        

        {/* 
        <div className="px-0 py-2">
          <button
            disabled={usersData.page === 1 || usersData.page<1}
            onClick={() => handlePrev()}
            className="bg-blue-500 mx-2 cursor-pointer text-white p-2 rounded-lg"
          >
            {" "}
            prev{" "}
          </button>
          <span>
            {usersData.page} of {usersData.totalPages}
          </span>
          <button
            disabled={usersData.page === usersData.totalPages}
            onClick={() => handelNext()}
            className="bg-blue-500 mx-2 cursor-pointer text-white p-2 rounded-lg"
          >
            next
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default App;
