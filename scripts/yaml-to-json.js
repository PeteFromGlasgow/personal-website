import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { YAML } from 'yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const assetsDir = path.join(rootDir, 'packages/resume/src/assets');
const resumeYamlPath = path.join(assetsDir, 'resume.yaml');
const outputJsonPath = path.join(rootDir, 'packages/resume/src/resume.json');

// Create a custom YAML instance with include tag handler
const yaml = new YAML({
  customTags: [
    {
      tag: '!include',
      resolve(value) {
        const filePath = path.join(assetsDir, value);
        const content = fs.readFileSync(filePath, 'utf8');
        // Parse with the same custom tags for nested includes
        return yaml.parse(content);
      }
    }
  ]
});

try {
  console.log('Reading resume YAML file...');
  const yamlContent = fs.readFileSync(resumeYamlPath, 'utf8');
  
  console.log('Parsing YAML with includes...');
  const resumeData = yaml.parse(yamlContent);
  
  console.log('Writing to JSON file...');
  fs.writeFileSync(outputJsonPath, JSON.stringify(resumeData, null, 2), 'utf8');
  
  console.log(`Successfully converted to JSON: ${outputJsonPath}`);
} catch (error) {
  console.error('Error processing YAML file:', error);
  process.exit(1);
}
