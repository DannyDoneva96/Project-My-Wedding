import {useState} from 'react'


export const ModalEditWish = ({id,updateWish,show,onClose}) => {

    

    const [editWishes,setEditWishes]= useState({
        name:'',
        imageUrl: '',
        related: '',
        message: '',
    });

if (!show){
        return null;
    }
    const onSubmit = (e) =>{
        updateWish(id,editWishes)
        onClose()
    }
    const onChange=(e)=>{
        setEditWishes(state=>({
            ...state,
            [e.target.name]:e.target.value
        }))
    }

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e=>e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Eddit Your Wish here! </h4>
                </div>
                <div className="">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Name" name="name"  onChange={onChange} value={editWishes.name}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="imageUrl" name="imageUrl" onChange={onChange} value={editWishes.imageUrl}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="related" name="related" onChange={onChange} value={editWishes.related}></input>
                        <span className="bar"></span>

                    </div>
                    <div className="">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="message" name="message" onChange={onChange} value={editWishes.message}></input>
                        <span className="bar"></span>

                    </div>
                
                <div className="modal-footer"><button type="submit" onClick={onSubmit} className="modal-button">SEND</button>
                    <button  type="button" className="modal-button" onClick={onClose}>CLOSE</button>
                </div>
            </div>
        </div>
    )
}