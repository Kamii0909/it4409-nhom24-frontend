import React, { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import "./SearchTab.css"

function UserCard({ user, onDeleteUser }) {
  return (
    <div className="user-card">
      <h1>Name: {user.name}</h1>
      <h1>City: {user.city}</h1>
      <h1>Price: {user.price}</h1>
      <h1>Stars: {user.stars}</h1>
      <h1>Room Count: {user.roomCount}</h1>
      {Object.entries(user)
        .filter(([key]) => key.startsWith("Room"))
        .map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      {user.image && <img src={user.image} alt="User" />}
      {user.description && <p>{user.description}</p>}
      <button onClick={() => onDeleteUser(user.id)}>Delete User</button>
    </div>
  );
}

function CRUDTab() {
  const [newName, setNewName] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newStar, setNewStar] = useState(0);
  const [newRoomCount, setNewRoomCount] = useState(0);
  const [newImage, setNewImage] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const cityOptions = ["Hà Nội", "Hạ Long", "Đà Nẵng", "Nha Trang", "Hồ Chí Minh"];

  const createUser = async () => {
    const newUser = {
      name: newName,
      city: selectedCity,
      price: Number(newPrice),
      stars: Number(newStar),
      roomCount: Number(newRoomCount),
    };

    await addDoc(usersCollectionRef, newUser);
    setNewName("");
    setSelectedCity("");
    setNewPrice(0);
    setNewStar(0);
    setNewRoomCount(0);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const unsubscribeUsers = onSnapshot(usersCollectionRef, () => {
      getUsers();
    });

    return () => {
      unsubscribeUsers();
    };
  }, []);

  const generateRandomDates = () => {
    const startDate = new Date(2023, 0, 1);
    const endDate = new Date(2023, 11, 31);
    const randomTimestamp1 =
      Math.random() * (endDate.getTime() - startDate.getTime()) + startDate.getTime();
    const randomTimestamp2 =
      Math.random() * (endDate.getTime() - startDate.getTime()) + startDate.getTime();
    const date1 = new Date(randomTimestamp1);
    const date2 = new Date(randomTimestamp2);
    return `${date1.getDate()}/${date1.getMonth() + 1}/${date1.getFullYear()} - ${date2.getDate()}/${date2.getMonth() + 1}/${date2.getFullYear()}`;
  };

  const createRooms = async (count) => {
    const rooms = {};
    for (let i = 1; i <= count; i++) {
      rooms[`Room${i}`] = generateRandomDates();
    }
    return rooms;
  };

  const handleCreateUser = async () => {
    const newUser = {
      name: newName,
      city: selectedCity,
      price: Number(newPrice),
      stars: Number(newStar),
      roomCount: Number(newRoomCount),
      image: newImage,
      description: newDescription,
      ...await createRooms(newRoomCount)
    };
  
    await addDoc(usersCollectionRef, newUser);
    setNewName("");
    setSelectedCity("");
    setNewPrice(0);
    setNewStar(0);
    setNewRoomCount(0);
    setNewImage("");
    setNewDescription("");
  };

  return (
    <div className="CRUDTab">
      <div className="crud-tab">
        <h2>CRUD Tab</h2>
        <label htmlFor="name-input">Name:</label>
        <input
          id="name-input"
          placeholder="Name..."
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <label htmlFor="city-select">City:</label>
        <select
          id="city-select"
          value={selectedCity}
          onChange={(event) => setSelectedCity(event.target.value)}
        >
          <option value="">- Select a city -</option>
          {cityOptions.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <label htmlFor="price-input">Price:</label>
        <input
          id="price-input"
          type="number"
          placeholder="Price..."
          value={newPrice}
          onChange={(event) => setNewPrice(Number(event.target.value))}
        />
        <label htmlFor="stars-input">Stars:</label>
        <input
          id="stars-input"
          type="number"
          placeholder="Stars..."
          value={newStar}
          onChange={(event) => setNewStar(Number(event.target.value))}
        />
        <label htmlFor="room-count-input">Room Count:</label>
        <input
          id="room-count-input"
          type="number"
          placeholder="Room Count..."
          value={newRoomCount}
          onChange={(event) => setNewRoomCount(Number(event.target.value))}
        />
        <label htmlFor="image-input">Image URL:</label>
        <input
          id="image-input"
          type="text"
          placeholder="Image URL..."
          value={newImage}
          onChange={(event) => setNewImage(event.target.value)}
        />
        <label htmlFor="description-textarea">Description:</label>
        <textarea
          id="description-textarea"
          placeholder="Description..."
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
        ></textarea>
        <button onClick={handleCreateUser}>Create User</button>

        <div className="user-cards">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onDeleteUser={deleteUser}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CRUDTab;







