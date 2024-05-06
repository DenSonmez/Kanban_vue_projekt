import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const vuetify = createVuetify();

export function registerPlugins(app) {
  app.use(vuetify);
}
