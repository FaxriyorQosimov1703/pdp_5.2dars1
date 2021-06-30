import React, { Component } from 'react';
import Header from './Components/Header/Header.js';
import Sidebar from './Components/Content/Sidebar';
import Article from './Components/Content/Articles';
import Footer from './Components/Footer/Footer'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <Header />
                    </div>
                    <div className="card-body">
                        <div className="row ">
                            <div className="col-2 bg-danger">
                                <Sidebar />
                            </div>
                            <div className="col-10">
                                <Article />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
