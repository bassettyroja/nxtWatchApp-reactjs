import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 4px 8px;
  padding: 30px;
  width: 350px;
`

export const LoginLogo = styled.img`
  width: 180px;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`

export const LoginButton = styled.button`
  height: 30px;
  width: 100%;
  border: none;
  background-color: #4f46e5;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 19px;
  font-family: 'Roboto';
`

export const SubmitError = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: #ff0000;
`
export const InputLabel = styled.label`
  font-size: 18px;
  font-family: 'Roboto';
  color: #7e858e;
  padding: 5px;
`
export const UserInput = styled.input`
  border: 1px solid #606060;
  height: 32px;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
`
export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
`
