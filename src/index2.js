import React from "react"; // import ali_React from "react"  adı değiştirilebilir
import ReactDOM from "react-dom"; // import  bu_kisma_istedigini_yaz from "react-dom";


// JSX App2 hepsi tek bir div(yani herhangi bir tag) içinde olmalı

// style verirken

function App2() {

    const btn1Deger1 = "Yeni";
    const btn1Deger2= "Buttonum";
    return (
    <div>
        <button>JSX Butonu</button>
        <hr></hr>
        <p>Style verirken önce içiçe iki tane süslü parantez sonra özellik : ve tek tırnak içinde değer verilir. Aralara **virgül** konur</p>
        <p>Ayrıca class isimleri html de class JSX te **className** olarak tanımlanır. Yani html ve javascript attribureleri farklı bazı noktalarda Console dan hata kısmından kontrol edebilirsin</p>
        
        <hr></hr>
        <p>Gitte görmek için eklendim</p>
            <hr></hr>
        <button className="jsxClass" tabIndex="2" type="button" style={{color: 'beige' , backgroundColor: 'purple' , padding: '10px' , border:'2px red solid'}} >JSX Stylli Butonu</button>
            <hr></hr>
            <p>JavaScript ifadeleri  süslü parantezler arasına yazılır. Örneğin {4+4} Bu bir değer veya fonksiyonda olabilir.</p>
        <button className="jsxClass" tabIndex="2" type="button" style={{color: 'beige' , backgroundColor: 'purple' , padding: '10px' , border:'2px red solid'}} >{btn1Deger1+btn1Deger2}</button>
        <button className="jsxClass" tabIndex="2" type="button" style={{color: 'beige' , backgroundColor: 'purple' , padding: '10px' , border:'2px red solid'}} >{btn1Deger1.concat(btn1Deger1)}</button>
        <br></br>
        <br></br>
    </div>
       
    )

}

ReactDOM.render(
    <App2 />, document.getElementById('secilen_id')
)