import React from 'react';

const Message = ({isFormValid}) => {
    return (
        <h3 className='form-message text-center'>{isFormValid ? "This form is valid!" : "This form is invalid!"}</h3>
    )
}

export default Message;