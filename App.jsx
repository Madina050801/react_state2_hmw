import React from "react";
import { data } from "./data";
import "./index.css";

class Toshkent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      active: null,
      status: "",
      data: {
        status: "OK",
        dataList: data,
      },
    };
  }
  render() {
    console.log(this.state.data.dataList);
    const onDelete = (id) => {
      let res = this.state.data.dataList.filter((value) => value.id !== id);
      this.setState({
        data: {
          ...this.state.data,
          dataList: res,
        },
      });
    };

    const onEdit = (id) => {
      this.setState({ active: id });
    };

    const onChange = (e) => {
      console.log(e);
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    const onChangeID = (e, id, key) => {
      var data = this.state.data.dataList.map((value) =>
        value.id === id ? { ...value, id: e.target.value } : value
      );

      this.setState({
        data: {
          ...this.state.data,
          dataList: data,
        },
      });
    };
    const onSave = () => {
      const newData = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({
        data: {
          ...this.state.data,
          dataList: [...this.state.data.dataList, newData],
        },
        name: "",
        status: "",
      });
    };
    return (
      <div>
        <input
          value={this.state.name}
          placeholder="name"
          name="name"
          onChange={onChange}
          type="text"
        />
        <input
          value={this.state.status}
          placeholder="status"
          name="status"
          onChange={onChange}
          type="text"
        />
        <button onClick={onSave}>save</button>

        <div className="container">
          <table border="1" className="table">
            <thead>
              <tr className="fixed">
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Actions</th>
                <th>Actions</th>
                <th>Actions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.dataList.map(({ id, name, status }) => (
                <tr key={id}>
                  <td className="fixed">
                    {this.state.active === id ? (
                      <input
                        value={id}
                        onChange={(e) => onChangeID(e, id, "id")}
                      />
                    ) : (
                      id
                    )}
                  </td>
                  <td>{name}</td>
                  <td>{status} </td>
                  <td>
                    <button onClick={() => onDelete(id)}>delete</button>
                    <button onClick={() => onEdit(id)}>
                      {this.state.active === id ? "save" : "edit"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Toshkent;
