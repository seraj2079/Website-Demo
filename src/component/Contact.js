import React,{useState} from 'react';
import "./nav.css";
import database from '../firebase';



const initData ={
  Name:"",
  number:"",
  email:"",
  message:""
}

const Contact = () => {
  const [state, setState] = useState(initData);
  const{Name, number, email, message}=state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
}
 console.log("//////////", state)


 const handleSubmit = (e) =>{

  database.ref("data").push(state,(err)=>{
    if(err)
    {
      alert("data not insert")
    }
    else{
      alert("data gaya")
    }
  })
   e.preventDefault();
}


  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact US</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name='Name'
                  value={Name ||""}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  name='number'
                  value={number || ""}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter your number" />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name='email'
                  value={email || ""}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="email@example.com" />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name='message'
                  value={message || ""}
                  onChange={handleChange}
                  id="exampleFormControlTextarea1"
                  rows="3">
                </textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;