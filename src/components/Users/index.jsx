import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import {
  Button,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Add,
} from "../Annual/Table1/style";
import { Input, Select } from "antd";

const Users = () => {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [body, setBody] = useState({});
  const [add, setAdd] = useState({});

  const { userDetails } = useUserContext();

  const getData = () => {
    fetch("/api/usercrud/getalluser", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  const getById = async (id) => {
    await fetch(`/api/usercrud/getbyiduser/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setBody(res));
  };

  useEffect(() => {
    getData();
  }, []);

  const setRole = (role) => {
    switch (role) {
      case 1:
        return "Admin";
      case 2:
        return "User";
    }
  };

  const onDel = async (id) => {
    await fetch(`/api/usercrud/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    getData();
  };

  const status = [
    { value: 1, label: "Admin" },
    { value: 2, label: "User" },
  ];

  const onSave = async (id) => {
    await fetch(`/api/usercrud/updateuser/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(body),
    });
    getData();
    setEdit(false);
  };

  const handleChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onHandleChange = ({ target: { value, name } }) => {
    setAdd({
      ...add,
      [name]: value,
      birthday: "2023-12-10T12:19:39.991Z",
      organizationtype: 1,
      role: 2,
    });
  };

  const onAdd = async () => {
    await fetch("/api/usercrud/createuser", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(add),
    });
    getData();
  };

  return (
    <div className="container">
      <div className="title">Users</div>
      <div className="wrapper">
        <table border={1} className="table">
          <thead>
            <tr className="tr">
              <th className="th">№</th>
              <th className="th">Ism</th>
              <th className="th">Familiya</th>
              <th className="th">JSHIR</th>
              <th className="th">Sana</th>
              <th className="th">Login</th>
              <th className="th">Parol</th>
              <th className="th">Role</th>
              <th className="th">Tahrirlash</th>
            </tr>
            <tr className="tr">
              <th className="th">#</th>
              <th className="th">
                <Input
                  placeholder="Ism"
                  name="firstname"
                  onChange={onHandleChange}
                  style={{ width: "90px" }}
                />
              </th>
              <th className="th">
                <Input
                  placeholder="Familiya"
                  name="lastname"
                  onChange={onHandleChange}
                  style={{ width: "90px" }}
                />
              </th>
              <th className="th">
                <Input
                  placeholder="JSHIR"
                  name="pinfl"
                  onChange={onHandleChange}
                  style={{ width: "90px" }}
                />
              </th>
              <th className="th">
                <Input type="date" style={{ width: "90px" }} />
              </th>
              <th className="th">
                <Input
                  placeholder="Login"
                  name="login"
                  onChange={onHandleChange}
                  style={{ width: "90px" }}
                />
              </th>
              <th className="th">
                <Input
                  placeholder="Parol"
                  name="password"
                  onChange={onHandleChange}
                  style={{ width: "90px" }}
                />
              </th>
              <th className="th">
                <Select
                  options={status}
                  onChange={(value) => {
                    setAdd({
                      ...add,
                      role: value,
                    });
                  }}
                  style={{
                    width: "90px",
                  }}
                />
              </th>
              <th className="th">
                <Button type="green" onClick={onAdd}>
                  <Add />
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 1 ? (
              data
                .filter((e) => e.id !== userDetails?.id)
                .map(
                  (
                    {
                      id,
                      firstname,
                      lastname,
                      password,
                      login,
                      role,
                      pinfl,
                      birthday,
                    },
                    index
                  ) => {
                    return (
                      <tr className="tr" key={id}>
                        <td className="td">{index + 1}</td>
                        <td className="td">
                          {edit === id ? (
                            <Input
                              type="primary"
                              defaultValue={firstname}
                              style={{
                                width: "90px",
                              }}
                              onChange={handleChange}
                              name="firstname"
                            />
                          ) : (
                            firstname
                          )}
                        </td>
                        <td className="td">
                          {edit === id ? (
                            <Input
                              type="primary"
                              defaultValue={lastname}
                              style={{
                                width: "90px",
                              }}
                              onChange={handleChange}
                              name="lastname"
                            />
                          ) : (
                            lastname
                          )}
                        </td>
                        <td className="td">
                          {edit === id ? (
                            <Input
                              type="primary"
                              defaultValue={pinfl}
                              style={{
                                width: "90px",
                              }}
                              onChange={handleChange}
                              name="pinfl"
                            />
                          ) : (
                            pinfl
                          )}
                        </td>
                        <td className="td">
                          {edit === id ? (
                            <Input
                              type="date"
                              defaultValue={birthday}
                              style={{
                                width: "90px",
                              }}
                              onChange={handleChange}
                              name="birthday"
                            />
                          ) : (
                            birthday
                          )}
                        </td>
                        <td className="td">
                          {edit === id ? (
                            <Input
                              type="primary"
                              defaultValue={login}
                              style={{
                                width: "90px",
                              }}
                              onChange={handleChange}
                              name="login"
                            />
                          ) : (
                            login
                          )}
                        </td>
                        <td className="td">
                          {edit === id ? (
                            <Input
                              type="primary"
                              defaultValue={password}
                              style={{
                                width: "90px",
                              }}
                              onChange={handleChange}
                              name="password"
                            />
                          ) : (
                            password
                          )}
                        </td>
                        <td className="td">
                          {edit === id ? (
                            <Select
                              options={status}
                              defaultValue={role}
                              onChange={(value) => {
                                setBody({ ...body, role: value });
                              }}
                              style={{
                                width: "90px",
                              }}
                            />
                          ) : (
                            setRole(role)
                          )}
                        </td>
                        <td className="td">
                          {edit === id ? (
                            <>
                              <Button onClick={() => onSave(id)} type="green">
                                <Icon2 />
                              </Button>
                              <Button onClick={() => setEdit(false)} type="red">
                                <Icon3 />
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                onClick={() => {
                                  setEdit(id);
                                  getById(id);
                                }}
                                type="gold"
                              >
                                <Icon1 />
                              </Button>
                              <Button onClick={() => onDel(id)} type="red">
                                <Icon4 />
                              </Button>
                            </>
                          )}
                        </td>
                      </tr>
                    );
                  }
                )
            ) : (
              <tr className="tr">
                <td className="td" colSpan={9}>
                  Hech narsa topilmadi
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
