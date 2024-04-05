import React from 'react'

const Footer = () => {
    return (
        <div className='h-[30vh] px-[20px] py-[50px]'>


            <footer class="  h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <div className='flex flex-col'>
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            Manzil:     Namangan shahar, Sa'noat kucha, 19-uy
                        </span>
                        <span class="text-sm text-gray-500  dark:text-gray-400">
                            Telefon deriktor:  <a href="tel:+998976812500">+998976812500</a>
                        </span>
                        <span class="text-sm text-gray-500  dark:text-gray-400">
                            Telefon Bug'alter:  <a href="tel:+998976812500">+998976812500</a>
                        </span>


                    </div>

                    {/* <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul> */}
                </div>
            </footer>

        </div>
    )
}

export default Footer