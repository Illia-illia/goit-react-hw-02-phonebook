import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Wrap = styled.div`
  margin: 16px;
`;

export const FormContact = styled(Form)`
  border: 1px solid black;
  width: 400px;
  display: block;
  padding: 15px;
  margin: 0;
`;

export const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
`;

export const Input = styled(Field)`
  all: unset;
  display: flex;
  border: 2px solid black;
  margin: 10px 0;
  padding: 15px;
  font-size: 20px;
  &:focus-visible {
    border-radius: 4px;
    border: 3px solid lightblue;
  }
`;

export const Button = styled.button`
  display: block;
  box-shadow: inset 0px 0px 12px 3px #ffffff;
  background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
  background-color: #ededed;
  border-radius: 4px;
  border: 2px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #212121;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 16px 37px;
  text-decoration: none;

  &:hover {
    background: linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
    background-color: #dfdfdf;
  }
`;