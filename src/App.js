import './App.css';
import { useState, useEffect} from "react";
import Navbar from './components/navbar';
import BrandsList from "./components/home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  var [data1, setData] = useState([]);
  var [tokenRefreshed, setTokenResh] = useState({});
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  var token = null;

  token = localStorage.getItem('kjdToken');
  console.log('Token ', token);

  const RefreshToken = () => {
    console.log('trying to refresh tokenData ');

    fetch('http://localhost:3000/api/generateToken', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {

        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then((resp) => {
        localStorage.setItem('kjdToken', resp.token);
        token = resp.token;
        setTokenResh(resp);
      });

  }

  useEffect(() => {
    if (tokenRefreshed !== {}) {
      console.log('token updated ');
      fetch('http://localhost:3000/api/brands', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token
          }
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw Error(res.statusText);
            }
          })
          .then((res2) => {
            console.log('res2 ', res2)
            if (Array.isArray(res2)) {
              setData(res2);
            } else {
              if (res2.code === "ETIMEDOUT") {
                toast.error("Timed out, please refresh again");
              }
            }
            
            
          }).then(() => setLoading(false))
          .catch((err) => {
            
            toast.error('Unauthorised, click refresh data');
            setError(err);
          });
    }
  }, [tokenRefreshed]);

       
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <div>
        <button className='btn-primary primary-main' onClick={RefreshToken}> Refresh data </button>
      </div>
        <BrandsList brands={data1} />
      </div>
      <ToastContainer position="bottom-center"/>
    </div>
  );
  
}

export default App;
