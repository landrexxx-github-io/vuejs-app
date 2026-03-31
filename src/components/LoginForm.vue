<style scoped></style>
<template>
  <Toast />
  <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit">
    <div class="min-h-screen flex justify-center items-start pt-16 px-4">
      <div class="w-full max-w-md space-y-5">
        <h1>Sign In</h1>
        <div class="flex flex-col gap-1">
          <FloatLabel variant="in">
            <IconField>
              <InputIcon class="pi pi-user" />
              <InputText
                id="in_username"
                name="username"
                autocomplete="off"
                variant="filled"
                class="w-full"
              />
            </IconField>
            <label for="in_username" class="font-light">Username</label>
          </FloatLabel>
          <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{
            $form.username.error.message
          }}</Message>
        </div>
        <div class="flex flex-col gap-1">
          <FloatLabel variant="in">
            <IconField>
              <InputIcon class="pi pi-lock" />
              <InputText
                type="password"
                id="in_password"
                name="password"
                autocomplete="off"
                variant="filled"
                class="w-full"
              />
            </IconField>
            <label for="in_password" class="font-light">Password</label>
          </FloatLabel>
          <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{
            $form.password.error.message
          }}</Message>
        </div>
        <Button type="submit" label="Login" class="w-full" size="large" severity="primary" />
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Button, FloatLabel, IconField, InputIcon, InputText, Message, Toast } from 'primevue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import { z } from 'zod'

import { Form, type FormSubmitEvent } from '@primevue/forms'
import { zodResolver } from '@primevue/forms/resolvers/zod'

const router = useRouter()
const toast = useToast()

const initialValues = ref({
  username: '',
  password: '',
})

const resolver = zodResolver(
  z.object({
    username: z.string().min(1, { error: 'Username is required.' }),
    password: z
      .string()
      .min(3, { error: 'Minimun of 3 characters' })
      .max(8, { error: 'Maximum of 8 characters' })
      .refine((value) => /[a-z]/.test(value), {
        message: 'Must have a lowercase letter.',
      })
      .refine((value) => /[A-Z]/.test(value), {
        message: 'Must have an uppercase letter.',
      })
      .refine((value) => /d/.test(value), {
        message: 'Must have a number.',
      }),
  }),
)

const onFormSubmit = (e: FormSubmitEvent) => {
  console.log('submitting form..')
  if (e.valid) {
    toast.add({ severity: 'info', summary: 'Form is submitted.', life: 3000 })
    router.push('/home')
  }
}
</script>
