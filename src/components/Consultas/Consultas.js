import React, { Component } from 'react';
import { listarConsultas } from '../../services/consultas';

class Consultas extends Component {
    constructor(props){
        super(props);
        this.state = {
            realizadas: [],
            marcadas: []
        };
    }

    componentDidMount(){
        listarConsultas().then(dados => this.setState(dados));
    }

    render(){
        return(
            <div>
                <h2 className="mt-2">Consultas</h2>
                <div className="row">

                    <div className="col">
                        {/* primeiro card com as informações sobre o número de consultas realizadas */}
                        <div className="card mt-2">

                            {/* primeiro temos o header - título deste card */}
                            <div className="card-header">Realizadas</div>

                            <table className="table">
                                {/* cabeçalho da tabela */}
                                <thead>
                                    <tr>
                                        <th>Especialidade</th>
                                        <th>Qualidade</th>
                                    </tr>
                                </thead>

                                {/* corpo da tabela contendo os dados */}
                                <tbody>
                                    {
                                        this.state.realizadas.map((item, indice) => {
                                            return (
                                                <tr key={indice}>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col">
                        {/* primeiro card com as informações sobre o número de consultas realizadas */}
                        <div className="card mt-2">

                            {/* primeiro temos o header - título deste card */}
                            <div className="card-header">Marcadas</div>

                            <table className="table">
                                {/* cabeçalho da tabela */}
                                <thead>
                                    <tr>
                                        <th>Especialidade</th>
                                        <th>Qualidade</th>
                                    </tr>
                                </thead>

                                {/* corpo da tabela contendo os dados */}
                                <tbody>
                                    {
                                        this.state.marcadas.map((item, indice) => {
                                            return (
                                                <tr key={indice}>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Consultas;