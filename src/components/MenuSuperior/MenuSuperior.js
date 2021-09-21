import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MenuSuperior extends Component {
    render(){
        return(
            // https://getbootstrap.com/docs/4.0/components/navbar/  
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{padding: '12px'}}>
                <Link to="/" className="navbar-brand">SENAI-SP</Link>
                <button className="navbar-toggler" 
                        type="button" 
                        data-toogle="collapse" 
                        data-target="#navbarNav">
                    <span className="navbar-toogler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Resumo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/consultas" className="nav-link">Consultas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faturamento" className="nav-link">Faturamento</Link>
                        </li>
                    </ul>
                </div> 
            </nav>
        );
    }
}

export default MenuSuperior;