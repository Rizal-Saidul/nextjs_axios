import axios from 'axios';
import { User2Icon } from 'lucide-react';
import React from 'react'

async function getData() {

    try {
        const { data } = await axios.get('http://localhost:3002/data');
        console.log('berhasil mengambil data')
        return data;
    } catch (error) {
        console.error('get data error', error?.message ?? error);
        return []
    }
}

async function DataView ()  {
    const dataUser = await getData()


  return (
    <div className='overflow-x-auto'>
        <table className='min-w-full border-collapse'>
            <thead>
                <tr className='text-left bg-gray-50 text-gray-600 text-sm'>
                    <th className='py-3 px-4 font-medium'>Photo</th>
                    <th className='py-3 px-4 font-medium'>name</th>
                    <th className='py-3 px-4 font-medium'>mobile</th>
                    <th className='py-3 px-4 font-medium'>email</th>
                    <th className='py-3 px-4 font-medium'>status</th>
                </tr>
            </thead>
            <tbody>
                {dataUser.map((p) => (
                    <tr key={p.id} className='border-t'>
                        <td className='py-3 px-4 text-left'><User2Icon/></td>
                        <td className='py-3 px-4 text-left'>{p.name}</td>
                        <td className='py-3 px-4 text-left'>{p.mobile}</td>
                        <td className='py-3 px-4 text-left'>{p.email}</td>
                        <td className='py-3 px-4 text-left'>{p.status}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default DataView