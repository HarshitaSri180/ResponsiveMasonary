import React from "react";

// import './style.css';
import Group from "../../assets/images/Group.svg";

function index() {
  return (
    <div>
     
        <div className="container-fluid">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
              <a
                href="/"
                className="d-inline-flex link-body-emphasis text-decoration-none"
              >
                <img src={Group} />
              </a>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 link-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  About
                </a>
              </li>
            </ul>

            <div className="col-md-3 text-end">
              <button type="button" className="btn btn-outline-primary me-2">
                Login
              </button>
              <button type="button" className="btn btn-primary">
                Sign-up
              </button>
            </div>
          </header>
        </div>

     <div className="Banner">
      
     </div>
     {/* <div className="container">
      <div className="row">
        <div className="col-6 col-sm-12 col-md-6">
          <h6>Our Mission</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatem ducimus 
            laboriosam tempore voluptas exercitationem, consequuntur quos numquam molestias consectetur, natus rem cumque! Facilis s
            imilique in numquam provident! Accusantium, nobis!</p>
        </div>
        <div className="col-6 col-sm-12 col-md-6">
          <img src={groupImg}/>
        </div>
      </div>
     </div> */}
    </div>
  );
}

export default index;
