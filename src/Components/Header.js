import React from "react";
import {Link} from 'react-scroll'

export default function Header() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row backgDesign">
                    <div className="col left">
                        <div>
                            <h1>Datos gráficos acerca del Covid en México</h1>
                            <button className="bannerBtn"><Link  to="tracker" spy={true} smooth={true}>Datos</Link></button>
                        </div>
                    </div>
                    <div className="col right">
                        <div>
                            <h1>Conoce qué tan cercano eres o fuiste con el Covid</h1>
                            <button className="bannerBtn"><Link  to="probabilities" spy={true} smooth={true}>Probabilidades</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
