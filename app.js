const {crearArchivo}= require('./helpers/multiplicar');
const argv =require('./config/yargs');
const colors = require('colors');
console.clear();
// console.log(process.argv);


// console.log(argv);

console.log('base: yargs',argv.base);



/**
 * documentacion
 * const [,,arg3='base=2']=process.argv;
 * const[,base=5]=arg3.split('=')
 */

// console.log(arg3); 
// console.log(base); 


// const base =12;

crearArchivo(argv.b,argv.l,argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
  .catch(err =>console.log(err));
   