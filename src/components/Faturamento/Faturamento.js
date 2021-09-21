import React, { Component } from 'react';
import { consultarFaturamento } from '../../services/faturamento';

class Faturamento extends Component {
    constructor(props){
        super(props);
        this.state = {
            detalhamento: []
        };
    }

    componentDidMount(){
        consultarFaturamento().then(dados => this.setState(dados));
    }

    render(){
        return (
            <div>
                <h2 className="mt-2">Faturamento</h2>

                <div className="row">

                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header">
                                Total por forma de pagamento
                            </div>
                                
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.detalhamento.map((detalhe, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{detalhe.descricao}</td>
                                                <td>{detalhe.valor}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Faturamento