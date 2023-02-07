import React from "react";
import { Link } from "react-router-dom";

import "./userTable.css";

const UserTable = (props) => {
  let dataUser = props.dataUser;
  let search = props.search;
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
                  user.username.toLowerCase().includes(search.toLowerCase())
                ) {
                  return user;
                }
              })
              .map((item, index) => (
                <>
                  <tr key={item}>
                    <td>{index}</td>
                    <td>{item.fullname}</td>
                    <td>{item.username}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link
                        to=""
                        className="edit"
                        title=""
                        data-toggle="tooltip"
                        data-original-title="Edit"
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                      <Link
                        to=""
                        className="delete"
                        title=""
                        data-toggle="tooltip"
                        data-original-title="Delete"
                      >
                        <i className="fa-regular fa-trash-can"></i>
                      </Link>
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
