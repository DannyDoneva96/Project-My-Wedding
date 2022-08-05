import {useState} from 'react'
import {ModalEditWish} from './ModalEditWish';

// const photo1 = new URL("../../public/images/bbbb.jpg", import.meta.url);

export const Wish = ({wishes}) => {

     const [show,setShow] =useState(false)

    return (<section>
        <div className="swiper mySwiper containerWishes">
            <div className="swiper-wrapper contentWishes">
                <div className="swiper-slide card">
                    <div className="card-content">
                        <div className="imageW">
                            <img src={wishes.imageUrl} alt="photo1" />
                        </div>
                        <div className="media-icons">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-github"></i>

                        </div>
                        <div className="name-prof">
                            <span className="nameW">{wishes.name}</span>
                            <span className="prof">{wishes.related} </span>
                            <p className="something">{wishes.message}</p>
                        </div>

                        <div className="btnW">
                            <button onClick={()=>setShow(true)}className="btnWishEdit">Edit</button>
                            <button className="btnWishDel">Delete</button>
                            <ModalEditWish onClose = {()=>setShow(false)} show={show}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}