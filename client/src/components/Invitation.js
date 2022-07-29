
const flowerPicTop = new URL("/public/images/top-right-corner.png", import.meta.url)
const flowerPicBottom = new URL("/public/images/left-bottom.png", import.meta.url)
export const Invitation = () => {
    return (<div className="invBck">

        <img className="flowers" src={flowerPicTop} alt="flowers" />
        <img className="btmFlower" src={flowerPicBottom} alt="flowers" />
        <section id="invPage" className="invPage">
          
       
       
        </section>
    </div>)
}