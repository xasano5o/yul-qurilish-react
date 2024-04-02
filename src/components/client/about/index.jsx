import React from 'react'

function AboutCom() {
  return (
    <div>
      <div className=' grid-cols-3  gap-2  flex flex-wrap md:justify-center p-[50px]'>
        <div className=''>
          <a href="#" class="block h-[200px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Malaka oshirish bo'limi</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">*Avtomobil yo'l bosh boshqarmasi. </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Texnik nazoratlarni markaziy oshirish.</p>
          </a>
        </div>
        <div className=''>
          <a href="#" class="block h-[200px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ishlab chiqarish bo'limi </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">*Avtomobil yo'llarni  diognostika qilish ishlari.</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">*Avtomobil yo'llarni   pasportlashtirish.</p>
          </a>
        </div>
        <div className=''>
          <a href="#" class="block h-[200px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ekispertiza bo'limi </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">*Mashina-Mexanizm transport xizmati.</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">*Tan narxi kapkullasilasi ekispertiza xulosa.</p>
          </a>
        </div>
      </div>
    </div>

  )
}

export default AboutCom