import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import "./Home.css";
import { UserContext } from "../UserContext/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useContext(UserContext);

  return (
    <div>
      <Link to="create">
        <button className="btn btn-primary my-3">Create User</button>
      </Link>
      <table class="table table-striped ">
        <thead>
          <tr >
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.salary}</td>

              <Link to={"/read/"+user.id}>
                <button className="btn-style btn btn-success ">Read</button>
              </Link>
              <Link to={"/edit/"+user.id}>
              <button className="btn-style btn btn-warning">Edit</button>
              </Link>
              

              <Link to={"/delete/" + user.id}>
                <button className=" btn-style btn btn-danger">Delete</button>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
