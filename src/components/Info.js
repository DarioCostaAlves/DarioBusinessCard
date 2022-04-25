import image from '../assets/girl.png'

export default function Info() {
    return(
        <main>
            <img src={image} alt=""/>
            <div>
                <h1>Dário Costa Alves</h1>
                <h5>Frontend Developer</h5>
                <p>dariosite.pt</p>
            </div>
            <div>
                <button>Email</button>
                <button>Linkedin</button>
            </div>
        </main>
    )

}