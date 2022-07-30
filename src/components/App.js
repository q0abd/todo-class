import React, { Component } from "react";
import {
  AddButton,
  Container,
  Divacha,
  Divchacha,
  FlexBetween,
  InputSearch,
} from "./style";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      addValue: "",
      newUserButton: false,
      firstname: "",
      lastname: "",
      address: "",
      selected: null,
      firstname2: "",
      lastname2: "",
      address2: "",
      searchValue: "",
    };
  }

  addUser() {
    this.setState({
      newUserButton: !this.state.newUserButton,
      data: [
        ...this.state.data,
        {
          id: this.state.data.length + 1,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          address: this.state.address,
        },
      ],
      firstname: "",
      lastname: "",
      address: "",
    });
  }

  editUser(val) {
    this.setState({
      selected: val.id,
      firstname2: val.firstname,
      lastname2: val.lastname,
      address2: val.address,
    });
  }

  saveUser() {
    this.setState({
      data: this.state.data.map((v) =>
        this.state.selected === v.id
          ? {
              ...v,
              firstname: this.state.firstname2,
              lastname: this.state.lastname2,
              address: this.state.address2,
            }
          : v
      ),
      selected: null,
    });
  }

  render() {
    const onChangeAll = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    const onChangeAll2 = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    const {
      firstname,
      lastname,
      address,
      selected,
      firstname2,
      lastname2,
      address2,
    } = this.state;
    return (
      <Container>
        <FlexBetween>
          <InputSearch
            placeholder="Search users"
            height={40}
            mar
            onChange={(e) => this.setState({ searchValue: e.target.value })}
          />

          <div
            onClick={() =>
              this.setState({ newUserButton: !this.state.newUserButton })
            }
          >
            {this.state.newUserButton ? (
              <div className="biodiv">
                <AddButton margin onClick={() => this.addUser()}>
                  ✅ Add User
                </AddButton>
                <AddButton>❌</AddButton>
              </div>
            ) : (
              <AddButton>✚ New User</AddButton>
            )}
          </div>
        </FlexBetween>
        <Divchacha className="con" state={this.state.newUserButton}>
          <FlexBetween back="#DCFAEC" padding={20}>
            <InputSearch
              required
              name="firstname"
              placeholder="First Name"
              onChange={(e) => onChangeAll(e)}
              value={firstname}
            />
            <InputSearch
              required
              name="lastname"
              placeholder="Last Name"
              onChange={(e) => onChangeAll(e)}
              value={lastname}
            />
            <InputSearch
              required
              name="address"
              placeholder="Address"
              onChange={(e) => onChangeAll(e)}
              value={address}
            />
          </FlexBetween>
        </Divchacha>
        <Divacha state={this.state.newUserButton}>
          <table
            border={1}
            style={{ borderCollapse: "collapse", marginTop: "10px" }}
          >
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(
                (val) =>
                  (val.firstname
                    .toLowerCase()
                    .includes(this.state.searchValue.toLowerCase()) ||
                    val.lastname
                      .toLowerCase()
                      .includes(this.state.searchValue.toLowerCase()) ||
                    val.address
                      .toLowerCase()
                      .includes(this.state.searchValue.toLowerCase())) && (
                    <tr key={val.id}>
                      {selected === val.id ? (
                        <>
                          <td>
                            <InputSearch
                              name="firstname2"
                              value={firstname2}
                              uzunligi={150}
                              onChange={(e) => onChangeAll2(e)}
                            />
                          </td>
                          <td>
                            <InputSearch
                              name="lastname2"
                              value={lastname2}
                              uzunligi={150}
                              onChange={(e) => onChangeAll2(e)}
                            />
                          </td>
                          <td>
                            <InputSearch
                              name="address2"
                              value={address2}
                              uzunligi={150}
                              onChange={(e) => onChangeAll2(e)}
                            />
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{val.firstname}</td>
                          <td>{val.lastname}</td>
                          <td>{val.address}</td>
                        </>
                      )}
                      <td className="flex">
                        {selected === val.id ? (
                          <AddButton
                            rang="green"
                            back="white"
                            border="green"
                            onClick={() => this.saveUser()}
                          >
                            Save ✅
                          </AddButton>
                        ) : (
                          <AddButton
                            rang="orange"
                            back="white"
                            border="orange"
                            onClick={() => this.editUser(val)}
                          >
                            Edit ✏️
                          </AddButton>
                        )}
                        <AddButton
                          onClick={() =>
                            this.setState({
                              data: this.state.data.filter(
                                (v) => v.id !== val.id
                              ),
                            })
                          }
                          rang="red"
                          back="white"
                          border="red"
                        >
                          Delete ❌
                        </AddButton>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </Divacha>
      </Container>
    );
  }
}
