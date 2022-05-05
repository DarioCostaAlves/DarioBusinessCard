import image from '../assets/girl.png'
import icon from '../assets/Icon.png'
import link from '../assets/Vector.png'

export default function Info() {
    return(
        <main>
            <img className="img--avatar" src={image} alt=""/>
            <div className="info">
                <h1>Dário Costa</h1>
                <h5>Frontend Developer</h5>
                <p>dariosite.pt</p>
            </div>
            <div>
                <button className="btn-email">
                    <img src={icon} alt=""/>
                    Email
                </button>
                <button className="btn-linkedin">
                    <img src={link} alt=""/>
                    Linkedin
                </button>
            </div>
        </main>
    )

}