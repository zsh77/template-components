const classJoin = (classNames: string[]) => {
  return classNames
    .filter((el) => el)
    .join(' ')
    .trim()
}
export default classJoin
