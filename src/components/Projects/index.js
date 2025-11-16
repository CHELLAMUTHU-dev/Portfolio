import theme_pattern from "../../assets/theme_pattern.svg";
import Bookhub from "../../assets/Bookhub.jpg";
import Ecommerce from "../../assets/Ecommerce.jpg";
import food_order from "../../assets/foor_order.png";
import fileManagement from "../../assets/fileManagement.png";
import DoctorDetails from "../../assets/DoctorDetails.png";
import restoCafe from "../../assets/restoCafe.png";
import groceryShop from "../../assets/groceryShop.png";
import customerMangement from "../../assets/customerMangement.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";

const Project = () => {
  const { theme } = useContext(ThemeContext);
  const bgColor = theme === "dark" ? "project-black-bg" : "project-white-bg";

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const projects = [
    {
      title: "Bookhub",
      img: Bookhub,
      link: "https://bookmall.ccbp.tech/",
    },
    {
      title: "E-commerce",
      img: Ecommerce,
      link: "https://ecommerce-smoky-chi-94.vercel.app/",
    },
    {
      title: "Food Order",
      img: food_order,
      link: "https://food-order-nj4o.vercel.app/",
    },
    {
      title: "File Management System",
      img: fileManagement,
      link: "https://filemanagementsystems.netlify.app/",
    },
    {
      title: "Doctor Details",
      img: DoctorDetails,
      link: "https://medicare-five-chi.vercel.app/",
    },
    {
      title: "Resto Cafe",
      img: restoCafe,
      link: "https://rest-taurant.netlify.app/",
    },
    {
      title: "Grocery Shop",
      img: groceryShop,
      link: "https://appstripe.netlify.app/",
    },
    { title: "Customer Management System", img: customerMangement, link: "https://customer-management-orcin.vercel.app/" },
  ];

  return (
    <div id="projects" className={`projects ${bgColor}`}>
      <div className="project-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        partialVisible={false}
        arrows={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Project;
