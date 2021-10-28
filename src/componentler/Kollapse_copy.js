

import React from "react";

class Kollapse extends React.Component {
    //Construcyor oluşturmak zorunlu değil bu şekilde de çalışır
    // this.state = {icerikGoster: false };

    constructor() {
        super();

        this.state = {
            icerikGoster: false
            //icerikGoster: "Gösterildi state le"
        };
    }

    icerikFnk = () => {

        //this.setState({icerikGoster: true})
        this.setState({ icerikGoster: !this.state.icerikGoster })
        //hangisi varsa değilini al. f->t ise t->f
    }

    componentDidMount() {
        console.log("Component oluşturuldu");
    }

    componentDidUpdate() {
        console.log("Component Güncellendi");
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.icerikFnk}>
                    {/* //   Başlık  */}
                    {/*1.yol {this.props.children.props.cardTitle} */}
                    {/* 2.yol map kullanarak */}
                    {React.Children.map(this.props.children, children => children.props.cardTitle)}

                </button>

                {//tek satırlık if doğru ise ? sonrası değilse : sonrası çalışır
                    this.state.icerikGoster ? (
                        <div className="collapse show" >
                            {this.props.children}
                            {/* {this.state.icerikGoster} */}
                            {/* 2.yol map kullanarak */}
                            {React.Children.map(this.props.children,children => children)}
                        </div>
                    ) : null
                }
            </div>
        )
    }

}

export default Kollapse;