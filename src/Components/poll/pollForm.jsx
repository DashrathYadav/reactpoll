import React, { useState } from "react";
import "./PollForm.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function PollForm() {

  const dispatch=useDispatch();
  let id = useSelector((state) => {
    return state.component.loginId;
  });
 

  const [formData, setFormData] = useState({
    question: "",
    options: [{ text: "", count: 0 }],
    category: "",
    subcategories: [], // Array to store subcategories
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleAddOption = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      options: [...prevFormData.options, { text: "", count: 0 }]
    }));
  };

  const handleAddCategory = () => {
    if (formData.category) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        subcategories: [...prevFormData.subcategories, ""],
      }));
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      Question: formData.question,
      Options: formData.options,
      Category: {
        MainCategory: formData.category,
        SubCategories: formData.subcategories,
      },
      creatorId: id,
    };
    console.log(data)
    axios
      .post("https://reactpollbackend.onrender.com/createPoll", data, {
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then((response) => {
        console.log(response.status);

        //redirecting to home page after creation of poll
        dispatch({
          type:"setPage",
          page:"home",
        })
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const categories = [
    "Politics and Government",
    "Technology and Gadgets",
    "Entertainment",
    "Sports and Fitness",
    "Food and Cuisine",
    "Travel and Destinations",
    "Environmental Issues",
    "Health and Wellness",
    "Education and Learning",
    "Social Issues",
    "Business and Economy",
    "Science and Technology",
    "Fashion and Style",
    "Art and Creativity",
    "Relationships and Dating"
  ];

  const submitBtn = (
    <a
      className="btn SignUp--lessMargine"
      onMouseOver={(e) => {
        const btnEl = e.target;
        e.target.addEventListener("mouseover", (event) => {
          const x = event.pageX - btnEl.offsetLeft;
          const y = event.pageY - btnEl.offsetTop;

          btnEl.style.setProperty("--xPos", x + "px");
          btnEl.style.setProperty("--yPos", y + "px");
        });
      }}
      onClick={handleSubmit}
    >
      <span>Submit</span>
    </a>
  );

  return (
    <div className="pollForm--MainContainer">
      <h1>Poll Creator</h1>

      <div className="pollForm--form">
        <input
          type="text"
          name="question"
          placeholder="Question"
          value={formData.question}
          onChange={handleInputChange}
        />
        <br />
        {/* Options */}
        <div className="pollForm--options">
          {formData.options.map((option, index) => (
            <input
              key={index}
              type="text"
              name={`option-${index}`}
              placeholder={`Option ${index + 1}`}
              value={option.text}
              onChange={(e) => {
                const newOptions = [...formData.options];
                newOptions[index].text = e.target.value;
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  options: newOptions
                }));
              }}
            />
          ))}
          <button type="button" onClick={handleAddOption}>
            Add Option
          </button>
        </div>

        <br />
        {/* Categories */}
  
        <div className="pollForm--categories">
          <select
            id="categoryDropdown"
            onChange={handleInputChange}
            name="category"
            value={formData.category}
          >
            <option value="">Select a Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {formData.subcategories.map((subcategory, index) => (
            <input
              className="pollForm--subcategoryinput"
              key={index}
              type="text"
              name={`subcategory-${index}`}
              placeholder={`Subcategory ${index + 1}`}
              value={subcategory}
              onChange={(e) => {
                const newSubcategories = [...formData.subcategories];
                newSubcategories[index] = e.target.value;
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  subcategories: newSubcategories,
                }));
              }}
            />
          ))}
          <br/>
          <button type="button" onClick={handleAddCategory}>
            Add Category
          </button>
        </div>
      </div>
      {submitBtn}
    </div>
  );
}