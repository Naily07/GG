import "../css/index.css"
import React, { useCallback, useContext, useState, useMemo } from "react"
import Player from "../Player"
import { canMove } from "./canMove"
import  {FaReact} from "react-icons/fa"
import { testWin } from "./testWin"
import { Congratulation } from "./congratulation"
import { addSuggestion } from "./addSuggestion"
import { removeSuggestion } from "./removeSuggestion"
import "bootstrap/dist/css/bootstrap.min.css"

const tab = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

function View({element}) {
    const {Player1, Player2} = useContext(PlayerContext)
    if(Player1.deplacement === 0 && Player2.deplacement === 0 ){
        if (Player1.position.indexOf(element)>-1) {
            console.log("Dans index P1" , Player1.position);
            console.log("Element", element);
            return(
            <DivElement element={element} player={Player1} ></DivElement>)
        }
        if (Player2.position.indexOf(element)>-1) {
            console.log("Dans p2", Player2.position);
            console.log("Element", element);
            return(
            <DivElement element={element} player={Player2}  ></DivElement>)
        }
        // return (<DivElement element={element} player={null} ></DivElement>) 
    }
    return (<DivElement element={element} player={null} ></DivElement>)

}

function DivElement(props){
    const [player, setPlayer] = useState(props.player)
    const {Player1, Player2, setting, settingPosition} = useContext(PlayerContext)
    const {element} = props
    console.log("Render DivElement", props.player);
    const setOutPlayer = function(){
        setPlayer(null)
    }
    console.log("Render Divv");
    // console.log("Null element and player", element, player);

    const setInPlayer = function(){
        if(player===null){//Si le div ne contient pas de joueus
            if(Player1.active){//En transparence
                if(canMove(Player1.currentPosition , element)){//Si le currentPosition peut aller dans la position de l'element
                    setPlayer(Player1)
                    // console.log("Move de p1", Player1.currentPosition);
                    setting("Player1", "active", !Player1.active)
                    settingPosition("Player1", "position", element, Player1.currentPosition)
                    setting("Player1", "deplacement", Player1.deplacement + 1)
                    setting("Player1", "clicable", !Player1.clicable)
                    setting("Player2", "clicable", !Player2.clicable)
                    console.log("Atto")
                }
                if(Player1.currentPosition.toString() === element.toString()){ //set Dans son propre div
                    setPlayer(Player1)
                    setting("Player1", "active", !Player1.active)
                }
            }

            else if(Player2.active){    
                if(canMove(Player2.currentPosition , element)){
                    setPlayer(Player2)
                    console.log("Move de p1", Player2.currentPosition);
                    setting("Player2", "active", !Player2.active)
                    settingPosition("Player2", "position", element, Player2.currentPosition)
                    setting("Player2", "deplacement", Player2.deplacement + 1)
                    setting("Player2", "clicable", !Player2.clicable)
                    setting("Player1", "clicable", !Player1.clicable)
                    console.log("Atooo")
                }
                if(Player2.currentPosition.toString() === element.toString()){//Si même position donc setPlayer
                    setPlayer(Player2)
                    console.log("Active", Player2.currentPosition, element);
                    setting("Player2", "active", !Player2.active)
                }
            }
            removeSuggestion()
        }
    }
    
    return(
        <div    
        className={`containBouton ${element}`}
        onClick={setInPlayer}
        >
            {player?<Bouton  id={player.id}  click={setOutPlayer} position={element} player={player}></Bouton>:""}
        </div>
    )
}

