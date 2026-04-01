function Avt(prop) {
    const arr = [1,2,3,4,5];
    const arr1 =["a","b","c","d"]
    const ans = arr.map((el)=><li>{el}</li>)
    const ans1 = arr1.map((el)=><li>{el}</li>)
    return (
        <>
            <h1>Avt</h1>
            <h2>Name:{prop.name}</h2>
            <h2>Roll No. :{prop.id}</h2>
            <h3>Hobby : {prop.data[0]}</h3>
            <h3>Address : {prop.address.a}</h3>
            <h3>Gender : {prop.data[2]}</h3>
            <h3><img src={prop.link} alt="" /></h3>
            <h1>Status : {prop.status ? "Completed":"Not Completed "}</h1>
            <ol>{ans}</ol>
            <ul typeof="square">{ans1}</ul>
        </>
    )
}

export default Avt