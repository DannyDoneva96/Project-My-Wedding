
const pic1 = new URL("/public/images/pic1.jpg" ,import.meta.url)
const pic2 = new URL("/public/images/pic2.jpg" ,import.meta.url)
const pic3 = new URL("/public/images/pic3.jpg" ,import.meta.url)

export const About = () => {
    return (
        <div className="BcgAboutUS">
            <div className="wrapper">
                <br />
                <br />
                <br />
                <br />

                <h1 className="h1Aboutus">Our Story </h1>
                <div className="story">
                    <div className="story-1">
                        <div className="storyImg">
                            <img src={pic1} alt="picture" />
                        </div>
                        <h3>Him</h3>
                        <p className="description">lorem ipsum dolor sit amet, consectetur adip non pro id el </p>
                        <p>Some text here Some text hereSome text hereSome text hereSome text hereSome text hereSome text hereSome text hereSome text here</p>

                    </div>
                    <div className="story-1">
                    <div className="storyImg">
                            <img src={pic2} alt="picture" />
                        </div>
                        <h3>Her</h3>
                        <p className="description">lorem ipsum dolor sit amet, consectetur</p>
                        <p>Some text here Some text hereSome text hereSome text hereSome text hereSome text hereSome text hereSome text hereSome text here</p>

                    </div>
                    <div className="story-1">
                    <div className="storyImg">
                            <img src={pic3} alt="picture" />
                        </div>
                        <h3>Us</h3>
                        <p className="description"> Some text hereSome text here</p>
                        <p>Some text here Some text hereSome text hereSome text hereSome text hereSome text hereSome text hereSome text hereSome text here</p>
                    </div>


                </div>
            </div>
        </div>
    )
}