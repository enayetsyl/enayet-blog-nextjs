import SignInBtns from "@/components/SignInBtns";
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import{ redirect } from 'next/navigation'

const SignIn = async() => {
  const session = await getServerSession(authOptions)
  
  if(session) {
    redirect('/dashboard')
  }
  return (
    <div className="mt-4">
      <h1 className="text-2xl text-center font-bold">Sign in</h1>
      <SignInBtns/>
    </div>
  );
};

export default SignIn;
