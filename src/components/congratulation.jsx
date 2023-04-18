import "bootstrap/dist/css/bootstrap.min.css"
import "../css/congratulation.css"
import { Reset } from "./Reset"
export function Congratulation(props){
    const {player} =props
    return(
        <div className="container">
            <div className="card col-lg-12 ">
                <ul className="statistique">
                    <li> Numero du joueur : {player.id}</li>
                    <li> Deplacement du joueur : {player.deplacement}</li>
               </ul>
                <p className="msg">Felicitation</p>
            </div>
        </div>
    )
}