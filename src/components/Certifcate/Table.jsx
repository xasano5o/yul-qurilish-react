import React, { useEffect, useState } from 'react';
import { useGetCertifcatQuery } from '../../redux/slice/certifcat';
import { Link } from 'react-router-dom';
import DeleteCertifcate from './DeleteStudents';

function CertifcateCom() {
  const { data, isLoading } = useGetCertifcatQuery();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!data) return;
    // Ma'lumotlarni qidirish
    const filteredData = data.filter(user =>
      user?.first_name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      user?.last_name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      user?.phone?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
    setFilteredData(filteredData);
  }, [searchTerm, data]);

  return (
    <div>
      <div className="w-full overflow-auto h-[80vh] p-4 contet">
        <div className="flex justify-between items-center">
          <div>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Qidirish..."
              type="text"
              className="w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <br />
        <div className="">
          <table className="w-full p-1 m-1 d2 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-4">
                  Qr-code
                </th>
                <th scope="col" className="px-4 py-4">
                  Ismi
                </th>
                <th scope="col" className="px-4 py-3">
                  Familyasi
                </th>
                <th scope="col" className="px-4 py-3 whitespace-nowrap">
                  Otasini Ismi
                </th>
                <th scope="col" className="px-4 py-3 whitespace-nowrap">
                  Telefon raqami
                </th>
                <th scope="col" className="px-4 py-3 whitespace-nowrap">
                  Yashash Manzili
                </th>
                <th scope="col" className="px-4 py-3 whitespace-nowrap">
                  Tug'ulgan kun yil
                </th>
                <th scope="col" className="px-4 py-3 whitespace-nowrap">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="p-[50px] max-w-full overflow-x-auto overflow-y-auto">
              {isLoading ? (
                'Malumot Yuklanmoqda'
              ) : (
                filteredData.map((value) => (
                  <tr key={value.id} className="border-b dark:border-gray-700 cursor-pointer">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <Link to={`/admin/personal/${value.id}`}>
                        <img className="w-[100px] h-[100px]" src={value?.qr_image} alt="" />
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <Link to={`/admin/personal/${value.id}`}>{value?.first_name}</Link>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{value.last_name}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{value.surname}</td>
                    <td className="px-4 py-3 max-w-[12rem] truncate whitespace-nowrap">{value.phone}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{value.address}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{value.birthday}</td>
                    <td className="px-4 py-3 flex items-center justify-end">
                      <td className="flex items-center gap-4">
                        <DeleteCertifcate ID={value.id} />
                      </td>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CertifcateCom;
