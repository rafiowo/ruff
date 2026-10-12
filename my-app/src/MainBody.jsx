import pfp from './assets/pfp101.jpg';

function MainBody(){

    return(
        <>
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