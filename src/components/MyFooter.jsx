import React from "react";



function MyFooter() {
  return (
    <footer style={{ color: "#838383", fontSize: "0.8em" }}>
      <div className="row justify-content-center mt-5">
        <div className="col col-6">
          <div className="row">
           
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
            {["Audio and Subtitles", "Media Center", "Privacy", "Contact us","Audio Description","Investor Relations","Legal Notices","Help Center","Jobs","Cookie Preferences","Gift Cards","Terms of Use","Corporate Information"  ].map(link => (
              <div key={link} className="col">
                <div>
                  <p><a href="#" style={{ color: "#838383", textDecoration: "none" }}>{link}</a></p>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col mb-2">
              <button type="button" className="btn btn-sm footer-button rounded-0 mt-3" style={{ color: "#838383", borderColor: "#838383" }}>
                Service Code
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2 mt-2" style={{ color: "#838383", fontSize: "0.6em" }}>
              © 1997-2023 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
