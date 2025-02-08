import axios from "axios";


const handleSubmit = async (e,setResponse,formData) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://middlewares-backend.onrender.com/submit", formData);
      setResponse(res.data);
    } catch (error) {
      setResponse({ message: "Error submitting form" });
    }
  };

  export{handleSubmit}