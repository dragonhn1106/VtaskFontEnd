import React, { Component } from 'react';
import './TableJob.css';
import TableJobAction from '../TableJobAction/TableJobAction';
import TableJobAll from './TableJobAll/TableJobAll';
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
class TableJob extends Component {
    render() {
        return (
            <div className="TableJob">
            <TableJobAction></TableJobAction>
            <Route
                path={`${this.props.match.path}/`}
                exact
                component={TableJobAll}
            />
            <Route
                path={`${this.props.match.path}/nhom-viec`}
                exact
                component={TableJobAll}
            />
            <Route
                path={`${this.props.match.path}/thanh-vien`}
                exact
                component={TableJobAll}
            />
            </div>
        );
    }
}

export default withRouter(TableJob);