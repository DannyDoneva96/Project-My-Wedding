import { render } from '@testing-library/react';
import { useState } from 'react'
import { ModalEditWish } from './ModalEditWish';

// const photo1 = new URL("../../public/images/bbbb.jpg", import.meta.url);

export const Wish = ({ wishes, updateWish, deleteWish }) => {

    const [show, setShow] = useState(false)

    // fetchData() is called whenever data is updated.


    return (<section>
        <div className="swiper mySwiper containerWishes">
            <div className="swiper-wrapper contentWishes">
                <div className="swiper-slide card">
                    <div className="card-content">
                        <div className="imageW">
                            <img src={wishes.imageUrl} alt="photo1" />
                        </div>
                        <div className="media-icons">

                            <i  class="fa-solid fa-heart">Likes : {wishes.likes} </i>
                            <i  class="fa-solid fa-heart-crack">Dislike: {wishes.dislikes}</i>

                        </div>
                        <div className="name-prof">
                            <span className="nameW">{wishes.name}</span>
                            <span className="prof">{wishes.related} </span>
                            <p className="something">{wishes.message}</p>
                        </div>

                        <div className="btnW">
                            <button onClick={() => setShow(true)} className="btnWishEdit">Edit</button>
                            <button onClick={() => { deleteWish(wishes.id) }} className="btnWishDel">Delete</button>
                            <ModalEditWish onClose={() => setShow(false)} show={show} id={wishes.id} updateWish={updateWish} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}