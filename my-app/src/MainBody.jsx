import pfp from './assets/pfp101.jpg';
import pfp1 from './assets/IMG_5385.png'
import pfp2 from './assets/IMG_7319.png'
import bgvideo from './assets/ascii-shi.mp4';

function MainBody(){

    return(
        
        <>
        <div id="main-身体"></div>
        <video className="bg-video" src={bgvideo} autoPlay loop muted playsInline></video>
        <div className="main-body">
            <h3>Hey, I'm Rafi</h3>
        </div>
        <div className="larping-shi">
        <h1 align="left"><b>I like to build cool stuff <br></br>that you never <br></br>even imagined.</b></h1>
        <img className="sexy" src={pfp}></img>
        </div>
        <div className="sexy"></div>
        </>
    );

}
export default MainBody;