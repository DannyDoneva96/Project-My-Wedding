import {useState} from 'react'



export const ModalMakeWish = (props) => {

    const [wishes,setWishes]=useState({
        name:'',
        imageUrl: '',
        related: '',
        message: '',
        likes:0,
        dislikes:0,
    });

    
    const onSubmit = (e) =>{
        props.addWishHandler(wishes)
        props.onClose()
    }

    
    const onChange=(e)=>{
        setWishes(state=>({
            ...state,
            [e.target.name]:e.target.value
        }))
    }

    if (!props.show) {
        return null;
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                
                <div className="modal-header">
                    <h4 className="modal-title"> Write Your Wish here! </h4>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label for="name">Name</label>
                        <input type="text" placeholder="Name" name="name"  onChange={onChange} value={wishes.name}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label for="imageUrl">Photo</label>
                        <input type="text" placeholder="imageUrl" name="imageUrl" onChange={onChange} value={wishes.imageUrl}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label for="related">Related</label>
                        <input type="text" placeholder="related" name="related" onChange={onChange} value={wishes.related}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <label for="message">Message</label>
                        <input type="text" placeholder="message" name="message" onChange={onChange} value={wishes.message}></input>
                        <span className="bar"></span>

                    </div>
                </div>
                <div className="modal-footer"><button  type="submit" onClick={onSubmit} className="modal-button">SEND</button>
                    <button onClick={props.onClose} type="button" className="modal-button">CLOSE</button>
                </div>
            </div>
        </div>
    )
}