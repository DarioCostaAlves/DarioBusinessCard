import fb from '../assets/facebook.png'
import tt from '../assets/twitter.png'
import gh from '../assets/github.png'
import it from '../assets/instagram.png'

export default function Footer() {
    return(
        <footer>
            <img src={tt} alt=""/>
            <img src={fb} alt=""/>
            <img src={it} alt=""/>            
            <img src={gh} alt=""/>            
        </footer>
    )

}