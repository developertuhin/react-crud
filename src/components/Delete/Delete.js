import React from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
const Delete = () => {
  const [users, setUsers] = useContext(UserContext);
  const { id } = useParams();

  const deleteUser = (id)=>{
    const user = users.filter((user) => user.id != id);
    setUsers(user);
  }
  
  return (
    <div>
        <div class="modal-dialog">
          <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">Are you Sure ?</h5>
        
      </div>
            <div class="modal-footer">
              <Link  to="/">
                <button type="button"class="btn btn-info btn-style"data-dismiss="modal">Cancel
                </button>
                <button onClick={()=> deleteUser (id)} type="button" class="btn btn-danger btn-style"> Delete 
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Delete;
