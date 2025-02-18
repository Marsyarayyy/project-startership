import React from 'react'
import Button from '../component/Button'

export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black ">
        <div className=" outline-[#4CAF4F] outline outline-1 p-8 shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Us</h2>
            <form action="" method="">
                <div className="mb-4">
                    <label  className="block text-[#4CAF4F] text-sm font-bold mb-2">Nama Lengkap</label>
                    <input type="text" id="nama" name="nama" required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Masukkan nama lengkap"/>
                </div>

                <div className="mb-4">
                    <label className="block text-[#4CAF4F] text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" required
                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Masukkan email"/>
                </div>
                
                <div className="mb-5">
                    <label className="block text-[#4CAF4F] text-sm font-bold mb-2">Pesan</label>
                    <textarea name="message" id="message" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Masukkan email"></textarea>
                       
                </div>
                

                <Button>Kirim</Button>
            </form>
        </div>
    </div>    
  )
}
