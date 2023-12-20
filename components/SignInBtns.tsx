'use client'
import { signIn } from "next-auth/react";
import Image from "next/image";

const SignInBtns = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-4">
      <button className="flex justify-center items-center gap-2 border p-4 rounded-full hover:bg-slate-300/25 transition"
      onClick={()=>signIn('github')}
      >
        <span>
          <Image
          src={'/git-hub-logo.png'}
          alt="git-hub-logo"
          height={30}
          width={30}
          />
        </span>
        <span>Sign in with GitHub</span>
      </button>
      <button className="flex justify-center items-center gap-2 border p-4 rounded-full hover:bg-slate-300/25 transition"
      onClick={()=>signIn('google')}
      >
        <span>
          <Image
          src={'/google-logo.png'}
          alt="google-logo"
          height={30}
          width={30}
          />
        </span>
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default SignInBtns;