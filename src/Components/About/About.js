import React from "react";
import "../../Assets/CSS/About.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Nav from "../Nav/Nav";
import gautypic from "../../Assets/images/gautypic.jpeg";
import rocket from "../../Assets/images/rocket.png";
import business from "../../Assets/images/business.png";
import herbal from "../../Assets/images/herbal.png";
import sport from "../../Assets/images/sport.png";

const About = () => {
  return (
    <>
      <div className="Aboutmain">
        <Nav />
        <div className="aboutcont">
          <div className="abouttextcont">
            <h3>About me</h3>
            <h1>I'M A ReactJS Developer</h1>
            {/* <h1>GRAPHIC DESIGNER</h1> */}
            <div className="aboutline"></div>
            <p>
              👋 Hello there! I'm Mukesh gauthaman, a passionate React developer with
              a knack for crafting captivating and interactive web experiences.
              🚀 
              <br></br>
              <br></br> 🧑‍💻 My journey in the world of web development began when I
              stumbled upon React, and I've been hooked ever since. With a
              strong foundation in HTML, CSS, and JavaScript, I've honed my
              skills to specialize in building dynamic and responsive user
              interfaces using the power of React.
              <br></br>
               <br></br> 💡 What drives me as a
              developer is the constant pursuit of innovation. I thrive on
              staying up-to-date with the latest trends and best practices in
              the React ecosystem, ensuring that I can deliver cutting-edge
              solutions to my clients and users.
              <br></br>
              <br></br> 🛠️ I have hands-on experience
              in developing scalable and maintainable applications, leveraging
              React's component-based architecture, state management with Redux
              or Context API, and routing with React Router. I'm also
              comfortable integrating APIs, optimizing performance, and ensuring
              cross-browser compatibility. 
              {/* <br></br>
              <br></br>🤝 Collaboration is at the heart of
              my approach. I believe in the power of teamwork, and I enjoy
              collaborating with designers, back-end developers, and
              stakeholders to bring ideas to life. I value open communication
              and am always eager to learn from my peers.
              <br></br>
              <br></br> 🌟 Beyond coding, I'm
              a problem solver at heart, a creative thinker, and a believer in
              user-centric design. I understand that technology should serve
              people, and I'm committed to creating digital experiences that are
              not only functional but also delightful to use.
              <br></br>
              <br></br> 🌐 When I'm not
              crafting code, you can find me exploring the ever-evolving tech
              landscape, contributing to open-source projects, or occasionally
              indulging in a friendly debate about the best state management
              approach in React.
              <br></br>
              <br></br> 📬 Let's connect! Whether you're looking to
              collaborate on a project, discuss React strategies, or just chat
              about the latest developments in the world of web development, I'm
              always open to new connections and opportunities. Feel free to
              reach out through .
              <br></br>
              <br></br> Thanks for
              stopping by, and I look forward to connecting with you in the
              exciting world of React development! 🚀
              <br></br>
              <br></br>✨ Remember to personalize
              this description with your own details, such as your name, contact
              information, and any additional accomplishments or experiences
              that make you unique as a React developer. */}
            </p>

            <div>
              <h2>Follow me</h2>
            </div>
          </div>
          <div className="Aboutimgcont">
            <img className="imgabt" src={gautypic}></img>
          </div>
        </div>
      </div>
      <div className="abtgridcard">
        <div className="about-cardcontent">
          <Card sx={{ maxWidth: 250 }}>
            <CardMedia
              className="cardimg-about"
              component="img"
              height="auto"
              image={rocket}
              alt="green iguana"
              object-fit="cover"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Projects
              </Typography>
              <Typography variant="h3" color="text.secondary">
                3+
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 250 }}>
            <CardMedia
              className="cardimg-about"
              component="img"
              height="auto"
              image={business}
              alt="green iguana"
              object-fit="cover"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Projects
              </Typography>
              <Typography variant="h3" color="text.secondary">
                3+
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 250 }}>
            <CardMedia
              className="cardimg-about"
              component="img"
              height="auto"
              image={herbal}
              alt="green iguana"
              object-fit="cover"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Projects
              </Typography>
              <Typography variant="h3" color="text.secondary">
                3+
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 250 }}>
            <CardMedia
              className="cardimg-about"
              component="img"
              height="auto"
              image={sport}
              alt="green iguana"
              object-fit="cover"
            />
            <CardContent className="card-position">
              <Typography gutterBottom variant="h5" component="div">
                Project
              </Typography>
              <Typography variant="h3" color="text.secondary">
                3+
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>

      <div className="Skills-content">
        <div className="Skill-main-content">
          <h1>MY SKILLS</h1>
          <ul>
            <li>
              <h3>WEB DESIGN</h3>
              <p>
                Amet, consectetur adipiscing elit. <br />
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </li>

            <li>
              <h3>WEB DESIGN</h3>
              <p>
                Amet, consectetur adipiscing elit. <br />
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </li>

            <li>
              <h3>WEB DESIGN</h3>
              <p>
                Amet, consectetur adipiscing elit. <br />
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </li>

            <li>
              <h3>WEB DESIGN</h3>
              <p>
                Amet, consectetur adipiscing elit. <br />
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </li>

            <li>
              <h3>WEB DESIGN</h3>
              <p>
                Amet, consectetur adipiscing elit. <br />
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </li>

            <li>
              <h3>WEB DESIGN</h3>
              <p>
                Amet, consectetur adipiscing elit. <br />
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
