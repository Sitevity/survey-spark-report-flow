
import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '@/components/AuthForm';
import Logo from '@/components/Logo';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-survey flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-block">
          <Logo size="md" withText={true} />
        </Link>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <AuthForm type="register" />
      </div>
    </div>
  );
};

export default Register;
