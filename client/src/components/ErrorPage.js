export const ErrorPage = () => {
    const ops = new URL("/public/images/ops.jpg", import.meta.url)

    return (
        <div className="errorPage">
            <h1>Oops! Something went wrong...</h1>
            
        <img className="btmFlower" src={ops} alt="flowers" />


        </div>
    )
}