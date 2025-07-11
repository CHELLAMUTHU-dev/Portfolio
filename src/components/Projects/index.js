import theme_pattern from "../../assets/theme_pattern.svg";
import Bookhub from "../../assets/Bookhub.jpg";
import Ecommerce from "../../assets/Ecommerce.jpg";
import food_order from "../../assets/foor_order.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import "./index.css";

const Project = () => {
  const {theme} = useContext(ThemeContext);
  const bgColor = theme === "dark" ? "project-black-bg" : "project-white-bg";
  return(
  <div id="projects" className={`projects ${bgColor}`}>
    <div className="project-title">
      <h1>Projects</h1>
      <img src={theme_pattern} alt="" />
    </div>
    <ul className="project-list">
      <li className="project">
        <a
          href="https://bookmall.ccbp.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Bookhub} alt="" className="book-hub" />
          <p className="project-name">Bookhub</p>
          <details>
            <summary>Show More</summary>
            <p>
              BookHub is a book store website.
              <br />
              It is a web application that allows users to search for books and
              view their details.
            </p>
            <h3 style={{ marginTop: "20px" }}>user Data:</h3>
            <div>
              <p className="user-data">Username : rahul</p>
              <p className="user-data">Password : rahul@2021</p>
            </div>
          </details>
        </a>
      </li>
      <li className="project">
        <a
          href="https://ecommerce-smoky-chi-94.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Ecommerce} alt="" className="e-commerce" />
          <p className="project-name">E-commerce</p>
          <details>
            <summary>Show More</summary>
            <p>
              E-commerce is a online Grocery purchase website. It is a web
              application that allows users to search for grocery and view their
              details.Its allows users to buy grocery products.
            </p>
            <h3 style={{ marginTop: "20px" }}>user Data:</h3>
            <div>
              <p className="user-data">Username : own credential</p>
              <p className="user-data">Password : own credential</p>
            </div>
          </details>
        </a>
      </li>
      <li className="project">
        <a
          href="https://food-order-nj4o.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={food_order} alt="" className="e-commerce" />
          <p className="project-name">Food Order</p>
          <details>
            <summary>Show More</summary>
            <p>
              FoodOrder is an online food order website for certain cuisines. It
              is a web application that allows users to search for food items
              and view their details.In addition to that, it also allows users
              to place orders for food items. Users can also track their orders
              and make payments using Razorpay. This website also features an
              admin panel that allows you to add and remove food items.
            </p>
            <h3 style={{ marginTop: "20px" }}>user Data:</h3>
            <div>
              <p className="user-data">Username : own credential</p>
              <p className="user-data">Password : oen credential</p>
            </div>
          </details>
        </a>
      </li>
    </ul>
  </div>
)
}
export default Project;
