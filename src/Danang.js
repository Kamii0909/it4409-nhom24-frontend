import React, { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./ThreeStars.css"; // Import file CSS

function UserCard({ user }) {
  return (
    <div className="card">
      <h1 className="title">Name: {user.name}</h1>
      <h1>Stars: {user.stars}</h1>
    </div>
  );
}

function Danang() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersByStars = async () => {
      const usersCollectionRef = collection(db, "users");
      const usersQuery = query(usersCollectionRef, where("city", "==", "Đà Nẵng"));
      const data = await getDocs(usersQuery);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsersByStars();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User List (Danang)</h2>
      {/* Render user list */}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Danang;