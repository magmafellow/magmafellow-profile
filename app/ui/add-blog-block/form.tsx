'use client'

import { useEffect, useState } from 'react'
import styles from './form.module.scss'
import Script from 'next/script'
import { useFormState } from 'react-dom'
import { addNewBlogPost } from '@/app/lib/actions/blogs'
import ModalV2, { ModalV2Activator } from '../modal-v2'
import { FaXmark } from 'react-icons/fa6'
import '../modal-v2.css'

export default function Form() {
  const [message, dispatch] = useFormState(addNewBlogPost, undefined)

  useEffect(() => {
    const ace_code = document.createElement('script')
    ace_code.innerHTML = `
      const editor_ace = ace.edit('editor_ace')
      editor_ace.setTheme('ace/theme/cloud_editor_dark')
      editor_ace.session.setMode('ace/mode/html')
      editor_ace.setOptions({
        highlightSelectedWord: false,
        cursorStyle: 'ace',
      })
      editor_ace.setOption('fontSize', '20px')
    `

    document.body.appendChild(ace_code)
  }, [])

  const onClickCheckHandler = function (e: any) {
    // forms[0] is the first and only form on this page
    const form = document.forms[0]
    console.log(form)
  }

  const onClickSeedHandler = function (e: any) {
    // forms[0] is the first and only form on this page
    const form = document.forms[0]
    const ace_content = editor_ace.getValue()
    form.content.value = ace_content
    console.log('seeded')
  }

  const onClickHandler = function (e: any) {
    e.preventDefault()
    const form = document.forms[0]
    // ace is added via useEffect
    const ace_content = editor_ace.getValue()
    form.content.value = ace_content

    // form.submit()
  }

  return (
    <form
      id="blog_id"
      name="blog_form"
      className={`${styles.form} relative`}
      action={dispatch}
    >
      <ModalV2Activator className="bg-sky-500 hover:bg-sky-700 transition text-white rounded absolute right-4 top-4 py-3 px-5" text='faq' id='modal-add-new-blog-info' />
      <ModalV2 id="modal-add-new-blog-info">
        <div className="modal bg-slate-800 relative min-h-[370px] px-7 pt-7 pb-5 min-w-[300px] rounded-md border border-gray-600">
          <h3 className="font-bold text-2xl mb-3">How to use content field</h3>
          <p className='mb-4'>Content field is an html markup.</p>
          <p className='mb-4'>Everything is wrapped in div with class of blog</p>
          <p className='mb-4'>Here is simple example of blog</p>
          <a target='_blank' href='/images/content-example.png' className='block h-[500px] w-full'>
            <img className='w-full h-full object-contain object-center' src="/images/content-example.png" alt="content example" />
          </a>
          <FaXmark
            className="modal-closer absolute -top-3 -right-3 text-2xl text-white hover:text-sky-300 cursor-pointer"
          />
        </div>
      </ModalV2>
      <script
        async
        src="https://cdn.jsdelivr.net/npm/ace-builds@1.36.0/src/ace.js"
      ></script>
      {/* title */}
      <div>
        <label htmlFor="title">title</label>
      </div>
      <div className="mb-4">
        <input type="text" id="title" name="title" />
      </div>

      {/* bite */}
      <div>
        <label htmlFor="bite">bite</label>
      </div>
      <div className="mb-4">
        <textarea name="bite" id="bite"></textarea>
      </div>

      {/* tags related */}
      <div>
        <label htmlFor="tags">tags (via comma)</label>
      </div>
      <div className="mb-4">
        <input type="text" id="tags" name="tags" />
      </div>

      {/* mins to read */}
      <div>
        <label htmlFor="minToRead">mins to read</label>
      </div>
      <div className="mb-8">
        <input type="number" id="minToRead" name="minToRead" />
      </div>

      {/* hidden content due ace_editor proxy */}
      <div className="text-center mb-2">
        <label className="text-2xl font-light" htmlFor="content">
          Content
        </label>
      </div>
      <div className={`${styles.contentBox}`}>
        <textarea name="content" id="content"></textarea>
      </div>

      {/* ace editor container */}
      <div className={`${styles['editor-container']}`}>
        <div id="editor_ace" className={`${styles.editor}`}></div>
      </div>

      <div className='mb-6'>
        <div>
          <p className='text-white text-center'>{message?.success}</p>
        </div>
        <div>
          <p className='text-red-600 text-center'>{message?.error}</p>
        </div>
      </div>
      
      <div className={`${styles.btnBox}`}>
        <button
          className={`${styles.btnBox_btn}`}
          type="submit"
        >
          send!
        </button>
        <button
          type="button"
          className={`${styles.btnBox_btn}`}
          onClick={onClickSeedHandler}
        >
          seed
        </button>
      </div>
    </form>
  )
}
