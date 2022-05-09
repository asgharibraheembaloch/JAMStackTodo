const React = require('react');
const { ThemeProvider } = require('theme-ui');
const { light } = require('@theme-ui/presets');

const newTheme = {
    ...light,
    sizes: {
        container: 1024
    },
    color: 'black'
}

module.exports = ({element}) => (
  <ThemeProvider theme={newTheme}>
    {element}
  </ThemeProvider>
)