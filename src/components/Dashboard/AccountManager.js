import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import UserTable from "./UserTable";
import axios from "axios";

const AccountManager = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  let callDataUser = async () => {
    let data = await axios.get("http://localhost:8080/api/user/getalluser");
    if (data && data.data.error !== "0") {
      setUser(data.data.list_user);
      setLoading(!loading);
      return;
    }
  };
  useEffect(() => {
    callDataUser();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="card mb-4">
            <div className="card-header text-start d-flex justify-content-between">
              <div className="ms-table-title">
                <i className="fas fa-table me-1"></i>
                User Manager
              </div>
              <div className="ms-table-search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search user"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="card-body">
              {loading ? (
                <BeatLoader color="#36d7b7" />
              ) : (
                <UserTable
                  setReUser={setUser}
                  dataUser={user}
                  search={search}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountManager;
