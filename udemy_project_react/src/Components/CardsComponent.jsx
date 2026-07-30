function CardsComponent({fruits}){
    return(
    <>
        <h1>  This is my cards component ... </h1>
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