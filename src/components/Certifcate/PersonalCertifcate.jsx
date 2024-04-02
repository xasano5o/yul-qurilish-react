import React, { useState } from "react";
// import Modal from "../../generic/Modal";
import { AiOutlineEye } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { useGetCertifcatIDQuery } from "../../redux/slice/certifcat";
import { useParams } from "react-router-dom";

export default function PersonalCertifcate() {
  let { id } = useParams();
 const {data:object} =  useGetCertifcatIDQuery({id:id})

 const formatCreatedAt = (isoString) => {
  const date = new Date(isoString);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };
  return date.toLocaleString('uz-UZ', options);
};

let formattedCreatedAt = formatCreatedAt(object?.created_at);
var formattedUpdate = formatCreatedAt(object?.updated_at);



   return (
    <div>

          <div className="w-full p-4">
            <div className="flex w-full h-full md:items-stretch md:flex-row sm:flex-col sm:items-center sx:flex-col">
              <div className="md:w-1/3 sm:w-full sx:w-full p-2 h-full">
                {/* Left column for avatar, etc. */}
                <div className="text-gray-900 rounded-lg shadow-lg border p-4 flex items-center flex-col justify-center">
                    <div className="w-40 h-40 rounded-full border bg-gray-200 flex justify-center items-center">
                      <FaUserTie className="text-7xl text-primary" />
                    </div>
                  <h2 className="mt-4 text-center  font-bold truncate">
                    {object?.first_name}
                  </h2>
                  <h2 className="mt-1.5 text-center font-bold truncate">
                    {object?.last_name}
                  </h2>
                </div>
              </div>
              <div className="d:w-2/3 text-gray-900 sm:w-full sx:w-full p-2 h-full">
                <div className=" rounded-lg shadow-lg border p-4">
                  <h2 className="text-xl mb-2">Barcha malumotlar</h2>
                  <p>
                    {/* <strong>Foydalanuvchi nomi:</strong> {object.user.username} */}
                  </p>
                  <p>
                    <strong>Ismi:</strong> {object?.first_name}
                  </p>
                  <p>
                    <strong>Familiyasi:</strong> {object?.last_name}
                  </p>
                  <p>
                    <strong>Otasini Ismi:</strong> {object?.surname}
                  </p>
                  <p>
                    <strong>Ishlaydigan Korxona nomi:</strong> {object?.company}
                  </p>
                  <p>
                    <strong>Tug'ulgan kuni:</strong> {object?.birthday}
                  </p>
                  <p>
                    <strong>Yul sohasida qachondan ishlaydi:</strong> {object?.years}
                  </p>
                  <p>
                    <strong>Lavozimga tayinlangan yili va lavozimi:</strong> {object?.position}
                  </p>
                  <p>
                    <strong>Tugatgan O'quv muassasini nomi:</strong> {object?.otm_name}
                  </p>
                  <p>
                    <strong>Telefon raqami:</strong> {object?.phone}
                  </p>
                  <p>
                    <strong>O'qishga Qushilgan Vaqti</strong> {formattedCreatedAt}
                  </p>
                  <p>
                    <strong>Yashash manzili:</strong> {object?.address}
                  </p>
                  <p>
                    <strong>Yunalish:</strong> {object?.yonalish}
                  </p>
                  <p>
                    <strong>Yunalish Umumiy soati:</strong> {object?.soat}
                  </p>
                  <p>
                    <strong>Sertifcate berilgan kun:</strong> {formattedUpdate}
                  </p>
                 
                  <br />
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}
