'use client'

import { useEffect, useState } from 'react'
import styles from './form.module.scss'
import Script from 'next/script'

export default function Form() {
  const [mounted, setMounted] = useState(false)

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

  const onClickCheckHandler = function(e: any) {
    // console.log(document.forms['blog_form'])
    console.log(document.forms['blog_id'])
  }

  const onClickHandler = function (e: any) {
    e.preventDefault()
    const form = document.forms['blog_id']
    const ace_content = editor_ace.getValue()
    form.content.value = ace_content
    
    form.submit()
  }

  
  
  return (
    <form id='blog_id' name='blog_form' className={`${styles.form}`} action="">
      <script async src="https://cdn.jsdelivr.net/npm/ace-builds@1.36.0/src/ace.js"></script>
      <div>
        <label htmlFor="title">title</label>
      </div>
      <div>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="bite">bite</label>
      </div>
      <div>
        <textarea name="bite" id="bite"></textarea>
      </div>
      <div>
        <label htmlFor="content">content</label>
      </div>
      <div className={`${styles.contentBox}`}>
        <textarea name="content" id="content"></textarea>
      </div>
      <div className={`${styles['editor-container']}`}>
        <div id="editor_ace" className={`${styles.editor}`}></div>
      </div>
      <div className={`${styles.btnBox}`}>
        <button className={`${styles.btnBox_btn}`} type="submit" onClick={onClickHandler}>send!</button>
        <button type="button" className={`${styles.btnBox_btn}`} onClick={onClickCheckHandler}>check</button>
      </div>
    </form>
  )
}
