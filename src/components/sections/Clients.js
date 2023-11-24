import { Fragment } from "react";
const Clients = () => {
  return (
    <Fragment>
      <div className="content clients">
        {/* title */}
        <div className="title">Clients</div>
        {/* content */}
        <div className="row client-items">
          {/* client item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com"
                >
                  <img src="images/clients/client_1.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* client item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com"
                >
                  <img src="images/clients/client_2.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* client item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com"
                >
                  <img src="images/clients/client_3.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* client item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com"
                >
                  <img src="images/clients/client_4.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Clients;
