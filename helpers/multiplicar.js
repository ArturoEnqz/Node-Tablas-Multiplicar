const fs = require('fs');

const crearArchivoTabla = async(base, listar, hasta) => {
    try {
        let salida = "";

        for (let i= 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log("==============");
            console.log(` Tabla del ${base} `);
            console.log("==============");

            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return("Archivo creado correctamente!");
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivoTabla
}