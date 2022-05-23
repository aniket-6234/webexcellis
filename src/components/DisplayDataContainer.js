import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayDataContainer = () => {

  const [getData, setGetData] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      let { data } = await axios.get(`https://testapi.webexcellis.in/api/users`)
      setGetData(data);
    } 

    fetchUserList();
  }, [])

  const handleDelete = async (id) => {
    await axios.delete(`https://testapi.webexcellis.in/api/users/${id}`)
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-[900px] text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
              Email
              </th>
              <th scope="col" class="px-6 py-3">
              First Name
              </th>
              <th scope="col" class="px-6 py-3">
              Last Name
              </th>
              <th scope="col" class="px-6 py-3">
              ID
              </th>
              <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
              </th>
              <th scope="col" class="px-6 py-3">
              <span class="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {getData.map(data => (
                <tr key={data.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {data.email}
                </th>
                <td class="px-6 py-4">
                {data.firstName}
                </td>
                <td class="px-6 py-4">
                {data.lastName}
                </td>
                <td class="px-6 py-4">
                {data.id}
                </td>
                <td class="px-6 py-4 text-right">
                <Link to={`/form?id=${data.id}&email=${data.email}&firstName=${data.firstName}&lastName=${data.lastName}&password=${data.password}`}>
                <p class="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                </Link> 
                </td>
                <td class="px-6 py-4 text-right"> 
                <p onClick={() => {handleDelete(data.id)}} class="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</p>
                </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DisplayDataContainer