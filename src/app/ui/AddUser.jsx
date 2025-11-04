'use client'
import axios from 'axios';
import React, { useState } from 'react'

const AddUser = () => {

    const initialState = {
        name: "",
        mobile: "",
        email: "",
        status: "active",
    };

    const [formData, setFormData] = useState(initialState);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        try {
            const res = await axios.post('http://localhost:3002/data', formData, {
                headers: { 'Content-Type': 'application/json' },
            });

            setMessage('User berhasil ditambahkan');
            setFormData(initialState);
            } catch (error) {
            console.error('AddUser error:', error?.message ?? error);
            setMessage('Gagal menambahkan user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>
            <form onSubmit={handleSubmit} className='bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-4'>
            <h2 className='text-2xl text-center font-semibold text-gray-600'>add user form</h2>

            <div>
                <label className='block text-gray-500 font-medium mb-1' htmlFor='name'>nama</label>
                <input
                type="text"
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full border border-gray-400 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-200'
                placeholder='enter full name' />
            </div>

            <div>
                <label className='block text-gray-700 font-medium mb-1' htmlFor='mobile'>mobile</label>
                <input
                type="text"
                id='mobile'
                name='mobile'
                value={formData.mobile}
                onChange={handleChange}
                required
                className='w-full border border-gray-500 rounded-xl  px-4 py-2 focus:ring-2 focus:ring-blue-700'
                placeholder='+12345678' />
            </div>

            <div>
                <label htmlFor='email' className='block text-gray-800 font-medium mb-1'>email</label>
                <input
                type="email"
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full border border-gray-700 rounded-2xl px-4 py-2 focus:ring-2 focus:ring-blue-800'
                placeholder='1234@example.com' />
            </div>

            <div>
                <label htmlFor='status' className='block text-gray-600 font-medium mb-1'>status</label>
                <select 
                name="status"
                id="status"
                onChange={handleChange}
                value={formData.status}
                className='w-full border border-amber-800  rounded-2xl px-4 py-2 focus:ring-2 focus:ring-blue-500'>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                </select>
            </div>

            <button type='submit' disabled={loading} className='w-full border border-blue-700 px-4 py-2 focus:ring-2 focus:ring-blue-800 rounded-2xl'>
                {loading ? 'menambahkan...' : 'tambahkan user'}
            </button>

            {message && (
                <p className='text-center text-sm text-gray-600'>{message}</p>
            )}
        </form>
    </div>
  )
}

export default AddUser;