import React, { useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
export default withRouter(function RecipePage({ match }) {
    
    const {_id} = match.params;
console.log(_id)
    return (

        <Fragment><h1>Recipe Page</h1></Fragment>

    )
})