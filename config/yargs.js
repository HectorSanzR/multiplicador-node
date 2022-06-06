const { describe } = require('yargs');

 const argv = require('yargs')(process.argv.slice(2))
                .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la tabla de multiplicar'
                })
                .option('h',{
                        alias:'final',
                        type: 'number',
                        demandOption: true,
                        describe: 'hasta que tabla se va a multiplicar',
                        
                        
                    })
                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    describe: 'Muestra la tabla en consola',
                    default : false
                    
                })
                
                .check((argv, options) =>{
                        if(isNaN(argv.b)){
                        throw ' la base debe ser un numero'
                        }else{
                                return true
                        }
                }).argv;

                

module.exports = {argv};