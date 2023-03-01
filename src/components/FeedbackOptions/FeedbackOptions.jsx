import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
    width: 70px;
    border-radius: 4px;
    margin: 7px;
    padding: 5px 10px;
    border: 1px solid grey;
    background-color: #6f6dd1;
    color: white;
    :hover,
    :focus{
        outline: none;
        transform:scale(1.1);
    }
`

export const FeedbackOptions = ({options, getFeedback}) => {
    return (
  <>  
  {options.map((option) => (<StyledButton type="button" key={option} onClick={() => getFeedback(option)}>{option}</StyledButton>))
    }
    </>
    )
}