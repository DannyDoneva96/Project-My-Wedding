
export const Guest = (props) => {
    
   
    return(<div>{props.guest.map(guest =><h2>{guest.name}</h2>)}</div>);

}