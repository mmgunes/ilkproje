import React from "react";
//bu fonksiyonel
const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <p className="card-text"><small className="text-muted">{props.guncellemeZamani}</small></p>
            </div>
        </div>
    )
}

//bu class Component this + render() metodu farklı
//propsların başına **this** ekle

class Card extends React.Component {
    render() {
        return (
        <div className="card">
            <img src={this.props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.props.cardTitle}</h5>
                <p className="card-text">{this.props.cardText}</p>
                <p className="card-text"><small className="text-muted">{this.props.guncellemeZamani}</small></p>
            </div>
        </div>
        )
    }
}

