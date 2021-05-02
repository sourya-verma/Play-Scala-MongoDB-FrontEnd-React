import React from 'react'
// import Student from './Student'
// import University from './University'
import { NavLink } from "react-router-dom";
import { Container, Typography, AppBar, Toolbar, Button } from '@material-ui/core'
import './index.css'
export default function Main(props) {
    return (

        <Container >
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>Home</Typography>
                    <Button color='inherit'><NavLink className="inactive" activeClassName="active" exact to="/student">Student </NavLink></Button>
                    <Button color='inherit'><NavLink className="inactive" activeClassName="active" exact to="/university">University</NavLink></Button>
                    <Button color='inherit'><NavLink className="inactive" activeClassName="active" exact to="/studentsearchby">Search_Student_By_Name</NavLink></Button>
                    <Button color='inherit'><NavLink className="inactive" activeClassName="active" exact to="/universitysearchby">Search_University_by_Name</NavLink></Button>
                    <Button color='inherit'><NavLink className="inactive" activeClassName="active" exact to="/studentjoinuniversity">Student_Join_University</NavLink></Button>
                </Toolbar>
            </AppBar>
        </Container>




    )
}
