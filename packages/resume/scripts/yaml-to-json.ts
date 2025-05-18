import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parse } from 'yaml'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const assetsDir = path.join(rootDir, 'src/assets')
const resumeYamlPath = path.join(assetsDir, 'resume.yaml')
const outputJsonPath = path.join(rootDir, 'src/resume.json')

// Define custom tag for include
const includeTag = {
  tag: '!include',
  resolve(str) {
    const filePath = path.join(assetsDir, str)
    const content = fs.readFileSync(filePath, 'utf8')
    // Parse with the same custom tags for nested includes
    return parse(content, { customTags: [includeTag] })
  }
}

try {
  console.log('Reading resume YAML file...')
  const yamlContent = fs.readFileSync(resumeYamlPath, 'utf8')

  console.log('Parsing YAML with includes...')
  const resumeData = parse(yamlContent, { customTags: [includeTag] })

  console.log('Writing to JSON file...')
  fs.writeFileSync(outputJsonPath, JSON.stringify(resumeData, null, 2), 'utf8')

  console.log(`Successfully converted to JSON: ${outputJsonPath}`)
}
catch (error) {
  console.error('Error processing YAML file:', error)
  process.exit(1)
}
