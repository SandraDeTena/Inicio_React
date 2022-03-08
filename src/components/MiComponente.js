import React,{Component} from "react";

class MiComponente extends Component{
    render(){

        let receta = {
            nombre: 'Pizza Hawaiana 🌺',
            ingredientes: ['Tomate', 'Queso', 'Salsa BBQ','Jamón York'],
            calorias: 400,
        };

        return (
            <React.Fragment>
                <h1>𝓗𝓸𝓵𝓪 𝓼𝓸𝔂 𝓮𝓵 𝓒𝓸𝓶𝓹𝓸𝓷𝓮𝓷𝓽𝓮 𝓷𝓾𝓮𝓿𝓸; 𝓵𝓵𝓪𝓶𝓪𝓭𝓸 𝓜𝓲𝓒𝓸𝓶𝓹𝓸𝓷𝓮𝓷𝓽𝓮</h1>
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