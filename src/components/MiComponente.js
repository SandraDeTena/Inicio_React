import React,{Component} from "react";

class MiComponente extends Component{
    render(){

        let receta = {
            nombre: 'Pizza Hawaiana ๐บ',
            ingredientes: ['Tomate', 'Queso', 'Salsa BBQ','Jamรณn York'],
            calorias: 400,
        };

        return (
            <React.Fragment>
                <h1>๐๐ธ๐ต๐ช ๐ผ๐ธ๐ ๐ฎ๐ต ๐๐ธ๐ถ๐น๐ธ๐ท๐ฎ๐ท๐ฝ๐ฎ ๐ท๐พ๐ฎ๐ฟ๐ธ; ๐ต๐ต๐ช๐ถ๐ช๐ญ๐ธ ๐๐ฒ๐๐ธ๐ถ๐น๐ธ๐ท๐ฎ๐ท๐ฝ๐ฎ</h1>
                <hr/>
                <p>{'Receta: ' + receta.nombre}</p>
                <ol>
                    {
                        receta.ingredientes.map((ingredientes, i) => {
                            console.log(ingredientes);
                            return (
                                <li>
                                    {ingredientes}
                                </li>
                            );

                        })
                    }
                </ol>
                <h2> Estoy probando la app de ReactJS que es un poquito diferente al framework de AngularJS. </h2>
            </React.Fragment>
            
        );
    }
}

export default MiComponente;