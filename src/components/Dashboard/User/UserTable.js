import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";

import "./userTable.css";

const UserTable = (props) => {
  let dataUser = props.dataUser;
  let search = props.search;
  let setReUser = props.setReUser;

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
            <th>User avatar</th>
            <th>Full Name</th>
            <th>User name</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Role</th>
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
                  user.email.toLowerCase().includes(search.toLowerCase()) ||
                  user.phone.toLowerCase().includes(search.toLowerCase())
                ) {
                  return user;
                }
              })
              .map((item, index) => (
                <>
                  <tr key={item}>
                    <td>{index + 1}</td>
                    <td>
                      {" "}
                      <img
                        src={`http://localhost:8080/${item.user_image}`}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "100%",
                        }}
                      />
                    </td>
                    <td>{item.fullname} </td>
                    <td>{item.username}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.role === 1 ? "Admin" : "Member"}</td>
                    <td>
                      {item.role === 1 ? (
                        <>
                          <Link
                            to={`/dashboard/account/${item.id}`}
                            className="edit"
                            title=""
                            data-toggle="tooltip"
                            data-original-title="Edit"
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link
                            to={`/dashboard/account/${item.id}`}
                            className="edit"
                            title=""
                            data-toggle="tooltip"
                            data-original-title="Edit"
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
