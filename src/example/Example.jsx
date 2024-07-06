import { useEffect, useState } from "react";
import { Pagination, usePaginationParams } from "react-laravel-pagination";

function Example() {
    
  const [users, setUsers] = useState();
  const { pageNumber } = usePaginationParams();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = (page = pageNumber) => {
    const url = "my-url?page=" + page;
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setUsers(JSON.parse(y));
      });
  };
  return (
    <>
      <div className="mt-5">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div className="col-lg-8">
              <div className="card mb-3">
                <div className="card-header">
                  <h4 className="card-title">Users List</h4>
                </div>
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(users?.data || []).map((user, index) => (
                        <tr key={index}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {users && (
                  <div className="card-footer py-3">
                    <Pagination
                      data={users}
                      onChangeHandler={getUser}
                      activePage={5}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Example;
