import ToggleButton from 'vue-js-toggle-button';
import MenuIndexView from './views/MenuIndexView';
import MenuBuilder from './components/MenuBuilder';
import MenuBuilderField from './components/MenuBuilderField';

Nova.booting((app, store) => {
  console.log('app components below');
  console.log(app.components);
  console.log('app components above');
  app.use(ToggleButton);
  app.component('menu-builder', MenuBuilder);
  app.component('form-menu-builder-field', MenuBuilderField);
  app.component('detail-menu-builder-field', MenuBuilderField);
  // Nova.inertia('MenuBuilder', MenuIndexView);
})

Nova.booted((app) => {
  console.log('app components below');
  console.log(app.components);
  console.log('app components above');
  Nova.inertia('MenuBuilder', MenuIndexView);
})
