import React, { Component } from "react";
import EmpTable from "./empTable";
class Home extends React.Component {
  state = {
    count: 0,
    employee: {
      empId: 1001,
      empName: "Bhagyasri",
      salary: 45000,
    },
    employees: [
      {
        empId: 1002,
        empName: "leelavathi",
        salary: 50000,
      },
      {
        empId: 1003,
        empName: "prasanna",
        salary: 55000,
      },
      {
        empId: 1004,
        empName: "kavitha",
        salary: 60000,
      },
      {
        empId: 1005,
        empName: "chandana",
        salary: 70000,
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>{this.state.count}</h1>
        <table class="table table-dark table-striped w-50 mx-auto">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.employee.empId}</td>
              <td>{this.state.employee.empName}</td>
              <td>{this.state.employee.salary}</td>
            </tr>
          </tbody>
        </table>
        <EmpTable
          employees={this.state.employees}
          count={this.state.count}
          employee={this.state.employee}
        />
      </div>
    );
  }
}

export default Home;
