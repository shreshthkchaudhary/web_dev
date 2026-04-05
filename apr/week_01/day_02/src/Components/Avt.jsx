function Avt(props) {
  console.log(props); //const props ={name:"rahul",id:23}

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid red" }}>
      <h1>Name: {props.name}</h1>
      <h2>Id: {props.id}</h2>
      <h3>Hobby: {props.hobby[2]}</h3>
      <img src={props.url} alt="" />
      <h4>Address: {props.city.address}</h4>
      <h5>Status: {props.status ? "Completed" : "Not Completed"}</h5>
    </div>
  );
}

export default Avt;
