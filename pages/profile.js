import Head from "next/head";
import Image from "next/image";

export default function Profile() {
  const communityImage = [
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  ];

  return (
    <div className="container">
      <div className="row profileside">
        <div className="col-md-8">
          <div className="row leftside">
            <div className="col-md-6">
              <img
                className="profileimage"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              ></img>
            </div>
            <div className="col-md-6">Username </div>
          </div>
          <div className="profilelist">
            <div>
              <h3>Buying</h3>
              <ul>
                <li>3 lbs tomatoes</li>
                <li>2 lbs carrots</li>
                <li>6 lbs lettuce</li>
              </ul>
            </div>
            <div>
              <button className="btn btn-outline-success">Add More</button>
            </div>
          </div>

          <div className="profilelist">
            <div>
              <h3>Selling</h3>
              <ul>
                <li>1 lb oregano</li>
                <li>2 lbs raspberries</li>
                <li> 1lb spinach</li>
              </ul>
            </div>
            <div>
              <button className="btn btn-outline-success">Add More</button>
            </div>
          </div>
          <div className="profilelist">
            <div>
              <h3>My Recipes</h3>
              <ul>
                <li>Spaghetti</li>
                <li>Mushroom Casserole</li>
                <li>Fresh Salad</li>
              </ul>
            </div>
            <div>
              <button className="btn btn-outline-success">Add More</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          My Community
          <div className="row">
            {communityImage.map((image, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card mb-4 box-shadow">
                    <img
                      className="card-img-top"
                      data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                      alt="Thumbnail [100%x225]"
                      style={{
                        height: "225px",
                        width: "100%",
                        display: "block",
                        objectFit: "cover",
                      }}
                      src={image}
                      data-holder-rendered="true"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
