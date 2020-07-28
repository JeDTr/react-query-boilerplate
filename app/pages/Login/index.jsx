import React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Form from "@/components/Form";
import Button from "@/components/Button";
import { useAuthContext } from "@/contexts/AuthContext";

import * as S from "./styled";

const Login = () => {
  const history = useHistory();
  const { setUser } = useAuthContext();
  const [mutate, { isLoading, error }] = useMutation((data) =>
    axios.post("http://localhost:5000/login", data),
  );

  const handleSubmit = async (values) => {
    mutate(values, {
      onSuccess(response) {
        setUser({ ...response.data, isAuthenticated: true });
        history.push("/");
      },
    });
  };

  return (
    <S.Wrapper>
      <S.FormWrapper>
        <Form onSubmit={handleSubmit} errors={error?.response?.data}>
          <Form.Group>
            <Form.Label htmlFor="email">Email (*)</Form.Label>
            <Form.Field type="text" name="email" id="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password (*)</Form.Label>
            <Form.Field type="password" name="password" id="password" />
          </Form.Group>
          <Button type="submit" disabled={isLoading} extend>
            Submit
          </Button>
        </Form>
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default Login;
