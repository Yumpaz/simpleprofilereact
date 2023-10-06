import React, { useEffect, useState } from "react";
import Profile from "./profile";

const App = () => {
  const [data, setData] = useState(null);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  const fetchDataFromAPI = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const randomUserData = data.results[0];
        const { name, location, email, dob, phone, login } = randomUserData;
        const toname = name.title + " " + name.first + " " + name.last;
        const tolocation =
          "Street: " +
          location.street.name +
          " Number: " +
          location.street.number +
          " State: " +
          location.state +
          " Country: " +
          location.country;
        const todob =
          "Date of Birth: " + formatDate(dob.date) + " Age: " + dob.age;
        const tologin =
          "Username: " + login.username + " Password: " + login.password;
        setData({
          name: toname,
          email: email,
          files: todob,
          location: tolocation,
          telephone: phone,
          padlock: tologin,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);
  
  return (
    <>
      {data ? <Profile user={data} /> : <p>Loading....</p>}
    </>
  );
};

export default App;
