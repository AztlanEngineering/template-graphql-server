const randomString = () =>
  Math.random().toString(36).substring(2, 15)

export default (length) => {
  let current = ''
  while (current.length < length) {
    current += randomString()
  }
  return current.substring(0, length)
}

