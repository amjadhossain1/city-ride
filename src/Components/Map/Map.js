import React from 'react';
import Header from '../Header/Header';
import './Map.css';

const Map = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p>Hello World</p>
                    </div>
                    <div className="map col-md-8 mt-5">
                        <img src="https://i.ibb.co/4FnQ6Ty/Map.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;