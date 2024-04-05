import React, { useEffect, useState } from 'react'
import Logo from "../../assets/download (1).png"
import { useParams } from 'react-router-dom';
import { useGetCertifcatIDQuery } from '../../redux/slice/category';
import axios from 'axios';
const VeiwCertifcateUser = () => {
  const [object, setObject] = useState([])
  let { id } = useParams();
  // const { data: object } = useGetCertifcatIDQuery({ id: id })
  useEffect(() => {
    axios.get(`/certificated/detail/${id}/`).then((res) => {
      setObject(res.data)
    })
  }, [])

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
    <div className='flex justify-center items-center h-[100vh]'>
      <div class="w-[50%] m-auto   max-w-[740px]   flex-col  p-6  border-1px bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0 ">
          <img className=' bordder w-[100px]  h-[100px] cursor-pointer' src={Logo} alt="" />
        </div>
        <div>
          <div class="text-xl font-medium  text-center text-black">
            <b class="text-gray-500">O‘zbekiston Respublikasi </b> <br />
            <b class="text-gray-500">Transport Vazirligi</b><br />
            <b class="text-gray-500">Avtomobil yo‘llari qo‘mitasi</b><br />
            <b class="text-gray-500">Namangan yo'l xo'jaligi xodimlari malakasi oshirish o'quv markazi</b> <br />
            <b class="text-gray-500">Malaka oshirganlik haqida</b> <br />
            <h1 className='font-zad'>SERTIFIKAT</h1>
            <br />
            <p class="text-gray-500">Seriya MO № {id || '0'}</p>
            <b class="text-gray-500">Mazkur seritifkat egasi</b>
            <p className='text-gray-500 under-lines uppercase'>{object?.last_name || ''} {object?.first_name || ''} </p>
            <span className='text-sm text-gray-500'>(Tinglovchining F.I.O)</span> <br />
            <p class="text-gray-500">  O'qish davri <span className='line-bottom'>{formattedCreatedAt.slice(0,4)} </span> dan</p>
            <p class="text-gray-500">  <span className='line-bottom'>  {formattedUpdate.slice(0,4)}</span> gacha</p>
            <b class="text-gray-500">Namangan yo'l xo'jaligi xodimlari malakasini oshirish o'quv matkazi</b> <br />
            <span className='text-sm text-gray-500'>(Ta'lim muassasi (tashkilot nomi))</span> <br />
            <p className='text-gray-500 under-lines uppercase'>Ta'lim </p>
            <p className='text-gray-500 under-lines uppercase'>Ta'lim </p>
            <p className='text-gray-500 under-lines uppercase'> Ta'lim </p>
            <span className='text-sm text-gray-500'>(Malaka oshirish kursning nomi)</span> <br />
          </div>
          <div className='flex items-center '>
<div>
<b class="text-gray-500">malaka   oshirish kursinig <span className='under-lines'>{object?.soat}-soatlik</span> o'quv dasturi buyicha malaka oshirdi.</b> <br />

<b class="text-gray-500">Berilgan joy: Namangan shahar</b> <br />

<b class="text-gray-500">Berilgan sana: <span className='under-lines'>{formattedCreatedAt}-yil</span></b> <br />

<b class="text-gray-500">Amal qilish muddati: <span className='under-lines'>{formattedCreatedAt}-yil gacha</span></b>
</div>
            <img className=' text-end' src={object?.qr_image} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VeiwCertifcateUser