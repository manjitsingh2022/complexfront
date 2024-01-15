import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigation = useNavigate();

  const handleNavigateHome = () => {
    navigation('/');
  };

  useEffect(() => {
    const delay = 5000; 

    const timeoutId = setTimeout(() => {
      navigation('/'); 
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-red-500 mb-4">Oops! Something went wrong.</h1>
        <p className="text-gray-600">We're sorry, but an error occurred.</p>
        <button
          className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleNavigateHome}
        >
          Navigate to Home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
