const capitalize = (str: string) => {
  return str.replace(/(?:^|\s)\S/g, l => l.toUpperCase())
}

export default capitalize
