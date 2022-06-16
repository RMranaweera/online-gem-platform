import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";
import NavBar from "./Navbar/Nav"
  

function required(value) {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
}

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vFirstname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The Firstname must be between 3 and 20 characters.
      </div>
    );
  }
};

const vlastname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The Lastname must be between 3 and 20 characters.
      </div>
    );
  }
};



const vno = (value) => {
  if (value.length < 2 || value.length > 5) {
    return (
      <div className="alert alert-danger" role="alert">
        The HomeNo must be between 2 and 5 characters.
      </div>
    );
  }
};

const vstreet = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The street must be between 3 and 20 characters.
      </div>
    );
  }
};

const vdistrict = (value) => {
  if (value.length < 5 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The District must be between 5 and 20 characters.
      </div>
    );
  }
};

const vzcode = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The Postalcode must be between 3 and 20 characters.
      </div>
    );
  }
};

const vphoneno = (value) => {
  if (value.length <9 || value.length >11) {
    return (
      <div className="alert alert-danger" role="alert">
        The PhoneNo must be 10 numbers
      </div>
    );
  }
};
const vnic = (value) => {
  if (value.length > 11 || value.length <13) {
    return (
      <div className="alert alert-danger" role="alert">
        The NIC must be 10/12 charactors
      </div>
    );
  }
};
const vdlicence = (value) => {
  if (value.length > 10) {
    return (
      <div className="alert alert-danger" role="alert">
        Please upload Driver licence uploaded google drive link
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
const vconpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be Same.
      </div>
    );
  }
};
const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [no, setno] = useState("");
  const [street, setstreet] = useState("");
  const [district, setdistrict] = useState("");
  const [zcode, setzcode] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [nic, setnic] = useState("");
  const [dlicence, setdlicence] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword,setconpassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };

  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };


  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };


  const onChangeno = (e) => {
    const no = e.target.value;
    setno(no);
  };

  const onChangestreet = (e) => {
    const street= e.target.value;
    setstreet(street);
  };

  const onChangedistrict= (e) => {
    const district= e.target.value;
    setdistrict(district);
  };
  
  const onChangezcode = (e) => {
    const zcode = e.target.value;
    setzcode(zcode);
  };

  const onChangephoneno = (e) => {
    const phoneno = e.target.value;
    setphoneno(phoneno);
  };

  const onChangenic = (e) => {
    const nic = e.target.value;
    setnic(nic);
  };

  const onChangedlicence = (e) => {
    const nic = e.target.value;
    setnic(dlicence);
  };

  const onChangepassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeconpassword = (e) => {
    const conpassword = e.target.value;
    setPassword(conpassword);
  };


  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(Firstname,Lastname, email,no,street,district,zcode,phoneno,nic,dlicence,password,conpassword).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };
  
  return (
    <div>
      <NavBar/>
    {/* <div className="col-md-12"> */}
      
      <div className="card card-container">
      <p align="center"><b>Registration - Driver</b></p>
        <img
          src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="firstname"><b>Firstname</b></label>
                <Input
                  type="text"
                  className="form-control"
                  name="firstname"
                  value={Firstname}
                  onChange={onChangeFirstname}
                  validations={[required, vFirstname]}
                />
            </div>
              <div className="form-group">
                <label htmlFor="lastname"><b>Lastname</b></label>
                <Input
                  type="text"
                  className="form-control"
                  name="Lastname"
                  value={Lastname}
                  onChange={onChangeLastname}
                  validations={[required, vlastname]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email"><b>Email</b></label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>
              <br></br>
              <b>Address</b>
             
              <div className="form-group">
                <label htmlFor="no"><b>Home Name/No </b></label>
                <Input
                  type="text"
                  className="form-control"
                  name="no"
                  value={no}
                  onChange={onChangeno}
                  validations={[required, vno]}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="street"><b>Street </b></label>
                <Input
                  type="text"
                  className="form-control"
                  name="street"
                  value={street}
                  onChange={onChangestreet}
                  validations={[required, vstreet]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="district"><b>District </b></label>
                <Input
                  type="text"
                  className="form-control"
                  name="district"
                  value={district}
                  onChange={onChangedistrict}
                  validations={[required, vdistrict]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="zcode"><b>Postal Code </b></label>
                <Input
                  type="text"
                  className="form-control"
                  name="zcode"
                  value={zcode}
                  onChange={onChangezcode}
                  validations={[required, vzcode]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneno"><b>Telephone No </b></label>
                <Input
                  type="text"
                  className="form-control"
                  name="phoneno"
                  value={phoneno}
                  onChange={onChangephoneno}
                  validations={[required, vphoneno]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nic"><b>NIC </b></label>
                <Input
                  type="text"
                  className="form-control"
                  name="nic"
                  value={nic}
                  onChange={onChangenic}
                  validations={[required, vnic]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nic"><b>Driver licence (google drive uploaded link) </b></label>
                <Input
                  type="text"
                  className="form-control"
                  name="dlicence"
                  value={dlicence}
                  onChange={onChangedlicence}
                  validations={[required, vdlicence]}
                />
              </div>


              <div className="form-group">
                <label htmlFor="password"><b>Password</b></label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangepassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="conpassword"><b>Confirm Password</b></label>
                <Input
                  type="password"
                  className="form-control"
                  name="conpassword"
                  value={password}
                  onChange={onChangeconpassword}
                  validations={[required, vconpassword]}
                />
              </div>
              <br></br>
              <div className="form-group">
                 
                <button className="btn btn-primary btn-block"><b>Register</b></button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    {/* </div> */}
    </div>
  );
};

export default Register;