import "./Banner.css";

function Banner(props) {
    //<img src="https://irp.cdn-website.com/33406c6e/dms3rep/multi/cuscuz-e4bf1d4e.jpg"/>
    return ( 
        <figure className="banner">
            <img src={props.imagem}/>
            <figcaption id="descricao">{props.legenda}</figcaption>
        </figure>
    )
}
export default Banner;