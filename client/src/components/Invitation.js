import { useNavigate } from 'react-router-dom';

const flowerPicTop = new URL("/public/images/top-right-corner.png", import.meta.url)
const flowerPicBottom = new URL("/public/images/left-bottom.png", import.meta.url)

export const Invitation = () => {

    const navigate = useNavigate()

    return (<div className="invBck">

        <img className="flowers" src={flowerPicTop} alt="flowers" />
        <img className="btmFlower" src={flowerPicBottom} alt="flowers" />
        <section id="invPage" className="invPage">
             <div className="wrapInvitation">
            <h6 className="invParagraph">You are invited to the</h6>
            <h1 className="wrapInvitationh1">Wedding</h1>
            <h6 className="invParagraph" >joining the lives of </h6>
            <h2 className="wrapInvitationh2">Miss Daniela Doneva</h2>
            <h3 className="wrapInvitationh3">&</h3>
            <h2 className="wrapInvitationh2">Mr. Kiril Donev</h2>

             <p className="invParagraph"> Saturday December 14th at 2:00p.m. <br/><br/>Grace Church 432Thurston Ave. Greentown </p>
             
             <label htmlFor="buttonrsvp">Leave us yur respond!</label>
             <button onClick={() => navigate('/rsvp')}className="buttonrsvp">RSVP</button>
       </div>
       
        </section>
    </div>)
}