import "./Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons'

function Card(){
    let icones =[faHeart, faComment, faPaperPlane];
    let nomes =["a", "b", "c"];
    return (
        <div className="card">
            <img src="https://i.pinimg.com/564x/0e/e9/e2/0ee9e2274104fe65d38e814ad28b4730.jpg" alt="Avatar" width="100%"/>

            <div className="flex-start">
               {icones.map((item, index) =>
                    <FontAwesomeIcon key={index} icon={item}/>
               )}
            </div>

            <div className="container">
                <p><b>Life is an eternal rollercoaster.</b></p>
            </div>

            {/* <ul>
            {nomes.map((nome) => <li>{nome}</li>)}
            </ul> */}
        </div>
    )
}

export default Card;