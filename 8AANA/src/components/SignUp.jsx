import React from 'react';
import { SignUp } from "@clerk/clerk-react";

function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen pt-16">
      <SignUp />
    </div>
  );
}

export default SignUpPage;
