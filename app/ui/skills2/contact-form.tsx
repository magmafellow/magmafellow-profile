'use client'

import { useState } from 'react'
import styles from './contact-form.module.scss'
import validator from 'validator'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useFormState, useFormStatus } from 'react-dom'
import { createContact } from '@/app/lib/actions/contacts'

export default function ContactForm() {
  const [errormsg, setErrormsg] = useState('')
  const [message, dispatch] = useFormState(createContact, undefined)
  const { pending } = useFormStatus()

  const validateEmail = (e: any) => {
    const email = e.target.value

    if (email === '') {
      setErrormsg('')
      return
    }

    if (!validator.isEmail(email)) {
      setErrormsg('Email is incorrect')
    } else {
      setErrormsg('')
    }
  }

  return (
    <form className={`${styles.form}`} action={dispatch}>
      <input
        data-error={errormsg !== ''}
        type="email"
        name="email"
        id="email"
        required
        placeholder="Email"
        onChange={validateEmail}
      />
      {errormsg && (
        <div className={styles.email_error_box}>
          <p className={`${styles.email_error}`}>{errormsg}</p>
        </div>
      )}
      <textarea name="content" id="content" placeholder="Message"></textarea>
      {message?.success && (
        <div>
          <p className={styles.message_success}>{message.success}</p>
        </div>
      )}
      {message?.error && (
        <div>
          <p className={styles.message_error}>{message.error}</p>
        </div>
      )}

      <div className={`${styles.button_box}`}>
        <button
          disabled={errormsg !== ''}
          className={`${styles.button_box_btn}`}
          type="submit"
        >
          {pending ? 'please wait' : 'Submit'}
          <FaArrowRightLong />
        </button>
      </div>
    </form>
  )
}
