import React from "react";


const Card = (props) => {
   // console.log(props);
    return (
        /*<div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title 1</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>*/

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

// Card.varsayilanprop={
//     cardTitle: "Varsayılan getirildi. Boş bıraktınız"
// }

export default Card;


/*
First Class Fonksiyonlar

const Test= function(){
    console.log("Test First Function Class");
}

Test();

*/