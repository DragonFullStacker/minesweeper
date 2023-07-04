import React from "react";
import { Link } from "react-router-dom";
const imageUrl =
    "https://res.cloudinary.com/dirwn9yno/image/upload/v1664379811/getblack/istockphoto-1167270974-612x612_kycpgo.jpg";

function Careers() {
    return (
        <div
            style={{ background: `url(${imageUrl}) center center / cover no-repeat` }}
            className="vendors-img career-pos"
        >
            <div className="career_col-1">
                <header className="">
                    <h1 className="">
                        Join Our Team
                    </h1>
                    <p className="">
                        GetBlack is revolutionalizing the way African goods and products are been showcased to the world.
                    </p>
                    <p className="">
                        We are making it easy to manage your sales and deliver to your desired location.
                    </p>
                </header>
            </div>

            <div className="">
                <div className="">
                    <div className="">
                        <h1 className="">
                            Ready for the next adventure of your life?
                        </h1>
                    </div>
                </div>
                <div className="">
                    <div className="career_btn-cont">
                        <Link
                            to="/career-roles"
                            className="career_btn"
                        >
                            View all open roles
                        </Link>
                    </div>
                </div>
            </div>




        </div>




    );
}

export default Careers;
