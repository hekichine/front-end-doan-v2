import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddProduct = (props) => {
  const [productname, setProductname] = useState();
  const [price, setPrice] = useState();
  const [sale, setSale] = useState();
  const [quantity, setQuantity] = useState();
  const [description, setDescription] = useState();
  const [language, setLanguage] = useState();
  const [publisher, setPublisher] = useState();
  const [category, setCategory] = useState();
  const [images, setImages] = useState();

  let list_cate = props?.categories;

  const handleAdd = async () => {
    if (!images) {
      toast.error("Image not null", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    let product = new FormData();
    product.append("product_name", productname);
    product.append("price", price);
    product.append("sale", sale);
    product.append("description", description);
    product.append("quantity", quantity);
    product.append("language", language);
    product.append("category_id", category);
    product.append("publisher", publisher);
    for (let image of images) {
      product.append("productImages", image);
    }

    let result = await axios.post(
      "http://localhost:8080/api/product/add",
      product
    );
    console.log(result);
  };
  return (
    <>
      <div className="container">
        <div className="">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Add product
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="mb-3 col-12 col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          value={productname}
                          onChange={(e) => setProductname(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Product name</label>
                      </div>
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Price</label>
                      </div>
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          value={sale}
                          onChange={(e) => setSale(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Sale</label>
                      </div>
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Quantity</label>
                      </div>
                    </div>
                    <div className="mb-3 col-12">
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          style={{ height: "150px" }}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <label for="floatingTextarea2">Description</label>
                      </div>
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Language</label>
                      </div>
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          value={publisher}
                          onChange={(e) => setPublisher(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Publisher</label>
                      </div>
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                      <select
                        class=" form-select"
                        aria-label="Category"
                        id="formSelectCategory"
                        onChange={(e) => setCategory(e.target.value)}
                        style={{ height: "100%" }}
                      >
                        {list_cate &&
                          list_cate?.map((item, index) => (
                            <option
                              value={`${item.id}`}
                              selected={index === 1 ? "true" : "false"}
                            >
                              {item.category_name}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div class="mb-3 col-12 col-md-6 text-start">
                      <label for="formFileMultiple" class="form-label">
                        Choose multi images (Maximum 3 images)
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        id="formFileMultiple"
                        multiple
                        onChange={(e) => setImages(e.target.files)}
                        accept={"image/jpg image/jpeg image/png"}
                      />
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAdd()}
                    >
                      Add product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
