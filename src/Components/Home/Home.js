import React from "react";
import Nav from "../Nav/Nav";
import "../../Assets/CSS/Home.css";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import AdjustIcon from "@mui/icons-material/Adjust";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Graphicimg from "../../Assets/images/graphic-design.png";
import { ClassNames } from "@emotion/react";
import Prodesignimg from "../../Assets/images/product-design.png";
import Webdesignimg from "../../Assets/images/web-design.png";
import portimg1 from "../../Assets/images/Portfolio-01-768x512.jpg";
import portimg2 from "../../Assets/images/Portfolio-02-768x512.jpg";
import portimg3 from "../../Assets/images/Portfolio-03-768x512.jpg";
import portimg4 from "../../Assets/images/Portfolio-04-768x512.jpg";
import portimg5 from "../../Assets/images/Portfolio-05-768x512.jpg";
import portimg6 from "../../Assets/images/Portfolio-06-768x512.jpg";
import proj1img1 from "../../Assets/images/project-1.png";
import proj1img2 from "../../Assets/images/project-2.png";
import proj1img3 from "../../Assets/images/project-3.png";
import proj2img1 from "../../Assets/images/proj2img1.png";
import proj2img2 from "../../Assets/images/proj2img2.png";
import proj2img3 from "../../Assets/images/Proj2img3.png";

const Home = () => {
  return (
    <>
      <div className="Homeall">
        <Nav />
        <div className="homemain">
          <div className="homecontent1">
            <p className="contenttext">HELLO</p>
            <p className="contenttext2">I AM WEB DEVELOPER</p>
            <div className="content3">
              <input className="homecontinp" placeholder="Email"></input>
              <button className="homecontbut">GET MY RESUME</button>
            </div>
            <p className="contentext">
              * Get my resume directly in your mailbox
            </p>
          </div>
        </div>
        <div className="Homemain2">
          <div className="paracontent">
            <div className="paracont1">
              <p>About me</p>
              <h3>I'M A ReactJS DEVELOPER</h3>
            </div>
            <div className="paracont2">
              <p>
                A React developer is in charge of designing and building user
                interfaces (UIs) and UI components with React, a front-end
                JavaScript library.
              </p>
              <p>
                {" "}
                I create and manage user interfaces for online and mobile apps.
                I create, test, debug, and implement code to fulfil the needs of
                users. To produce effective apps, React developers must be able
                to communicate effectively with project managers, developers,
                customers, testers, and web designers. They should have
                extensive familiarity with JavaScript or Typescript, as well as
                solid arithmetic abilities and a working grasp of debugging
                tools.
              </p>
              <div className="socico">
                <h3>Follow me</h3>
                <div className="socialicons">
                  <LanguageIcon className="icon1" />
                  <TwitterIcon className="icon1" />
                  <AdjustIcon className="icon1" />
                </div>
              </div>
            </div>
          </div>

          <div className="homecont3">
            <div className="homecard">
              <Card className="card1" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="340"
                    image={Graphicimg}
                    alt="green iguana"
                    className="card1img"
                  />
                  <CardContent>
                    <Typography
                      className="cardtitle"
                      color="white !important;"
                      gutterBottom
                      variant="h4"
                      component="div"
                    >
                      Graphic Design
                    </Typography>
                    <Typography
                      className="cardtitle"
                      variant="body2"
                      color="white"
                    >
                      React is a very strong design tool. You can accomplish a
                      lot with it that would be tough to achieve with a typical
                      design programme. Prototyping with actual data sets,
                      developing sophisticated interactions, and establishing
                      shared component libraries are only the beginning.
                    </Typography>
                    <div className="buttonposition">
                      <button className="buttextcard1">→</button>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card className="card2" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="340"
                    image={Webdesignimg}
                    alt="green iguana"
                    className="card2img"
                  />
                  <CardContent>
                    <Typography
                      className="cardtitle"
                      color="white !important;"
                      gutterBottom
                      variant="h4"
                      component="div"
                    >
                      Product Design
                    </Typography>
                    <Typography
                      className="cardtitle"
                      variant="body2"
                      color="white"
                    >
                      Product Designers are responsible for coming up with new
                      product designs that meet the needs and wants of
                      consumers. They will have many duties, such as creating
                      design concepts, drawing ideas to determine which one is
                      best suited for the product, and communicating their plans
                      effectively so engineers can execute them.
                    </Typography>
                    <div className="buttonposition">
                      <button className="buttextcard2">→</button>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card className="card3" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="340"
                    image={Prodesignimg}
                    alt="green iguana"
                    className="card3img"
                  />
                  <CardContent className="cardcont1">
                    <Typography
                      className="cardtitle"
                      color="white !important;"
                      gutterBottom
                      variant="h4"
                      component="div"
                    >
                      Web Design
                    </Typography>
                    <Typography
                      className="cardtitle"
                      variant="body2"
                      color="white"
                    >
                      React is a popular library among web developers thanks to
                      its open-source, elementary design. If you're unfamiliar
                      with its use cases, consider the look and feel of the
                      applications you use daily. Industry leaders like Netflix,
                      Instagram, and Uber Eats used React to create their iconic
                      user interfaces (UIs).
                    </Typography>
                    <div className="buttonposition">
                      <button className="buttextcard1">→</button>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
          {/* Content - 4 */}
          <div className="homemain4">
            <div className="Home4title">
              <h1>MY RESUME</h1>
            </div>
            <div className="Resdetailscolumn">
              <div className="detail1">
                <div>
                  <h3>ReactJs Developer</h3>
                  <p>2022 - Present</p>
                </div>
                <div>
                  <p>
                    A React developer is responsible for the design and
                    implementation of user interfaces (UIs) and UI components
                    using React, a front-end JavaScript library.
                  </p>
                </div>
              </div>
              <div className="Line1"></div>
            </div>
            <div className="Resdetailscolumn">
              <div className="detail1">
                <div>
                  <h3>Wordpress Developer</h3>
                  <p>2020 - 2021</p>
                </div>
                <div>
                  <p>
                    WordPress Developers are responsible for both back-end and
                    front-end development, including creating WordPress themes
                    and plugins. They have different programming skills such as
                    namely PHP, HTML5, CSS3, and JavaScript.
                  </p>
                </div>
              </div>
              <div className="Line1"></div>
            </div>

            <div className="h4buttonposition">
              <button className="Home4Button">Let's Work Together</button>
            </div>
          </div>

          <div className="home5main">
            <div className="Imggrid">
              <div className="gridcont">
                <img className="gridimg" src={proj2img1}></img>
                <h3>Ecommerce</h3>
                <p> Web Design</p>
              </div>

              <div className="gridcont">
                <img className="gridimg" src={proj2img2}></img>
                <h3>Portfolio</h3>
                <p> Web Design</p>
              </div>

              <div className="gridcont">
                <img className="gridimg" src={proj2img3}></img>
                <h3>Sample Ecommerce</h3>
                <p>Web Design</p>
              </div>

              <div className="gridcont">
                <img className="gridimg" src={proj1img1}></img>
                <h3>SCSDOR Website</h3>
                <p> Web Design</p>
              </div>

              <div className="gridcont">
                <img className="gridimg" src={proj1img2}></img>
                <h3>Addison Website</h3>
                <p>Web Design</p>
              </div>

              <div className="gridcont">
                <img className="gridimg" src={proj1img3}></img>
                <h3>EEGAIKULU Website</h3>
                <p>Web Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
