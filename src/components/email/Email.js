import "./email.css"

const Email = () => {
  return (
    <div className="email">
        <h1 className="emailtitle">Save time, save money!</h1>
        <span className="emaildesc">Sign up and we'll send the best deals to you</span>
        <div className="emailcontainer">
            <input type="text" placeholder="Your Email Address" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Email