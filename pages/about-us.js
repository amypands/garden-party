import Head from "next/head";
import Image from "next/image";

export default function About() {
  const images = [
    "https://media.istockphoto.com/photos/firm-handshake-between-two-male-farmers-on-the-background-of-a-wheat-picture-id1156218670?k=20&m=1156218670&s=612x612&w=0&h=QbFGXGb01jSV7_M_eREV73wKVH--1S45cgv6SNauY4k=",
    "https://agriculturistmusa.com/wp-content/uploads/2018/06/Factors-of-harvesting-fruits-and-vegetables.png",
    "https://media.istockphoto.com/photos/cutting-a-flowers-for-my-wife-picture-id485464410?k=20&m=485464410&s=612x612&w=0&h=rlOWYK4LG4tV1nI9ylH9uXTA2VOBpI88WNTcBjqbxw0=",
  ];

  const images2 = ["/self-portrait.jpeg"];

  const images3 = [
    "https://content.thriveglobal.com/wp-content/uploads/2020/03/community.jpg",
    "https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400?k=20&m=1181366400&s=612x612&w=0&h=p-iaAHKhxsF6Wqrs7QjbwjOYAFBrJYhxlLLXEX1wsGs=",
    "https://g.foolcdn.com/editorial/images/558857/getty-growing-cash-making-money-growth-dollar-sign-watering-plant.jpg",
  ];

  const images4 = [
    "https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg",
    "https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/02/02/facebook-ios-revenue-loss_feature.jpg",
    "https://cdn.siasat.com/wp-content/uploads/2021/11/Instagram-1.jpg",
  ];

  return (
    <div className="aboutscroll">
      <div className="banner-container">
        <img src="/strawberrybackground.webp" className="banner-image" />
        <div className="banner-text">
          <h1>WHAT WE DO</h1>
          <p className="aboutusp">
            Garden Party is your go-to marketplace for all things gardening.
            Discover local, handcrafted goods from farmers and artisans like
            yourself, including seeds, plants, tools, and more. Our online store
            is the perfect destination for finding unique garden products
            year-round.
          </p>
          <div>
            <div className="row g-0">
              {images.map((image) => {
                return <img className="aboutimages" key={image} src={image} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="banner-container">
        <img src="/strawberrybackground.webp" className="banner-image" />
        <div className="banner-text">
          <h1>WHO WE ARE</h1>
          <p className="aboutusp">
            Garden Party is your go-to marketplace for all things gardening.
            Discover local, handcrafted goods from farmers and artisans like
            yourself, including seeds, plants, tools, and more. Our online store
            is the perfect destination for finding unique garden products
            year-round.
          </p>
          <div>
            <div className="row g-0">
              {images2.map((image) => {
                return <img className="aboutimages" key={image} src={image} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="banner-container">
        <img src="/strawberrybackground.webp" className="banner-image" />
        <div className="banner-text">
          <h1>OUR MISSION</h1>
          <p className="aboutusp">
            Garden Party is your go-to marketplace for all things gardening.
            Discover local, handcrafted goods from farmers and artisans like
            yourself, including seeds, plants, tools, and more. Our online store
            is the perfect destination for finding unique garden products
            year-round.
          </p>
          <div>
            <div className="row g-0">
              {images3.map((image) => {
                return <img className="aboutimages" key={image} src={image} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="banner-container">
        <img src="/strawberrybackground.webp" className="banner-image" />
        <div className="banner-text">
          <h1>CONTACT US </h1>
          <p className="aboutusp">
            Garden Party is your go-to marketplace for all things gardening.
            Discover local, handcrafted goods from farmers and artisans like
            yourself, including seeds, plants, tools, and more. Our online store
            is the perfect destination for finding unique garden products
            year-round.
          </p>
          <div>
            <div className="row g-0">
              {images4.map((image) => {
                return <img className="aboutimages" key={image} src={image} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
