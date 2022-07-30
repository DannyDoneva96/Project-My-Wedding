const photo1 = new URL("../../public/images/bbbb.jpg", import.meta.url)



export const Wishes = () => {

    return(
       <div className="bodyWish">
         <section>
            <div className="containerWishes">
                <div className="contentWishes">
                    <div className="card">
                        <div className="card-content">
                            <div className="imageW">
                                <img src={photo1} alt="photo1" />
                            </div>
                            <div className="media-icons">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-github"></i>

                            </div>
                            <div className="name-prof">
                                <span className="nameW">Someone</span>
                                <span className="prof">Sister </span>

                            </div>
                          
                            <div className="btnW">
                                <button className="btnWishEdit">Edit</button>
                                <button className="btnWishDel">Delete</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
       
       </div>
    )
}