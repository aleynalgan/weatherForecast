import "./App.css";
import Anasayfa from "./Anasayfa";
import axios from "axios";

import image1 from "./weather.png"

function App() {
    return ( 
    <div>
        <div className="header">
            <h5>weatherUP</h5>
            <ul>
                <li>
                    <a>Anasayfa</a>
                    <a>Hava Durumu</a>
                    <a>Haberler</a>
                    <a>Meteoroloji</a>
                    <a>Hakkında</a>
                </li>
            </ul>
        <button>Login</button>
        </div>
    <div className="content">

            <div className="left-section">
                <h1>BUGÜN HAVA NASIL?</h1>
                <button>KEŞFET</button>
            </div>

            <div className="image">
                 <img src= {image1} />
            </div>
    </div>
      <Anasayfa/>
      
    </div>
    );
    }

export default App;