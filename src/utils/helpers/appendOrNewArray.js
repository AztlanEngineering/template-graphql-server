export default (d, k, append) => {
  d[k] = d[k] ? [...d[k], append] : [append] 

}
