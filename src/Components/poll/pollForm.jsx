import React, { useState } from "react";
import "./PollForm.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function PollForm() {


  let id = useSelector((state) => {
    return state.component.loginId;
  });
 

  const [formData, setFormData] = useState({
    question: "",
    options: [{ text: "", count: 0 }],
    categories: [""],
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      categories: [...prevFormData.categories, ""]
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.userId)
    const data = {
      Question: formData.question,
      Options: formData.options,
      Category: formData.categories,
      creatorId: id
    };
    console.log(data)
    axios
      .post("http://localhost:3000/createPoll", data, {
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
          {formData.categories.map((category, index) => (
            <input
              key={index}
              type="text"
              name={`category-${index}`}
              placeholder={`Category ${index + 1}`}
              value={category}
              onChange={(e) => {
                const newCategories = [...formData.categories];
                newCategories[index] = e.target.value;
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  categories: newCategories
                }));
              }}
            />
          ))}
          <button type="button" onClick={handleAddCategory}>
            Add Category
          </button>
        </div>
      </div>
      {submitBtn}
    </div>
  );
}
