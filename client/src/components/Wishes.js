import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react'
import { Wish } from './Wish'
import { ModalMakeWish } from './ModalMakeWish'
import { db } from '../firebase'
import { collection, getDocs, addDoc,updateDoc ,doc} from 'firebase/firestore'

// Import Swiper React components


// Import Swiper styles



// const photo1 = new URL("../../public/images/bbbb.jpg", import.meta.url);

export const Wishes = () => {

    const [wishes, setWishes] = useState([]);
    const [show, setShow] = useState(false)
    const wishRef = collection(db, "wishes");
    //  
    useEffect(() => {

        const getAll = async () => {
            const data = await getDocs(wishRef)
            setWishes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(data)
        }

        getAll()

    }, []);

    const addWishHandler = async (wishData) => {

        await addDoc(wishRef, wishData)
        
    }

    const updateWish= async (id, wishData) => {
        const wishDoc = doc(db, "wishes",id);
        const newData = wishData
        await updateDoc(wishDoc, newData)
    }

    return (

        <div className="WBcg">

            <div className="imTired">
                <h1 className="headingOfBookW" >May all your wishes come true...</h1>
            </div>
            <div className="bodyWish">
                <button onClick={() => setShow(true)} className="WaddBtn wish-button">+Add</button>
                <ModalMakeWish onClose={() => setShow(false)} show={show} addWishHandler={addWishHandler} />

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
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
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
                        ? wishes.map(x => <SwiperSlide><Wish key={x.name} id= {x.id} wishes={x} updateWish={updateWish}  /> </SwiperSlide>)
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