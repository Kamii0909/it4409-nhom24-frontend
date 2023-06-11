import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();

  // Lấy thông tin người dùng dựa trên userId từ Firebase hoặc nơi lưu trữ dữ liệu

  return (
    <div>
      <h2>User Detail</h2>
      <h1>User ID: {userId}</h1>
      {/* Hiển thị thông tin chi tiết về người dùng */}
    </div>
  );
};

export default UserDetail;