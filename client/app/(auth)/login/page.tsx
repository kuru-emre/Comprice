'use client';

import { Button, Input } from 'ui';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Button asChild variant="ghost" className="absolute left-4 top-4 max-sm:text-white">
        <Link href="/">Return home</Link>
      </Button>
      <Button asChild variant="ghost" className="absolute right-4 top-4 max-sm:text-white">
        <Link href="/register">Register</Link>
      </Button>
      <div className="flex h-auto w-[80%] flex-col items-center justify-center gap-4 rounded-md bg-background p-12 lg:w-1/3 lg:bg-none lg:p-0">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Sign into your account</h3>
        <small className="text-sm font-medium leading-none text-muted-foreground">
          Enter your email below to login to your account
        </small>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button asChild className="w-full">
          <Link href="/login">Login</Link>
        </Button>
        <small className="text-center text-sm font-medium text-muted-foreground">
          By clicking continue, you agree to our Terms of Service and Privacy Policy.
        </small>
      </div>
    </>
  );
}
