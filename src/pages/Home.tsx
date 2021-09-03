import { useEffect } from 'react'
import peoples from '../assets/images/icons/peoples.png'
import interactions from '../assets/images/icons/interactions.png'
import tutorials from '../assets/images/icons/tutorials.png'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import NavbarComponent from '../components/Navbar'

const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <>
      <NavbarComponent onClick={() => { }} authProcessLabel="Sign In" linkTo="/login" />
      <section id="main">
        <div className="container-fluid">
          <div className="my-5 row">
            <div className="p-5 text-center col-lg-6">
              <h1 className="pt-5 home-title">
                Welcome to
                <br />
                Crypto Media!
              </h1>

            </div>
            <div className="p-5 col-lg-6 d-flex justify-content-center ">
              <img className="h-auto p-5 w-100" src={peoples} alt="currency.png" />
            </div>
          </div>
          <div className="p-5 my-5 row bg-primary h-50">
            <div className="my-5"></div>
            <div className="mx-auto text-center col-lg-6 col-md-8 col-sm-10">
              <p className="text-light home-subtitle">
                A combination of social media platform integrated with the latest news about cryptocurrency would help our generation to adopt the new era of secure transactions. Do you want to be part of this platform?
              </p>
            </div>
            <div className="my-5">
              <div className="mx-auto text-center col-md-6">
                <Link to="/register" className="btn btn-light text-primary btn-lg">Sign Up now!</Link>

              </div>
            </div>
            <div className="my-5"></div>
          </div>
          <div className="">
            <div className="p-5 row">
              <div className="p-5 col-lg-6">
                <h1 className="text-center home-title">
                  Interact with people
                </h1>
              </div>
              <div className="p-5 col-lg-6 d-flex justify-content-center">
                <img className="h-auto w-75" src={interactions} alt="interactions.png" />
              </div>
            </div>
            <div className="p-5 row bg-primary">
              <div className="p-5 col-lg-6 d-flex justify-content-center">
                <img className="h-auto w-75" src={tutorials} alt="tutorials.png" />
              </div>
              <div className="col-lg-6 p-lg-5">
                <h1 className="text-center home-title text-light">
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