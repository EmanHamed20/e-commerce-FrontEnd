import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addUser } from '../../store/slices/adduser'; // Import the addUser action from your user slice


export default function SignUp(){
    const dispatch = useDispatch();
  const { loading, error, newUser } = useSelector((state) => state.user);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(addUser(data)); // Dispatch the addUser action with form data
  };
      return (
        <div className="max-w-md mx-auto m-4 p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            {...register("firstName", { required: true })}
            className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter your first name"
          />
          {errors.firstName && <p className="text-red-500">First name is required.</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            {...register("lastName", { required: true })}
            className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter your last name"
          />
          {errors.lastName && <p className="text-red-500">Last name is required.</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: true })}
            className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500">Email is required.</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password", { required: true })}
            className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500">Password is required.</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            {...register("phoneNumber")}
            className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Sign Up
          </button>
        </div>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {newUser && (
        <p className="text-green-500">
          {newUser.firstName} {newUser.lastName} 
        </p>
      )}
    </div>
      );

}
