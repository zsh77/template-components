import '../src/Styles/globals.scss'
import '../src/Styles/tailwind.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    // matchers: {
    //   color: /(background|color)$/i,
    //   date: /Date$/,
    // },
  },
  nextRouter: {
    query: {
      foo: 'this-is-a-global-override',
    },
  },
}
