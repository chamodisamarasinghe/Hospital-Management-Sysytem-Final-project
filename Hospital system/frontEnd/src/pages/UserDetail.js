import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Swal from 'sweetalert2'


export default function UserDetail() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();

    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/user/getUsers");
        setUsers(result.data);
    }

    const deleteUser = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                await axios.delete(`http://localhost:8080/api/v1/user/deleteUser/${id}`);
                loadUsers();
            }
        })
    }

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.contact}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-sm btn-outline-primary mx-1"
                                          to={`/update/${user.id}`}>Edit</Link>
                                    <button className="btn btn-sm btn-outline-danger mx-1"
                                            onClick={() => deleteUser(user.id)}>Delete
                                    </button>
                                </td>
                            </tr>

                        ))
                    }
                    </tbody>
                </table>
            </div>

        </div>
    )
}