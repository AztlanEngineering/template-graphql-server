const validateItem = (item, validate, prefix, e, w, v) => {
  //console.log('WILL NOW VALIDATE', item, validate, prefix)
  const {
    errors:subItemErrors,
    valid:subItemValid,
    warnings:subItemWarnings,
  } = validate(item, true, true)

  const parsedSubItemErrors = JSON.parse(subItemErrors)
  const parsedSubItemWarnings = JSON.parse(subItemWarnings)
  const parsedSubItemValid = JSON.parse(subItemValid)
    
  Object.keys(parsedSubItemErrors).forEach(key =>{
    e[`${prefix}.${key}`] = parsedSubItemErrors[key]
  })
    
  Object.keys(parsedSubItemWarnings).forEach(key =>{
    w[`${prefix}.${key}`] = parsedSubItemWarnings[key]
  })
    
  Object.keys(parsedSubItemValid).forEach(key =>{
    v[`${prefix}.${key}`] = parsedSubItemValid[key]
  })

}

export default (item, relatedValidators, prefix, e, w, v) => {
  Object.keys(relatedValidators).forEach(key => {
    const validate = relatedValidators[key]
    const isPlural = item[key] && typeof item[key].length === 'number'

    if(isPlural) {
      const subItems = item[key]
      subItems.forEach(subItem => {
        validateItem(subItem, validate, key, e, w, v)
      }
      )

    } else {
      const subItem = item[key]
      if(subItem) {
        validateItem(subItem, validate, key, e, w, v)
      }
    }

  })

  return{
    errors  :e,
    valid   :v,
    warnings:w
  }
}
