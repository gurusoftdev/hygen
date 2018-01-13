// @flow

import type { RunnerConfig } from './types'

const fs = require('fs-extra')
const render = require('./render')
const params = require('./params')
const execute = require('./execute')

const engine = async (argv: Array<string>, config: RunnerConfig) => {
  const { cwd, templates, logger } = config
  const args = await params(templates, argv)
  const { generator, action, actionfolder } = args

  logger.log(args.dry ? '(dry mode)' : '')
  if (!generator) {
    throw new Error('please specify a generator.')
  }

  if (!action) {
    throw new Error(`please specify an action for ${generator}.`)
  }

  logger.log(`Loaded templates: ${templates.replace(cwd + '/', '')}`)
  if (!await fs.exists(actionfolder)) {
    throw new Error(
      `cannot find action '${action}' for generator '${generator}' (looked for ${generator}/${action} in ${templates}).`
    )
  }

  await execute(await render(args), args, config)
}

module.exports = engine
