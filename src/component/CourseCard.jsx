import React, { useState, useEffect } from "react";
import ReactImage from "../assets/react.png";
import "../style/CourseCard.css";
import { Link } from "react-router-dom";
import IMAGES from "./Images";

const CourseCard = ({ data, head }) => {
  const [sortedData, setSortedData] = useState([...data]); // State to hold sorted data
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search term
  const [filteredData, setFilteredData] = useState([...data]); // State to hold filtered data

  // Function to sort courses based on selected criteria and order
  const handleSortChange = (e) => {
    const sortCriteria = e.target.value;
    let sortedResult = [...filteredData]; // Sort filtered data

    if (sortCriteria === "title") {
      sortedResult.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortCriteria === "price") {
      sortedResult.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else if (sortCriteria === "description") {
      sortedResult.sort((a, b) => a.description.localeCompare(b.description));
    }

    setSortedData(sortedResult);
  };

  // Function to handle search input changes and filter data accordingly
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
  };

  useEffect(() => {
    const results = sortedData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.instructor.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );
    setFilteredData(results);
  }, [searchTerm, sortedData]);

  return (
    <>
      <header className="header">
        <div className="sort-container">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" onChange={handleSortChange}>
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="description">Description</option>
          </select>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </header>
    
      <div className="headClass">
        <h1>{head}</h1>
      </div>

      <div className="course-card-container">
        {filteredData.map((item, index) => (
          <div className="course-card" key={index}>
            <img src={item.img} alt={item.title} className="course-image" />
            <div className="course-details">
              <p className="course-title">{item.title}</p>
              <p className="instructor">
                Instructor:{" "}
                <span className="instructor-name">{item.instructor}</span>
              </p>
              <p className="description">Description: {item.description}</p>
              <p className="description">Course Type: {item.course} </p>
              <p className="price">Price: {item.price}</p>
              <Link to={`/moredetails/${item.id}`} className="more-info-link">
                <button className="more-info-button">More Info</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseCard;
