function Avt(prop) {
    return (
        <>
            <h1>Avt</h1>
            <h2>Name:{prop.name}</h2>
            <h2>Roll No. :{prop.id}</h2>
            <h3>Hobby : {prop.data[0]}</h3>
            <h3>Address : {prop.data[1]}</h3>
            <h3>Gender : {prop.data[2]}</h3>
            <h3><img src={prop.link} alt="" /></h3>
            <h1>Status : {prop.status ? "Completed":"Not Completed "}</h1>
        </>
    )
}

export default Avt