import React from 'react'
import Navigation from './Navigation'

const Delete = () => {
  return (
    <div>
        <Navigation/>
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h1><center>Delete</center></h1>
                <lable className="form-label">User name</lable>
                <input type="text" className="form-control" />
                <buttn className="btn btn-danger">Delete</buttn>
            </div>
        </div>
    </div></div>
  )
}

export default Delete