// export default function capitalize(
//   [first, ...rest]: [string, string],
//   locale = navigator.language): string {
//     return first === undefined
//       ? ''
//       : first.toLocaleUpperCase(locale) + rest.join('')
// }

export default function capitalize([first, ...rest]: [string, string]): string {
  return first === undefined ? '' : [first.toUpperCase(), ...rest].join('')
}
