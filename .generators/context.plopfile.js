const componentConfig = {
  description: 'Add front-end context',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '🌎  Context name:'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/contexts/{{name}}Context/index.tsx',
      templateFile: 'templates/context/index.hbs'
    },
    {
      type: 'add',
      path: '../src/contexts/{{name}}Context/types.ts',
      templateFile: 'templates/context/types.hbs'
    }
  ]
}

module.exports = (plop) => {
  plop.setGenerator('component', componentConfig)
}
