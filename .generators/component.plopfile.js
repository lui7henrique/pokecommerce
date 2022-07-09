const componentConfig = {
  description: 'Add basic front-end component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name:'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/components/{{name}}/index.tsx',
      templateFile: 'templates/component/index.hbs'
    }
  ]
}

module.exports = (plop) => {
  plop.setGenerator('component', componentConfig)
}
