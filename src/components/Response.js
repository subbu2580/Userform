import axios from "axios";
import { useEffect, useState } from "react";
import './Response.css'; 

const Response = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8003/posts")
            .then((res) => setData(res.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <div className="cards-container">

                {data.map((e, index) => (
                    <div className="card" key={index}>
                        <div className="card-content">
                           <h2>SUBMITTED DATA</h2>

                            <span ><b>Name:</b> {e.name}</span>
                            <span><b>Gender:</b> {e.gender}</span>
                            <span><b>Category:</b> {e.category}</span>
                            <span><b>Interests:</b> {e.interests}</span>
                            <span><b>Terms Accepted:</b> {e.termsAccepted}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Response;
