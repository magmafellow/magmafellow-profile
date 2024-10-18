

export function truncatePhrase(phrase: string, number: number) {
  if (number <= 0) return ''
  if (number > phrase.length) return phrase
  let string = ''
  for (let i = 0; i < number; i++) {
    string += phrase[i]
  }
  return string + '...'
}

export function isNumeric(str: any) {
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

export function isElemInParent(elem: any, parent: any, deep: number = 0) {
  if (elem === null) {
    return false
  }
  if (elem === undefined || deep === 42) {
    return false
  }
  if (elem === parent) {
    return true
  } else {
    return isElemInParent(elem.parentNode, parent, deep+1)
  }
} 
