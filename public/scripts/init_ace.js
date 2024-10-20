const editor_ace = ace.edit('editor_ace')
editor_ace.setTheme('ace/theme/cloud_editor_dark')
editor_ace.session.setMode('ace/mode/html')
editor_ace.setOptions({
  highlightSelectedWord: false,
  cursorStyle: 'ace',
})
editor_ace.setOption('fontSize', '20px')
window.editor_ace = editor_ace
const editorObj = {}
editorObj.editor_ace = editor_ace
