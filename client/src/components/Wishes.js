import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  } from 'swiper';
import { UserAuth } from '../context/AuthContext';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react'
import { Wish } from './Wish'
import { ModalMakeWish } from './ModalMakeWish'
import { db } from '../firebase'
import { collection, getDocs, addDoc,updateDoc ,doc,deleteDoc} from 'firebase/firestore'
import {  useNavigate } from 'react-router-dom';


// Import Swiper React components


// Import Swiper styles



// const photo1 = new URL("../../public/images/bbbb.jpg", import.meta.url);

export const Wishes = () => {

    const { user } = UserAuth();

    const [isVisible, setIsVisible] = useState(false);

    const [wishes, setWishes] = useState([]);
    const [show, setShow] = useState(false)
    const wishRef = collection(db, "wishes");
    const navigate = useNavigate();

    useEffect(() => {

        const getAll = async () => {
            const data = await getDocs(wishRef)
            setWishes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getAll()

    }, [wishes]);

    const addWishHandler = async (wishData) => {

        await addDoc(wishRef, wishData)
        
    }
      const deleteWish = async(id) =>{
        const wishDoc = doc(db, "wishes",id); 
         await deleteDoc(wishDoc)
      }

    const updateWish= async (id, wishData) => {
        const wishDoc = doc(db, "wishes",id);
        const newData = wishData
        await updateDoc(wishDoc, newData)
    }
   
    useEffect(() => {
        if (user) {
            setIsVisible(true);
        }
        
    }, []);


    return (

        <div className="WBcg">

            <div className="imTired">
                <h1 className="headingOfBookW" >May all your wishes come true...</h1>
            </div>
            <div className="bodyWish">
                <button style={{ visibility: isVisible ? 'visible' : 'hidden' }} onClick={() => setShow(true)} className="WaddBtn wish-button">+Add</button>
                <ModalMakeWish onClose={() => setShow(false)} show={show} addWishHandler={addWishHandler} user={user} />

                {/* <section>
                    <div className="swiper mySwiper containerWishes">
                        <div className="swiper-wrapper contentWishes">
                            <div className="swiper-slide card">
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
                                        <span className="nameW">Elizabeth Miler</span>
                                        <span className="prof">Sister </span>
                                        <p className="something">I wish you both endless love</p>
                                    </div>
                                    <div className="btnW">
                                        <button className="btnWishEdit">Edit</button>
                                        <button className="btnWishDel">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >

                    {wishes.length > 0 && !undefined
                        ? wishes.map(x => <SwiperSlide> <Wish key={x.name} wishes={x} deleteWish={deleteWish} updateWish={updateWish} /> </SwiperSlide>)
                        : <p className="nowishes" >No Wishes yet...</p>
                    }
                </Swiper>
                {/* <section>
                    <div className="swiper mySwiper containerWishes">
                        <div className="swiper-wrapper contentWishes">
                            <div className="swiper-slide card">
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
                                        <p className="something">I wish you both endless love</p>
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
                <section>
                    <div className="swiper mySwiper containerWishes">
                        <div className="swiper-wrapper contentWishes">
                            <div className="swiper-slide card">
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
                                        <p className="something">I wishhhhhhhhhhhhhhhhhhh</p>
                                    </div>
                                    <div className="btnW">
                                        <button className="btnWishEdit">Edit</button>
                                        <button className="btnWishDel">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </div>
    )
}