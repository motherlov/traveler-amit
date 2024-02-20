import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ pageTitle, breadcrumbLinks }) => {
  return (
    <div className="container-fluid page-header">
      <div className="container">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 400 }}
        >
          <h3 className="display-4 text-white text-uppercase">{pageTitle}</h3>
          <div className="d-inline-flex text-white">
            {breadcrumbLinks.map((link, index) => (
              <React.Fragment key={index}>
                <p className="m-0 text-uppercase">
                  <Link className="text-white" to={link.url}>
                    {link.label}
                  </Link>
                </p>
                {index !== breadcrumbLinks.length - 1 && (
                  <i className="fa fa-angle-double-right pt-1 px-3" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
