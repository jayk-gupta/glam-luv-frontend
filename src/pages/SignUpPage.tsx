import React from 'react'
import SignUp from '../components/Auth/SignUp/SignUp'
import { RegisterFormProvider } from '../contexts/SignUpFormContext';
import SignUpForm from '../components/Auth/SignUp/SignUpForm';

function SignUpPage() {
  return (
    <div>
      <RegisterFormProvider>
        <SignUpForm />
      </RegisterFormProvider>
    </div>
  );
}

export default SignUpPage