import React from "react"; // import ali_React from "react"  adı değiştirilebilir
import ReactDOM from "react-dom"; // import  bu_kisma_istedigini_yaz from "react-dom";

import Kart from './componentler/Kart';
import Kollapse from "./componentler/Kollapse_copy";


/*function App()
{
    return (
        <h1>Kullacı bilgileri</h1>
    )
}*/

// 2.yol Component için fonksiyon tanımlama şekli arrow fonksiyonuyla tanımlayabiliriz
// const App = () => {
//     return (<h1>Kullacı bilgileri</h1>)}

// Bootstrap componentlarını kendi kodlarımızda kullanabiliriz. class ları className olarak değiştirmeyi unutma
// img etiketlerini / ile kapat   <img src="..." class="card-img-top" alt="..."/>
//Kartları tekrar tekrar yazmak yerine js olarak oluştrup import et 
// Ayrı özelliklerini props lardan ayarla

// {/* //  Kart classınıı export et */}
// {/* <Kart cardTitle="Ali"/> */}
const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="card-group w-100 ">

                    <div className="col">
                        <Kollapse href="Collapse1">
                            <Kart cardTitle="Ali"
                                cardText="Herhangi bir yazı 1"
                                guncellemeZamani="1 dakika önce"
                                image="https://picsum.photos/id/1/200/300" />
                        </Kollapse>
                    </div>

                    <div className="col">
                        <Kollapse href="Collapse2">
                            <Kart cardTitle="Fatma"
                                cardText="Herhangi bir yazı 2"
                                guncellemeZamani="2 dakika önce"
                                image="https://picsum.photos/id/10/200/300" />
                        </Kollapse>
                    </div>

                    <div className="col">
                        <Kollapse href="Collapse3">
                            <Kart 
                                cardTitle="Murat"
                                cardText="Herhangi bir yazı 3"
                                guncellemeZamani="3 dakika önce"
                                image="https://picsum.photos/id/1002/200/300"
                            />
                        </Kollapse>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />, document.getElementById('secilen_id')
)