function Bouton(props){
    const {Player1, Player2, setting} = useContext(PlayerContext)
    const {player} = props
    const {click} = props
    const {position} = props
    
    /**------------*/
    const handleChangContextActive = function(){
        if(player.id === Player1.id){
            console.log("Player 1");
            if(!Player1.active) { 
                setting("Player1", "active", true)  
                setting("Player1", "currentPosition", position)
                addSuggestion(position)
                setting("Player2", "active", false)
            }
        }else if(player.id === Player2.id){
            if(!Player2.active){
                setting("Player2", "active", true)  //activation de player 2
                setting("Player2", "currentPosition", position) //last position 
                addSuggestion(position)
                setting("Player1", "active", false) //desactivation de player 1
            }
        }
        // console.log("Activation player 2", Player2.active);
        click(player)
    }

    return(<button 
            onClick={Player1.active || Player2.active?null: handleChangContextActive} //Si les deux sont active == hide
            className={player.class}
            disabled={player.id===Player1.id?Player1.clicable:Player2.clicable}><FaReact className="icon"/>
        </button>)            

}
const Reset = React.memo(({children})=>{
    const {Player1, Player2, setting} = useContext(PlayerContext)
    console.log("Maj");
    const resetGame = useCallback(()=>{
        window.location.reload()
        // setting("Player1", "position", ["1", "2", "3"])
        // setting("Player2", "position", ["7", "8", "9"])
        // setting("Player1", "deplacement", 0)
        // setting("Player1", "clicable", true)
        // setting("Player2", "deplacement", 0)
        // setting("Player2", "clicable", false)
    })
    return(
        <button onClick={resetGame}className="reset" >{children}</button>
    )
})

const Player1 = new Player(2, 0, "green", true, ["1", "2", "3"])
const Player2 = new Player(1, 0, "blue" , false, ["7", "8", "9"])

const PlayerContext = React.createContext()

function App(){
    const {Player1, Player2} = useContext(PlayerContext)
    const isPlayer1Win = testWin(Player1.position)
    const isPlayer2Win = testWin(Player2.position)
    // console.log("Array", Player1.position);
    // console.log("Render App");
    // console.log("Win1", isPlayer1Win);
    // console.log("Win2", isPlayer2Win);
    const showWinner = function(isPlayer1Win, isPlayer2Win){
        console.log("Win");
        if(isPlayer1Win || isPlayer2Win)
            return <Congratulation player={isPlayer1Win?Player1:Player2}/>
        return
    }
    return (
    <>  
        <Reset>Rejouer</Reset>
        <div className="container"> 
            {/* <Statistic player={Player1}/> */}
            <div className="contains border-ligne">
            <div className="diagonale">
                    <div className="main-bouton">
                        {tab.map((element)=>{
                            return(
                                <View element={element} key={element} />
                            )
                        })}
                    </div>
            </div>
            </div>
            {/* <Statistic player={Player2}/> */}
        </div>
        {showWinner(isPlayer1Win, isPlayer2Win)}
    </>)
}

function Fanorona2(){
    const [state, setState] = useState({
        Player1,
        Player2,
        setting : ()=>{},
        settingPosition : ()=>{}
    })
    console.log("Render Fanorona");
    const setting = useCallback(function(player, name, value){
        setState((prevState)=>{
            const updatedPlayer = Object.assign({}, prevState[player], {[name]: value })
            return { ...prevState,[player]: updatedPlayer };
        })
    })

    const settingPosition = useCallback(function(player, name, newPos, lastPos){
        setState((prevState)=>{
            let bouton = prevState[player][name]
            // console.log("Bouton Nazy", bouton);
            console.log("Last ", lastPos);
            let p = bouton.indexOf(lastPos.toString())
            console.log("Index de last Pos", p);
            bouton.splice(p, 1, newPos)
            console.log("Bouton Nazy Pusher", bouton);
            const newPlayer = Object.assign({}, prevState[player], {[name]:bouton}) 
            return ({...prevState, [player] : newPlayer })
        })
    })
    
    const value = useMemo(()=>{
        return {...state, setting, settingPosition} 
    }, [state, setting, settingPosition])


    return(
        <PlayerContext.Provider value={value}>
            <App />
        </PlayerContext.Provider>
    )
}

export default Fanorona2