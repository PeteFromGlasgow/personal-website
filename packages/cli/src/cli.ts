import { Command } from 'commander'
import { getHelloWorld } from '@PeteFromGlasgow/typescript-cli-template-core'

async function getProgram(output: (out: unknown) => void) {
  const program = new Command()
  const helloWorld = getHelloWorld(output)

  program
    .command('hello-world <name>')
    .action(name => helloWorld(name))

  return program
}

export { getProgram }
