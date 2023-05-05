import image from "../assets/troll-face.png"

const Header=()=>{
    return (
    <header className="header">
        <div className="container">
            <div className="row">
                    <div className="col-6">
                        <div className="branding d-flex align-items-center">
                        <img src={image} className="img-fluid header-img troll-face" width="31.31" alt="troll face" />
                        <h1 className="header-h1 text-capitalize">meme generator</h1>

                        </div>
                    </div>
                    <div className="col-6">
                        <p className="header-text text-capitalize text-end">
                            react course - project 3
                        </p>
                    </div>
            </div>
        </div>
    </header>

    )
}

export default Header