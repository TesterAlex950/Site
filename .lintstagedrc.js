module.exports = {
  // Format and lint TypeScript/JavaScript files
  '**/*.(ts|tsx|js|jsx)': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `eslint --fix ${filenames.join(' ')}`,
    `tsc --noEmit --project tsconfig.json`,
  ],

  // Format JSON files
  '**/*.json': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
  ],

  // Format CSS/SCSS files
  '**/*.(css|scss|sass)': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
  ],

  // Format Markdown files
  '**/*.md': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
  ],

  // Format YAML files
  '**/*.(yml|yaml)': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
  ],
}; 