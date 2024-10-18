'use client'

import { useEffect, useState } from 'react'
import styles from './form.module.scss'
import Script from 'next/script'
import { useFormState } from 'react-dom'
import { addNewBlogPost } from '@/app/lib/actions/blogs'

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
      className={`${styles.form}`}
      action={dispatch}
    >
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
