
const flowerPicTop = new URL("/public/images/top-right-corner.png", import.meta.url)
const flowerPicBottom = new URL("/public/images/botton-left-corner.png", import.meta.url)
export const Invitation = () => {
    return (<div className="invBck">

        <img className="flowers" src={flowerPicTop} alt="flowers" />
        <img className="btmFlower" src={flowerPicBottom} alt="flowers" />
        <section id="invPage" className="invPage">
          
       
       
        </section>
    </div>)
}