import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase-config";
import "./SearchTab.css";
import useAuth from "./Auth";
import { Link, useNavigate } from 'react-router-dom';


const usersCollectionRef = collection(db, "users");
const cityOptions = ["Hà Nội", "Hạ Long", "Đà Nẵng", "Nha Trang", "Hồ Chí Minh"];

function UserCard({ user }) {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div className="user-card">
      <h1>
        <Link to={`/users/${user.id}`} onClick={handleUserClick}>
          Name: {user.name}
        </Link>
      </h1>
      <h1>City: {user.city}</h1>
      <h1>Price: {user.price}</h1>
      <h1>Stars: {user.stars}</h1>
      <h1>Room Count: {user.roomCount}</h1>
      <h1>Room1: {user.Room1}</h1>
    </div>
  );
}


const SearchTab = () => {
  const { user } = useAuth();
  const [searchName, setSearchName] = useState("");
  const [searchMinPrice, setSearchMinPrice] = useState(0);
  const [searchMaxPrice, setSearchMaxPrice] = useState(0);
  const [searchStars, setSearchStars] = useState(0);
  const [selectedCity, setSelectedCity] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [users, setUsers] = useState([]);
  const [availableRooms, setAvailableRooms] = useState(null);

  useEffect(() => {
    getUsers();
  }, []); // Thực hiện getUsers khi component được mount

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleSearchMinPriceChange = (event) => {
    setSearchMinPrice(Number(event.target.value));
  };

  const handleSearchMaxPriceChange = (event) => {
    setSearchMaxPrice(Number(event.target.value));
  };

  const handleSearchStarChange = (event) => {
    setSearchStars(Number(event.target.value));
  };

  const handleSelectedCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleCheckInDateChange = (event) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutDateChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  const getUsers = async () => {
    let usersQuery = usersCollectionRef;

    if (searchName !== "") {
      usersQuery = query(usersQuery, where("name", "==", searchName));
    }

    if (searchMinPrice !== 0 && searchMaxPrice !== 0) {
      usersQuery = query(
        usersQuery,
        where("price", ">=", searchMinPrice),
        where("price", "<=", searchMaxPrice)
      );
    }

    if (searchStars !== 0) {
      usersQuery = query(usersQuery, where("stars", "==", searchStars));
    }

    if (selectedCity !== "") {
      usersQuery = query(usersQuery, where("city", "==", selectedCity));
    }

    const data = await getDocs(usersQuery);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    await getAvailableRooms();
  };

  const getAvailableRooms = async () => {
    if (checkInDate !== "" && checkOutDate !== "") {
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);
      const data = await getDocs(usersCollectionRef);
      const allUsers = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const availableRooms = allUsers.filter((user) => {
        if (user.roomCount > 0) {
          for (let i = 1; i <= user.roomCount; i++) {
            const roomKey = `Room${i}`;
            if (user.hasOwnProperty(roomKey)) {
              const dateRangeStrings = user[roomKey].split(" - ");
              const dates = dateRangeStrings.map((dateString) => new Date(dateString));
              if (dates.some((date) => date >= checkIn && date <= checkOut)) {
                return false; // Có ít nhất một ngày nằm trong khoảng
              }
            }
          }
        }
        return true; // Không có ngày nào nằm trong khoảng
      });
      setAvailableRooms(availableRooms.length);
    } else {
      setAvailableRooms(null);
    }
  };
  

  const resetSearch = () => {
    setSearchName("");
    setSearchMinPrice(0);
    setSearchMaxPrice(0);
    setSearchStars(0);
    setSelectedCity("");
    setCheckInDate("");
    setCheckOutDate("");
    setUsers([]);
    setAvailableRooms(null);
  };

  return (
    <div className="SearchTab">
      <h2>Search Tab</h2>
      {user ? (
        <>
          <div>
            <label htmlFor="search-name-input">Search by Name:</label>
            <input
              id="search-name-input"
              placeholder="Search by name..."
              value={searchName}
              onChange={handleSearchNameChange}
            />
          </div>
          <div>
            <label htmlFor="min-price-input">Min Price:</label>
            <input
              id="min-price-input"
              type="number"
              placeholder="Min Price..."
              value={searchMinPrice}
              onChange={handleSearchMinPriceChange}
            />
          </div>
          <div>
            <label htmlFor="max-price-input">Max Price:</label>
            <input
              id="max-price-input"
              type="number"
              placeholder="Max Price..."
              value={searchMaxPrice}
              onChange={handleSearchMaxPriceChange}
            />
          </div>
          <div>
            <label htmlFor="stars-input">Search by Stars:</label>
            <input
              id="stars-input"
              type="number"
              placeholder="Search by stars..."
              value={searchStars}
              onChange={handleSearchStarChange}
            />
          </div>
          <div>
            <label htmlFor="city-select">City:</label>
            <select
              id="city-select"
              value={selectedCity}
              onChange={handleSelectedCityChange}
            >
              <option value="">All Cities</option>
              {cityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="check-in-date-input">Check-in Date:</label>
            <input
              id="check-in-date-input"
              type="date"
              placeholder="Check-in date..."
              value={checkInDate}
              onChange={handleCheckInDateChange}
            />
          </div>
          <div>
            <label htmlFor="check-out-date-input">Check-out Date:</label>
            <input
              id="check-out-date-input"
              type="date"
              placeholder="Check-out date..."
              value={checkOutDate}
              onChange={handleCheckOutDateChange}
            />
          </div>
          <div>
            <button onClick={getUsers}>Search</button>
            <button onClick={resetSearch}>Reset</button>
          </div>
  
          <div className="user-cards">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
  
          {availableRooms !== null && (
            <div>
              <h2>Available Rooms: {availableRooms}</h2>
            </div>
          )}
        </>
      ) : (
        <div className="login-message">Please login first</div>
      )}
    </div>
  );
};

export default SearchTab;

