'use client';

import { Box, Button, Center, Stack, Flex, Group, TextInput } from '@mantine/core';
import { zodResolver } from 'mantine-form-zod-resolver';
import { sendEmail } from 'server/controllers';
import classes from './Maintenance.module.css';
import { LasticaFont } from 'libs';
import { useForm } from '@mantine/form';
import { z } from 'zod';
import { notifications } from '@mantine/notifications';

const schema = z.object({
  fname: z.string().min(2, { message: 'Must have at least 2 letters' }),
  lname: z.string().min(2, { message: 'Must have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email type' }),
  company: z.string().min(2, { message: 'Must have at least 2 letters' }),
  country: z.string().min(2, { message: 'Must have at least 2 letters' })
});

export default function Maintenance() {
  const form = useForm({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      company: '',
      country: ''
    },

    validate: zodResolver(schema)
  });

  function handleSubmit() {
    if (form.isValid()) {
      sendEmail();
      notifications.show({
        title: 'Email Sent Notification',
        message: 'We successfully reveived your message!'
      });
    }
  }

  return (
    <Center className={classes.container}>
      <Box component="video" src="/videos/hero.mp4" className={classes.bgVideo} autoPlay muted loop />

      <Center className={classes.overlay}>
        <Flex gap="md" justify="center" align="center" direction="column" wrap="wrap">
          <h1 className={`text-7xl font-light tracking-widest text-white no-underline ${LasticaFont.className}`}>Coming Soon</h1>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap={30}>
              <Group>
                <TextInput withAsterisk label="First Name" placeholder="First name" size="md" {...form.getInputProps('fname')} />
                <TextInput withAsterisk label="Last Name" placeholder="Last name" size="md" {...form.getInputProps('lname')} />
              </Group>

              <TextInput withAsterisk label="Email" placeholder="your@email.com" size="md" {...form.getInputProps('email')} />
              <Group>
                <TextInput withAsterisk label="Company" placeholder="Company" size="md" {...form.getInputProps('company')} />
                <TextInput withAsterisk label="Country" placeholder="Country" size="md" {...form.getInputProps('country')} />
              </Group>

              <Group justify="center" mt="md">
                <Button type="submit" size="md">
                  Send Message
                </Button>
              </Group>
            </Stack>
          </form>
        </Flex>
      </Center>
    </Center>
  );
}
