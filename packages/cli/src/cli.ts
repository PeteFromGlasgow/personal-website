import { Command } from 'commander'
import { getHelloWorld } from '@petefromglasgow/personal-website-core'

async function getProgram(output: (out: unknown) => void) {
  const program = new Command()
  const helloWorld = getHelloWorld(output)

  program
    .command('hello-world <name>')
    .action(name => helloWorld(name))

  return program
}

export { getProgram }
