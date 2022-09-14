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

const array=[{"Name":"Danny", "imageUrl":"https://www.wed2b.com/media/images/category/bridesmaids/bridesmaid-dresses-m.jpg","message":"I wish you happiness!","related":"Sister"} ,
{"Name":"Lizzy", "imageUrl":"https://th.bing.com/th/id/OIP.3_wTp4nffXIcHAAuLWa4HwHaLH?pid=ImgDet&rs=1","message":"I wish you all the best!","related":"Sister"} ,
{"Name":"Barbara", "imageUrl":"https://i.pinimg.com/originals/c4/9a/39/c49a39e7e609505f38fe91a1723dd0c6.jpg","message":"I wish you lots of kids!","related":"Sister"} ,
{"Name":"Damon", "imageUrl":"https://i.pinimg.com/originals/1e/b6/a0/1eb6a0bf91551a79ad1b8ae7602d5617.jpg","message":"I wish you happiness!","related":"Brother"} 
]


 const photo1 = new URL("../../public/images/bbbb.jpg", import.meta.url);

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
    }, []);
    const addWishHandler = async (wishData) => {
        wishData.owner = user.email;
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
                        ? wishes.map(x => <SwiperSlide>
                             <Wish key={x.name} wishes={x} deleteWish={deleteWish} updateWish={updateWish} /> </SwiperSlide>)
                        // : <p className="nowishes" >No Wishes yet...</p>
                        :  array.map(x => <SwiperSlide>  <Wish key={x.name} wishes={x} deleteWish={deleteWish} updateWish={updateWish} /> </SwiperSlide>)

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