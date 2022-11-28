export const getMinSquaredNumbers = arr => {
  if (!Array.isArray(arr)) {
    return null
  }
  let squared = []
  squared = arr.map(num => num * num)
  return (squared = Math.min.apply(Math, squared))
}
