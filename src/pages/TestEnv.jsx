import React, { useEffect } from 'react';

const TestEnv = () => {
  useEffect(() => {
    console.log("API Base URL:", import.meta.env.VITE_APP_BASE_URL);  // Should log the URL
  }, []);

  return <div><h1 className='center'>hello world</h1></div>;
};

export default TestEnv;
