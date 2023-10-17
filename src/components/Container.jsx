const Container = () => {
    return(
        <main className="hero container ">
            <div className="hero-content">
            <h1>Your Feet Deserve the Best</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, unde odit natus architecto deserunt animi!</p>
            <div className="hero-btn">
                <button>Shop</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src="public/Images/shops.png" alt="Shops-logo" />
                    
                </div>


            </div>
            </div>
            <div className="hero-image">
            <img src="public/Images/shoe_image.png" alt="amazon-logo" />
            </div>
        </main>

    )
};

export default Container;