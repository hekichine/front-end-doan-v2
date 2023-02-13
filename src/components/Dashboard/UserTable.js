import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import { addUser } from "../../redux/userSlide";

import "./userTable.css";
import { useDispatch } from "react-redux";

const UserTable = (props) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  let dataUser = props.dataUser;
  let search = props.search;
  let setReUser = props.setReUser;

  const handleEdit = (item) => {
    dispatch(addUser(item));
  };
  const handleDelete = async (item) => {
    let data = await axios.delete(
      `http://localhost:8080/api/user/delete/${item.id}`
    );

    if (data.data.error === 0) {
      toast.success(`${data.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      let newUSer = dataUser.filter((user) => user.id !== item.id);
      setReUser(newUSer);
      return;
    }
    toast.error(`${data.data.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return;
  };

  return (
    <>
      <table className="user-table table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>User name</th>
            <th>Address</th>
            <th>Phone number</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataUser &&
            dataUser.length > 0 &&
            dataUser
              .filter((user) => {
                if (search === "") {
                  return user;
                } else if (
                  user.fullname.toLowerCase().includes(search.toLowerCase()) ||
                  user.username.toLowerCase().includes(search.toLowerCase()) ||
                  user.address.toLowerCase().includes(search.toLowerCase())
                ) {
                  return user;
                }
              })
              .map((item, index) => (
                <>
                  <tr key={item}>
                    <td>{index}</td>
                    <td>
                      {item.fullname}{" "}
                      <img
                        src={`http://localhost:8080/${item.user_avt}`}
                        style={{ width: "150px", height: "150px" }}
                      />
                    </td>
                    <td>{item.username}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                      {item.role === 1 ? (
                        <>
                          <span>Admin</span>
                        </>
                      ) : (
                        <>
                          {" "}
                          <Link
                            to={"/dashboard/account/detail"}
                            className="edit"
                            title=""
                            data-toggle="tooltip"
                            data-original-title="Edit"
                            onClick={() => handleEdit(item)}
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                          <button
                            className="delete"
                            title=""
                            data-toggle="tooltip"
                            data-original-title="Delete"
                            onClick={() => handleDelete(item)}
                          >
                            <i className="fa-regular fa-trash-can"></i>
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                </>
              ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
