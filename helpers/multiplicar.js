const { rejects } = require("assert");
const fs = require("fs");

const crearArchivo = async (base = 5,listar=false,hasta=12) => {
  try {
    if (listar) {
      console.log("===============================");
      console.log("      Tabla del: ", base);
      console.log("===============================");
    }

    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.red} ${i}  ${'='.red} ${base * i}\n`;
    }
    if (listar) {
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
      throw err;    
  }
};



// const crearArchivo = (base=5) => {
// 
// return new Promise((resolve,reject)=>{
// 
  // console.log('===============================');
  // console.log('      Tabla del: ',base);
  // console.log('===============================');
  // 
  // let salida='';
  // 
  // for (let i = 1; i <= 12; i++) {
    // salida+=`${base} x ${i} = ${base*i}\n`;
  // }
  // console.log(salida);
  // fs.writeFileSync(`tabla-${base}.txt`, salida);
  // 
  // resolve(`tabla-${base}.txt`)
// });
// 
// };

// const crearArchivo = (base=5) => {
  //
  //
  // console.log('===============================');
  // console.log('      Tabla del: ',base);
// console.log('===============================');
//
// let salida='';
//
// for (let i = 1; i <= 12; i++) {
// salida+=`${base} x ${i} = ${base*i}\n`;
// }
// console.log(salida);
// fs.writeFileSync(`tabla-${base}.txt`, salida);
//
// console.log(`tabla-${base}.txt creado`)
// };

module.exports = { crearArchivo };
