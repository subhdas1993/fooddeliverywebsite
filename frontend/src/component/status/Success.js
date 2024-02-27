import React from 'react'
import Alert from 'react-bootstrap/Alert'

export default function Success(props) {
    return (
        <Alert variant='success'>
            {props.success}
        </Alert>
    )
}
