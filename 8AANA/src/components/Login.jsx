import React from 'react';
import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen pt-16">
      <SignIn />
    </div>
  );
}

export default Login;
