import peoples from '../assets/images/icons/peoples.png'
import interactions from '../assets/images/icons/interactions.png'
import tutorials from '../assets/images/icons/tutorials.png'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <section id="main">
        <div className="container-fluid">
          <div className="row my-5">
            <div className="col-lg-6 p-5 text-center">
              <h1 className="home-title pt-5">
                Welcome to 
                <br /> 
                Crypto Media!
              </h1>
              
            </div>
            <div className="col-lg-5 d-flex justify-content-center p-5 ">
            <img className="w-100 h-auto" src={peoples} alt="currency.png" />
            </div>
          </div>
          <div className="row bg-primary p-5 h-50 my-5">
            <div className="my-5"></div>
            <div className="text-center col-lg-6 col-md-8 col-sm-10 mx-auto">
              <p className="text-light home-subtitle">
              A combination of social media platform integrated with the latest news about cryptocurrency would help our generation to adopt the new era of secure transactions. Do you want to be part of this platform?  
              </p>
            </div>
            <div className="my-5 row">
              <div className="col-md-6 mx-auto text-center">
                  <Link to="/register" className="btn btn-outline-light btn-lg">Sign Up now!</Link>
                  
              </div>
            </div>
            <div className="my-5"></div>
          </div>

          <div className="my-5">
            <div className="row p-5">
              <div className="col-lg-6 p-5">
                <h1 className="home-title pt-5 text-center">
                  Interact with people
                </h1>
              </div>
              <div className="col-lg-5 d-flex justify-content-center p-5">
                <img className="w-75 h-auto" src={interactions} alt="interactions.png" />
              </div>
            </div>
            <div className="row p-5 bg-primary">
              <div className="col-lg-5 d-flex justify-content-center p-5">
                <img className="w-75 h-auto" src={tutorials} alt="tutorials.png" />
              </div>
              <div className="col-lg-6 p-5">
                <h1 className="home-title pt-5 text-center text-light">
                  Understand the Crypto
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default HomePage