import {Link } from 'react-router-dom'
import {useEffect,useState} from 'react'
import {getAll} from '../services/wishService'
import {Wish} from './Wish'
// const photo1 = new URL("../../public/images/bbbb.jpg", import.meta.url);

export const Wishes = () => {

    const [comments,setComments]=useState([]);

    useEffect(() => {
         getAll()
         .then(resul=>{setComments(resul)})
    },[])

    return (
        <div className="WBcg">
           
            <div className="imTired"> 
                <h1 className="headingOfBookW" >May all your wishes come true...</h1>
            </div>
            <div className="bodyWish">   
                     <button className="WaddBtn"><Link className="wish-button" to="/create">+Add</Link></button>

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
                {comments.length>0
                       ?comments.map(x=><Wish comment={x}/>)
                       : <p className="noComments" >No Wishes yet...</p>
                }
                   
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