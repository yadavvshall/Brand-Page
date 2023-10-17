const Navigation = () => {
    return(
        <nav className="container">
        <div className="logo">
          <img src="public/Images/brand_logo.png" alt="" />
        </div>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#home">Location</a></li>
          <li><a href="#home">About</a></li>
          <li><a href="#home">Blog</a></li>
        </ul>

        <button>Login</button>
      </nav>
    )
}

export default Navigation;