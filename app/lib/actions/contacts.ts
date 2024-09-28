'use server'

import { db } from '@/db'
import { contactsTable } from '@/schema'
import { contactSchema } from '../defenitions'

export async function createContact(prevState: any, formData: FormData) {
  const formObj = {
    email: formData.get('email'),
    content: formData.get('content'),
  }

  const parsed = contactSchema.safeParse(formObj)

  if (parsed.success) {
    await db.insert(contactsTable).values(parsed.data)
    return { success: 'Message has been sent' }
  } else {
    console.log(parsed.success, 'parsed')
    return {
      error: 'Message has NOT been sent. Make sure you provided valid input',
    }
  }
}
