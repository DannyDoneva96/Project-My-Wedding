import { useState, useEffect } from 'react'
import { ModalEditWish } from './ModalEditWish';
import { UserAuth } from '../context/AuthContext';

import { db } from '../firebase'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

// const photo1 = new URL("../../public/images/bbbb.jpg", import.meta.url);

export const Wish = ({ wishes, updateWish, deleteWish }) => {

    const { user } = UserAuth();

    const [isVisible, setIsVisible] = useState(false);
    const [show, setShow] = useState(false)
    const [likes, setLikes] = useState({ likes: wishes.likes })
    const [dislikes, setDislikes] = useState({ dislikes: wishes.dislikes })

    const wishRef = collection(db, "wish");
    
    useEffect(() => {
        if (user){
        if (user.email === wishes.owner) {
            setIsVisible(true);
        }
    }
        
    }, []);

    const likesAction = async (id, likesData) => {
        const wishDoc = doc(db, "wishes", id);
        const newData = { likes: Number(likesData) + 1 }
        await updateDoc(wishDoc, newData)
        setLikes(newData)
    }
    const dislikeAction = async (id, dislikeData) => {
        const wishDoc = doc(db, "wishes", id);
        const newData = { dislikes: Number(dislikeData) + 1 }
        await updateDoc(wishDoc, newData)
        setDislikes(newData)
    }

    useEffect(() => {

        const getLikes = async () => {
            const data = await getDocs(wishRef)
            const likesData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setLikes(likesData.likes)
        }

        getLikes()

    }, []);


    return (<section>
        <div className="swiper mySwiper containerWishes">
            <div className="swiper-wrapper contentWishes">
                <div className="swiper-slide card">
                    <div className="card-content">
                        <div className="imageW">
                            <img src={wishes.imageUrl} alt="photo1" />
                        </div>
                        <div className="media-icons">

                            <i onClick={() => { likesAction(wishes.id, wishes.likes) }} className="fa-solid fa-heart">Likes : {wishes.likes}</i>
                            <i onClick={() => { dislikeAction(wishes.id, wishes.dislikes) }}  className="fa-solid fa-heart-crack">Dislike: {wishes.dislikes}</i>

                        </div>
                        <div className="name-prof">
                            <span className="nameW">{wishes.name}</span>
                            <span className="prof">{wishes.related} </span>
                            <p className="something">{wishes.message}</p>
                        </div>

                        <div className="btnW">
                            <button style={{ visibility: isVisible ? 'visible' : 'hidden' }} onClick={() => setShow(true)} className="btnWishEdit">Edit</button>
                            <button style={{ visibility: isVisible ? 'visible' : 'hidden' }} onClick={() => { deleteWish(wishes.id) }} className="btnWishDel">Delete</button>
                            <ModalEditWish onClose={() => setShow(false)} show={show} id={wishes.id} updateWish={updateWish} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}