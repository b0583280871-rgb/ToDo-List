import axios from 'axios';

//axios.defaults.baseURL = "http://localhost:5296";

const apiUrl = process.env.REACT_APP_API_URL

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/items`)
    return result.data;
  },

  addTask: async (name) => {
    // console.log('addTask', name)
    //TODO
    const result = await axios.post(`${apiUrl}/items/`, { name: name })

    return result.data;
  },

  setCompleted: async (id, isComplete, name) => {
    // console.log('setCompleted', {id, isComplete})
    //TODO
    const result = await axios.put(`${apiUrl}/items/${id}`,
      {
        IdItems: id,
        Name: name,
        IsComplete: isComplete
      })
    return result.data;
  },

  deleteTask: async (id) => {
    console.log('deleteTask', id);
    // שליחת בקשת DELETE לכתובת עם ה-ID הספציפי
    await axios.delete(`${apiUrl}/items/${id}`);
    return {}; // מחזירים אובייקט ריק כדי שהקוד ב-App.js לא יישבר
  }
};
