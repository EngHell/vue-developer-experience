#!/usr/bin/env node

console.info = console.debug = console.warn = console.log = console.error
const cli = require('../dist/index.cjs').cli
const chalk = require('chalk')

try {
  cli().catch((error) => {
    console.error(
      chalk.green(
        'Unexpected error. Please report 👉 https://github.com/znck/vue-developer-experience/issues/new',
      ),
    )
    console.error(error)
  })
} catch (error) {
  console.error(
    chalk.green(
      'Unexpected error. Please report 👉 https://github.com/znck/vue-developer-experience/issues/new',
    ),
  )
  console.error(error)
}
