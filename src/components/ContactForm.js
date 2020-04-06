import React from 'react'
import PropTypes from "prop-types";
import { TextField, Button } from '@material-ui/core';
import { ValidatorForm } from 'react-form-validator-core';

const classes = {
    root: {
        width: '100%',
        margin: 'auto'
    }
}

const handleSubmit = () => {

}

const handleChange = () => {
    
}

const ContactForm = () => {
    return (
        <ValidatorForm
            ref="form"
            onSubmit={handleSubmit}
        >
            <TextField id="email" label="email" style={{ width: "95%" }} />
            <br />
            <br />
            <TextField id="comments" label="comments" multiline="true" rows="10" style={{ width: "95%" }} />
            <br />
            <br />
            <Button variant="contained" color="primary" type="submit">Submit</Button>
        </ValidatorForm>
    )
}

ContactForm.propTypes = {
    email: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
};

ContactForm.defaultProps = {}

export default ContactForm