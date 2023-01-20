import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TherapistAuth }  from '../AuthContext';

function TherapistCreateAccount() {

  const [inputValues, setInputValue] = useState({
      username: "",
      email: "",
      city: "",
      licensenumber: "",
      password: "",
      confirmPassword: "",
  });

  const [validation, setValidation] = useState({
      username: "",
      email: "",
      city: "",
      licensenumber: "",
      password: "",
      confirmPassword: "",
  });

  // handle submit
  const handleChange = (e) => {
      setInputValue({ ...inputValues, [e.target.name]: e.target.value });
  }

  const checkValidation = () => {

      const errors = JSON.parse(JSON.stringify(validation));

      // User validation
      const usernameCondition = "^[A-Za-z]{4,18}$"
      if (!inputValues.username.trim()) {
          errors.username = "Please Write User Name";
      } else if (inputValues.username.length < 3 || inputValues.username.length > 16) {
          errors.username = "User Name is between 4-18 characters";
      } else if (!inputValues.username.match(usernameCondition)) {
          errors.username = "User Name should be letters";
      } else {
          errors.username = "";
      }

      // City validation
      const cityCondition = "^[A-Za-z]{4,16}$"
      if (!inputValues.city.trim()) {
          errors.city = "Please write City";
      } else if (!inputValues.city.match(cityCondition)) {
          errors.city = "City is 4-16 characters and only consist of letters";
      } else {
          errors.city = "";
      }

      // License Number validation
      if (!inputValues.licensenumber.trim()) {
          errors.licensenumber = "Please write License Number";
      } else {
          errors.licensenumber = "";
      }

      // Email validation
      const emailCondition = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
      if (!inputValues.email.trim()) {
          errors.email = "Please write Email";
      } else if (!inputValues.email.match(emailCondition)) {
          errors.email = "Email is not  valid";
      } else {
          errors.email = "";
      }

      // Password validation
      const passwordcondition = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$"
      const passwordvalue = inputValues.password;
      if (!passwordvalue) {
          errors.password = "Please write Password";
      } else if (!passwordvalue.match(passwordcondition)) {
          errors.password = "Password should be 8-20 characters and include at least 1 letter, 1 number & 1 special character";
      } else {
          errors.password = "";
      }

      // matchPassword validation
      if (!inputValues.confirmPassword) {
          errors.confirmPassword = "Please write Password confirmation";
      } else if (inputValues.confirmPassword !== inputValues.password) {
          errors.confirmPassword = "Password does not match the confirmation password";
      } else {
          errors.confirmPassword = "";
      }

      setValidation(errors);
  };

  useEffect(() => {
      checkValidation();
  }, [inputValues]);

  const [, setError] = useState('');
  const { createTherapist } = TherapistAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');

      try {
          await createTherapist(inputValues.email, inputValues.password, inputValues.username, inputValues.city, inputValues.licensenumber);
          navigate('/')
      } catch (error) {
          setError(error.message);
      }
  }

return (
  <div className=" flex-col mx-auto lg:max-w-7xl px-10 py-10">
    <form onSubmit={handleSubmit}>
      <h2 className="mb-8 font-normal text-3xl text-center sm:text-left sm:text-5xl">
        CREATE AN ACCOUNT
      </h2>
      <div>
        <div className="mb-4">
          <h2 className=" font-normal text-2xl text-gray-500 ml-1 mb-1">
            User Name
          </h2>
          <input
            type="text"
            name="username"
            value={inputValues.username}
            onChange={(e) => handleChange(e)}
            className="border rounded-md p-2 w-full h-12 sm:w-96"
            required
          />
          {validation.username && <p className='text-[red]'>{validation.username}</p>}

        </div>
        <div className="mb-4">
          <h2 className=" font-normal text-2xl text-gray-500 ml-1 mb-1">
            Email
          </h2>
          <input
            type="email"
            name="email"
            value={inputValues.email}
            onChange={(e) => handleChange(e)}
            className="border rounded-md p-2 w-full h-12 sm:w-96"
            required
          />
          {validation.email && <p className='text-[red]'>{validation.email}</p>}

        </div>
        <div className="mb-4">
          <h2 className=" font-normal text-2xl text-gray-500 ml-1 mb-1">
            City
          </h2>
          <input
            type="text"
            name="city"
            value={inputValues.city}
            onChange={(e) => handleChange(e)}
            className="border rounded-md p-2 w-full h-12 sm:w-96"
            required
          />
          {validation.city && <p className='text-[red]'>{validation.city}</p>}

        </div>
        <div className="mb-4">
          <h2 className=" font-normal text-2xl text-gray-500 ml-1 mb-1">
            License Number
          </h2>
          <input
            type="text"
            name="licensenumber"
            value={inputValues.licensenumber}
            onChange={(e) => handleChange(e)}
            className="border rounded-md p-2 w-full h-12 sm:w-96"
            required
          />
          {validation.licensenumber && <p className='text-[red]'>{validation.licensenumber}</p>}

        </div>
        <div className="mb-4">
          <h2 className=" font-normal text-2xl text-gray-500 ml-1 mb-1">
            Create Password
          </h2>
          <input
            type="password"
            name="password"
            value={inputValues.password}
            onChange={(e) => handleChange(e)}
            className="border rounded-md p-2 w-full h-12 sm:w-96"
            required
          />
          {validation.password && <p className='text-[red]'>{validation.password}</p>}

        </div>
        <div className="mb-4">
          <h2 className=" font-normal text-2xl text-gray-500 ml-1 mb-1">
            Confirm Password
          </h2>
          <input
            type="password"
            name="confirmPassword"
            value={inputValues.confirmPassword}
            onChange={(e) => handleChange(e)}
            className="border rounded-md p-2 w-full h-12 sm:w-96"
            required
          />
          {validation.confirmPassword && <p className='text-[red]'>{validation.confirmPassword}</p>}

        </div>
      </div>
      <div>
        <button
          className=" mt-12 w-48 h-16 bg-[#2dd3e3] rounded-md hover:bg-[#4dd9e9] font-normal text-2xl"
          type="submit"
        >
          CREATE
        </button>
              </div>
          </form>

      </div>
  );
}

export default TherapistCreateAccount;