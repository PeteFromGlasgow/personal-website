import { getHelloWorld } from '@PeteFromGlasgow/typescript-cli-template-core'

export function bindField(fieldId: string, targetId: string) {
  const field = document.getElementById(fieldId)
  const target = document.getElementById(targetId)

  if (field && target) {
    const sayHello = getHelloWorld(name => target.innerHTML = name)
    field.addEventListener('keyup', event => sayHello((event.target! as { value: string }).value))
  }
}
