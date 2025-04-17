import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Link to="/addtask">
        <button className="p-2 bg-orange-500 text-white rounded">Add Task</button>
      </Link>
    </div>
  );
}

export default Home;