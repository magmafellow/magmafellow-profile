

export function truncatePhrase(phrase: string, number: number) {
  if (number <= 0) return ''
  if (number > phrase.length) return phrase
  let string = ''
  for (let i = 0; i < number; i++) {
    string += phrase[i]
  }
  return string + '...'
}

