import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { MdAddAPhoto } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { RemoveLoop } from "../HandleAction/RemoveLoopItem";

import "./account.css";

const Account = () => {
  let { uid } = useParams();
  let auth = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState();
  const [reload, setReload] = useState(1);
  const [comments, setComments] = useState();
  const [fullname, setFullname] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [list_pr, setList_pr] = useState();

  const handleAvt = async (e) => {
    let user_image = e.target.files[0];
    let form = new FormData();
    form.append("user_image", user_image);
    form.append("uid", uid);
    if (user_image) {
      let result = await axios.post(
        `http://localhost:8080/api/user/account/avatar`,
        form
      );

      if (result?.data?.error === 0) {
        setTimeout(() => {
          setReload((pre) => pre + 1);
        }, 500);
      }
    }
  };
  const handleCover = async (e) => {
    let cover_image = e.target.files[0];
    let form = new FormData();
    form.append("cover_image", cover_image);
    form.append("uid", uid);
    if (cover_image) {
      let result = await axios.post(
        `http://localhost:8080/api/user/account/coverimage`,
        form
      );

      if (result?.data?.error === 0) {
        setTimeout(() => {
          setReload((pre) => pre + 1);
        }, 500);
      }
    }
  };
  const handleComfirm = async () => {
    if (password && password.length >= 6) {
      let userupdate = {
        id: user.id,
        fullname: fullname,
        password: password,
        email: email,
        phone: phone,
      };
      let result = await axios.post(
        `http://localhost:8080/api/user/update2`,
        userupdate
      );
      if (result?.data?.error === 0) {
        toast.success("Update success", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setReload((pre) => pre + 1);
        return;
      }
    }
    toast.error("New password needed > 5 character!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  useEffect(() => {
    let fetchUser = async (uid) => {
      let result = await axios.get(
        `http://localhost:8080/api/user/find/${uid}`
      );
      if (result?.data?.error === 0) {
        setUser(result?.data?.rows[0]);
      }
    };
    let fetchComment = async (uid) => {
      let result = await axios.get(
        `http://localhost:8080/api/user/comment/${uid}`
      );
      // console.log(result.data);
      if (result?.data?.error === 0) {
        setComments(result?.data?.comments);
        setList_pr(
          RemoveLoop(result?.data?.comments.map((item) => item.product_id))
        );
      }
    };
    fetchComment(uid);
    fetchUser(uid);
  }, [uid, reload]);

  return (
    <>
      <div className="container ms-account">
        <div className="row">
          <div className="ms-user_flag-image col-12 ">
            <div className="ms-pr">
              <div className="img-inner overflow-hidden ratio ratio-16x9">
                <img
                  src={`http://localhost:8080/${user?.cover_image}`}
                  alt=""
                />
                <div className="ms-photo-cover ms-pa">
                  <label htmlFor="user_cover_image" className="ms-btn-cover">
                    <MdAddAPhoto size={30} />
                  </label>
                  <input
                    type="file"
                    id="user_cover_image"
                    className="d-none"
                    onChange={(e) => handleCover(e)}
                    accept="image/png, image/gif, image/jpeg"
                  />
                </div>
              </div>
              <div className="user-avt ms-pa overflow-hidden">
                <div className="user-img overflow-hidden ratio ratio-1x1">
                  <img
                    src={`http://localhost:8080/${user?.user_image}`}
                    alt=""
                  />
                </div>
                <div className="ms-photo ms-pa">
                  <label htmlFor="user_avt" className="ms-btn-avt">
                    <MdAddAPhoto size={30} />
                  </label>
                  <input
                    type="file"
                    id="user_avt"
                    className="d-none"
                    onChange={(e) => handleAvt(e)}
                    accept="image/png, image/gif, image/jpeg"
                  />
                </div>
              </div>
            </div>
            <div className="user-info">
              <div className="user-name">{user?.fullname}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ms-account-change">
        <div className="row gx-4 gy-3">
          {user?.id === auth?.id ? (
            <>
              <div className="ms-form-info col-12 col-lg-4">
                <div className="ms-form-info_inner">
                  <div className="user-fullname d-flex justify-content-between">
                    <label htmlFor="ufullname">Full name</label>
                    <input
                      type="text"
                      id="ufullname"
                      className="form-control"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="user-fullname my-2 d-flex justify-content-between">
                    <label htmlFor="upass">Password</label>
                    <input
                      type="password"
                      required
                      id="upass"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="******"
                    />
                  </div>
                  <div className="user-fullname my-2 d-flex justify-content-between">
                    <label htmlFor="uemail">Email</label>
                    <input
                      type="email"
                      required
                      id="uemail"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hekichien@email.com"
                    />
                  </div>
                  <div className="user-fullname my-2 d-flex justify-content-between">
                    <label htmlFor="uphone">Phone</label>
                    <input
                      type="text"
                      required
                      id="uphone"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0312312312"
                    />
                  </div>
                  <button
                    className="btn btn-outline-primary ms-auto"
                    onClick={() => handleComfirm()}
                  >
                    Comfirm
                  </button>
                </div>
              </div>
              <div className="ms-comment-history col-12 col-lg-8 text-start">
                {!comments ? (
                  <>
                    <div>Chua co comment nao</div>
                  </>
                ) : (
                  <></>
                )}
                {comments?.length > 0 &&
                  comments?.map((cmt, index) => (
                    <div className="ms-comment-item">
                      <div className="ms-comment-inner">
                        <div className="product-wrap d-flex">
                          <div className="product-img me-4 ">
                            <Link to={`/product/${cmt.product_id}`}>
                              <img
                                src={`http://localhost:8080/${cmt.product_image}`}
                                alt=""
                                className=""
                              />
                            </Link>
                          </div>
                          <div className="ms-product-name">
                            <Link to={`/product/${cmt.product_id}`}>
                              {cmt.product_name}
                            </Link>
                          </div>
                        </div>
                        <div className="product-comment">
                          <div className="comment-item my-3">
                            <div className="comment-inner d-flex">
                              <div className="user-image me-3">
                                <img
                                  src={`http://localhost:8080/${cmt.user_image}`}
                                  alt=""
                                />
                              </div>
                              <div className="user-fullname">
                                <p className="ms-name">{cmt.fullname}</p>
                                <p className="ms-comment-content">
                                  {cmt.content}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <>
              <div className="ms-comment-history col-12 col-lg-12 text-start">
                {!comments || comments?.length === 0 ? (
                  <>
                    <div className="text-center my-3">
                      Chưa có hoạt động nào diễn ra cả ....
                    </div>
                  </>
                ) : (
                  <></>
                )}
                {comments &&
                  comments?.length > 0 &&
                  comments?.map((cmt, index) => (
                    <div className="ms-comment-item">
                      <div className="ms-comment-inner">
                        <div className="product-wrap d-flex">
                          <div className="product-img me-4 ">
                            <Link to={`/product/${cmt.product_id}`}>
                              <img
                                src={`http://localhost:8080/${cmt.product_image}`}
                                alt=""
                                className=""
                              />
                            </Link>
                          </div>
                          <div className="ms-product-name">
                            <Link to={`/product/${cmt.product_id}`}>
                              {cmt.product_name}
                            </Link>
                          </div>
                        </div>
                        <div className="product-comment">
                          <div className="comment-item my-3">
                            <div className="comment-inner d-flex">
                              <div className="user-image me-3">
                                <img
                                  src={`http://localhost:8080/${cmt.user_image}`}
                                  alt=""
                                />
                              </div>
                              <div className="user-fullname">
                                <p className="ms-name">{cmt.fullname}</p>
                                <p className="ms-comment-content">
                                  {cmt.content}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Account;
