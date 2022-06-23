import Head from "next/head";
import Image from "next/image";

export default function Sell() {
  return (
    <div className="container sellcontainer">
      <div className="row ">
        <div className="col-md-4 sellspace">
          <h1>Sell Here</h1>
          <p>
            Show off your homegrown food, pottery and more at the Garden Party.
            In this festive event you can trade goods, reveal new recipes and
            make some extra money.
          </p>
        </div>
        <div className="col-md-8">
          <form>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form6Example1">
                    Product Name
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="number"
                    id="form6Example2"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form6Example2">
                    Product Price
                  </label>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <input type="text" id="form6Example3" className="form-control" />
              <label className="form-label" htmlFor="form6Example3">
                Add Image
              </label>
            </div>

            <div className="form-outline mb-4">
              <input type="text" id="form6Example4" className="form-control" />
              <label className="form-label" htmlFor="form6Example4">
                Add pick-up address
              </label>
            </div>

            <div className="form-outline mb-4">
              <textarea
                className="form-control"
                id="form6Example7"
                rows="4"
              ></textarea>
              <label className="form-label" htmlFor="form6Example7">
                Additional information
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Post your product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
