export default (generator, options = {}) => {
  const data = generator()

  const final_data = {}
  Object.keys(data).forEach(e => {
    final_data[e] = (e in options) ? options[e] : data[e]
  })

  return { ...options, ...final_data }
}
