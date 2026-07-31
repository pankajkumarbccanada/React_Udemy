function CardsComponent({fruits}){
    return(
    <>
        <h1>  This is my cards component and i am uploading on static app by github work flow.
            yes i am doing this for the first time and i am very excited to see the result of this work flow.
        </h1>
        <div>
            {fruits.map((frt)=>(
                <div key={frt.key}>
                    <h2>{frt.value}</h2>
                </div>
            ))}
        </div>
    </>
    );
}
export default CardsComponent;