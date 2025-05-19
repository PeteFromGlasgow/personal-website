import { describe, it, expect } from 'vitest'
import { resume } from '../src/index.js'

describe('resume', () => {
  it('The module should return my resume as a Javascript object', async () => {
    expect(resume.basics.name).to.equal('Peter Kinnaird')
  })
})
