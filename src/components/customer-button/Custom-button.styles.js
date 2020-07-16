import styled, {css} from 'styled-components';

const invertedButtonStyle = css`
 
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  
`
export const googleSignInStyles = css`
  color: white;
    background-color: #fb183e;

    &:hover {
      color: white;
      background-color: #bc122e;
      border: none;
    }

`

export const buttonStyles = css`
 background-color: black;
  color: white;
  border:none;
   &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }
    return props.inverted ? invertedButtonStyle : buttonStyles
}

export const CustomButtonContainer = styled.button`
 min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
 
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bolder;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  border: 1px solid white;
  text-align: center;

${getButtonStyles}
 
`