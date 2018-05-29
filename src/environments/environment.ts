// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBF8jy1CzX1ueeeDY8Wt45FOQkNj3IxCCs',
    authDomain: 'eventme-7da8c.firebaseapp.com',
    databaseURL: 'https://eventme-7da8c.firebaseio.com',
    projectId: 'eventme-7da8c',
    storageBucket: 'eventme-7da8c.appspot.com',
    messagingSenderId: '542930923589'
  }
};
