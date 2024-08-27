import { useState } from "react";
import axios from "axios";
import "./Form.css"; 

const Form = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [category, setCategory] = useState("");
    const [interests, setInterests] = useState([]);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleInterestsChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setInterests([...interests, value]);
        } else {
            setInterests(interests.filter((interest) => interest !== value));
        }
    };

    const handleTermsChange = (event) => {
        setTermsAccepted(event.target.checked);
    };

    const obj = {
        name,
        gender,
        category,
        interests: interests.join(", "),
        termsAccepted: termsAccepted ? "Yes" : "No",
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = 1;

        axios
            .put(`http://localhost:8003/posts/${userId}`, obj)
            .then((res) => {
                console.log(res.data);
                setName("");
                setGender("");
                setCategory("");
                setInterests([]);
                setTermsAccepted(false);
                alert("Submit successfully");
            })
            .catch((error) => {
                console.log(error);
                alert("Submission failed");
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form-card">
                <h2>SIMPLE FORM</h2>

                <div className="form-section">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Enter your name"
                            onChange={handleNameChange}
                        />
                    </label>
                </div>

                <div className="form-section">
                    <label>Gender:</label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={handleGenderChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={handleGenderChange}
                        />
                        Female
                    </label>
                </div>

                <div className="form-section">
                    <label>
                        Category:
                        <select
                            name="category"
                            value={category}
                            onChange={handleCategoryChange}
                        >
                            <option value="">Select Category</option>
                            <option value="Student">Student</option>
                            <option value="Professional">Professional</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                </div>

                <div className="form-section">
                    <label>Interests:</label>
                    <label>
                        <input
                            type="checkbox"
                            value="Coding"
                            checked={interests.includes("Coding")}
                            onChange={handleInterestsChange}
                        />
                        Coding
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Music"
                            checked={interests.includes("Music")}
                            onChange={handleInterestsChange}
                        />
                        Music
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Sports"
                            checked={interests.includes("Sports")}
                            onChange={handleInterestsChange}
                        />
                        Sports
                    </label>
                </div>

                <div className="form-section">
                    <label>
                        <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={handleTermsChange}
                        />
                        I agree to the terms and conditions
                    </label>
                </div>

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Form;




