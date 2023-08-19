import React from "react";

export default function Child(props) {
  return (
    <>
      {props.showitem.map((item, index) => (
        <table className="table container shadow-lg p-1 mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{item}</td>
              <td>
                <i
                  className="bi bi-pencil-square"
                  onClick={() => props.updateresult(index)}
                ></i>
              </td>
              <td>
                <i
                  className="bi bi-trash3-fill"
                  onClick={props.deleteresult}
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
}
