import axios from 'axios';

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:8000/api/register/', formData);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
