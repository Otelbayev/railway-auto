import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { Button, Icon1, Icon2, Icon3, Icon4 } from "../Annual/Table1/style";
import { Input, Select } from "antd";

const Users = () => {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [select, setSelect] = useState(1);
  const [body, setBody] = useState({});

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

  useEffect(() => {
    getData();
  }, [data]);

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
    { value: 2, label: "User" },
    { value: 1, label: "Admin" },
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
              <th className="th">Login</th>
              <th className="th">Parol</th>
              <th className="th">Role</th>
              <th className="th">Tahrirlash</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((e) => e.id !== userDetails?.id)
              .map(
                ({ id, firstname, lastname, password, login, role }, index) => {
                  return (
                    <tr className="tr" key={id}>
                      <td className="td">{index + 1}</td>
                      <td className="td">
                        {edit === id ? (
                          <Input
                            type="primary"
                            defaultValue={firstname}
                            style={{
                              width: "100px",
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
                              width: "100px",
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
                            defaultValue={login}
                            style={{
                              width: "100px",
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
                              width: "100px",
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
                            onChange={(e) => setSelect(e)}
                            style={{
                              width: "100px",
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
                            <Button onClick={() => setEdit(id)} type="gold">
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
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
