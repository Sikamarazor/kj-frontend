import { Link } from "react-router-dom";
import Navbar from "./navbar";
import './AddBrand.css';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddBrand() {

  const [companyName, setCompanyName] = useState("");
  const [companyIndustry, setCompanyIndustry] = useState("");
  const [companyScore, setCompanyScore] = useState("");

  const token = localStorage.getItem('kjdToken');

  const saveData = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/api/addbrands', {
          method: "POST",
          body: JSON.stringify({
              companyName: companyName,
              companyIndustry: companyIndustry,
              companyScore: companyScore
          }),
          headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token
          }
      }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res.statusText;
        }
      })
      .then((res2) => {
        toast(res2.response);
        setCompanyName("");
      }).catch((err) => {
        toast.error(err);
      });
  }

    return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="input">
          <label className="label">Company name: </label>
          <input className="field" type="text" onChange={(e) => {setCompanyName(e.target.value)}}/>
        </div><br></br>
        <div className="input">
          <label className="label">Company industry: </label>
          <input className="field" type="text" onChange={(e) => {setCompanyIndustry(e.target.value)}}/>
        </div><br></br>

        <div className="input">
          <label className="label">Company score: </label>
          <input className="field" type="text" onChange={(e) => {setCompanyScore(e.target.value)}}/>
        </div><br></br>
        <div>
        <hr></hr>
        <button className='btn-primary primary-main' onClick={saveData}> Save </button>
      </div>
      </div>
      <ToastContainer position="bottom-center"/>
    </div>
  );
}

export default AddBrand;

