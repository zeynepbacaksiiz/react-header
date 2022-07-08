
import { Link } from 'react-router-dom';
// import moment from  "moment";
import './style.css';
function Card({item}) {
  return (




    <div className="col-md-3 ghj p-0 " >

      <Link to="/">
        <div className="card border-0" style={{ width: "18rem" }}>
          <img src="https://productimages.hepsiburada.net/s/32/375/10354045747250.jpg" style={{ width: "250px", height: "200px" }} alt=""></img>
          {/* <h5 style={{ textAlign: "LEFT" }} className="pl-3"> {moment(item.createdAt).format('DD/MM/YYYY')}  </h5> */}
          <div className="card-body">
            <h5 className="card-title">  <b>{item.title} </b> </h5>
            <h6>{item.price} </h6>
            <button className="btn btn-group mt-3" style={{ backgroundColor: "#d53f88" }}>Sepete ekle</button>

          </div>
        </div>
      </Link>
    </div>



  )
}

export default Card