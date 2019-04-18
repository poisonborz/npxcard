'use strict'

const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const data = {
  name: chalk.white('              Janos Herman'),
  handle: chalk.white('poisonborz'),

  labelWork: chalk.white.bold('   Currently'),
  work: chalk.white('Head of Frontend at ToolSense'),

  labellinkedin: chalk.white.bold('    LinkedIn'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('janosherman'),
  labelGitHub: chalk.white.bold('      GitHub'),
  github: chalk.gray('https://github.com/') + chalk.green('poisonborz'),
  labelThoughts: chalk.white.bold('    Thoughts'),
  thoughts: chalk.gray('https://medium.com/') + chalk.green('@poisonborz'),
  labelWeb: chalk.white.bold('         Web'),
  web: chalk.green('https://poisonborz.com')
}

const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const linkedin = `${data.labellinkedin}  ${data.linkedin}`
const github = `${data.labelGitHub}  ${data.github}`
const thoughts = `${data.labelThoughts}  ${data.thoughts}`
const web = `${data.labelWeb}  ${data.web}`

const output = heading + newline +
               newline +
               working + newline +
               newline +
               linkedin + newline +
               github + newline +
               thoughts + newline +
               web

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.blue(boxen(output, options)))
