// Style your components here
import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CreateForm = styled.form`
  padding: 50px;
`
export const Heading = styled.h1`
  color: #35469c;
  text-align: center;
`
export const Label = styled.label`
  color: #d7dfe9;
`
export const Input = styled.input`
  border: 1px solid #d7dfe9;
  padding: 10px;
  border-radius: 4px;
  outline: none;
  width: 110%;
  color: #5a7184;
  margin-top: 10px;
  margin-bottom: 15px;
`

export const Select = styled.select`
  border: 1px solid #d7dfe9;
  padding: 10px;
  border-radius: 4px;
  outline: none;
  width: 110%;
  color: #5a7184;
  margin-top: 10px;
  margin-bottom: 15px;
`

export const Button = styled.button`
  border: none;
  background-color: #0b69ff;
  width: 60%;
  border-radius: 6px;
  padding: 10px;
  color: #ffffff;
`
