import React from 'react';

function SearchBar() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="features-absolute blog-search">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="text-center subcribe-form">
                    <form style={{ maxWidth: '800px' }}>
                      <div className="mb-0">
                        <input
                          type="text"
                          id="help"
                          name="name"
                          className="border bg-white rounded-pill"
                          required=""
                          placeholder="Search"
                        />
                        <button type="submit" className="btn btn-pills btn-primary">
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
