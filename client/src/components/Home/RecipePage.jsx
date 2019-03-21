import React, { useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo'
import { GET_RECIPE } from "./../../queries"
export default withRouter(function RecipePage({ match }) {

    const { _id } = match.params;
    {/*console.log(_id) */ }
    return (

        <Query query={GET_RECIPE} variables={{ _id }}>
            {({ data, loading, error }) => {
                if (loading) return <Fragment>loading</Fragment>
                if (error) return <Fragment>error</Fragment>
                console.log(data)
                return (
                    <Fragment>

                        <div className="container jumbotron">
                            <div className="card border-info col-md-12">
                                <div className="card-header">
                                    Creado por  <strong>{data.getRecipe.username}</strong>

                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">   <p>
                                        <strong>{data.getRecipe.name} </strong>
                                        <span className="badge badge-pill badge-primary">
                                            <strong>{data.getRecipe.category}</strong>
                                        </span>
                                    </p></h4>
                                    <blockquote className="recipe-description">
                                        <p className="card-text">  {data.getRecipe.description}</p>
                                    </blockquote>
                                    <h3 className="recipe-instructions__title">Instructions</h3>
                                    <div
                                        className="recipe-instructions"
                                        dangerouslySetInnerHTML={{
                                            __html: data.getRecipe.instructions
                                        }}
                                    />

                                </div>

                            </div></div>

                    </Fragment>
                )
            }}


        </Query>

    )
})