'use client';

import Link from 'next/link';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Button, Input } from 'ui';

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  pswd: z.string().min(8),
  pswd_confirm: z.string()
});

export default function Register() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ''
    }
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <Button asChild variant="ghost" className="absolute left-4 top-4">
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild variant="ghost" className="absolute right-4 top-4">
        <Link href="/">Return home</Link>
      </Button>
      <div className="flex h-auto w-[80%] flex-col items-center justify-center gap-4 p-12 lg:w-2/3 bg-background rounded-md lg:bg-none lg:p-0">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Start seeing the benefits</h3>
        <small className="text-center text-sm  font-medium text-muted-foreground">
          Follow the steps below to start registering on the plaftorm
        </small>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <small className="text-center text-sm font-medium text-muted-foreground">
          By clicking continue, you agree to our Terms of Service and Privacy Policy.
        </small>
      </div>
    </>
  );
}
