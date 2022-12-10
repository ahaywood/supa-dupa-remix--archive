/* eslint-disable import/no-anonymous-default-export */
export default function (plop) {

  plop.setHelper('lowerPascalCase', (txt) => {
    const s = txt.replace(/\w+/g,
      function (w) { return w[0].toLowerCase() + w.slice(1).toLowerCase(); });
    return s;
  });

  // create your generators here
  // TODO: determine where this component should be created - defaults to components directory
  plop.setGenerator('component', {
    description: 'this generates all the files needed for a component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'name of the component'
    }], // array of inquirer prompts
    actions: [{
      type: 'add',
      path: 'app/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: 'plop-templates/component/component.tsx.hbs'
    }, {
      type: 'add',
      path: 'app/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
      templateFile: 'plop-templates/component/component.stories.tsx.hbs'
    }, {
      type: 'add',
      path: 'app/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
      templateFile: 'plop-templates/component/component.test.tsx.hbs'
    }, {
      type: 'add',
      path: 'app/components/{{pascalCase name}}/index.tsx',
      templateFile: 'plop-templates/component/index.ts.hbs'
    }]  // array of actions
  });

  plop.setGenerator('page', {
    description: 'this generates a page',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'name of the page'
    }], // array of inquirer prompts
    actions: [{
      type: 'add',
      path: 'app/routes/{{ lowerPascalCase name}}.tsx',
      templateFile: 'plop-templates/page/page.tsx.hbs'
    }]  // array of actions
  });
};