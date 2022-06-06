const fs= require('fs')
const colors = require('colors');
const crearArchivoTabla = async(base = 5,listar = false,hasta = 10) =>{
try {
        
        let salida ='';
    
        
        for (let i = 0; i <= hasta; i++) {
            salida += `${base} x ${ i } = ${base * i}\n`;   
        }

            if(listar){
                
                console.log(colors.america ('===================='));
                console.log(' Tabla del: ', base);
                console.log(colors.america ('===================='));
                console.log(colors.america (salida));
            }
           
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida) ;
                                    
            console.log(`tabla-${base}.txt creada`);
            return `tabla-${base}.txt`;
           
            
            
    
} catch (err) {
    console.log(err);
    
    
}
        
}

module.exports = { crearArchivoTabla}