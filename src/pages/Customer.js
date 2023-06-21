import MaterialTable from "@material-table/core"
import { useState, useEffect } from "react";


function Customer(){
    const [ticketDetails, setTicketDetails] = useState([]);

    const columns = [
        {
            title: "ID",
            field: "_id"
        },
        {
            title: "TITLE",
            field: "title"
        },
        {
            title: "DESCRIPTION",
            field: "description"
        },
        {
            title: "ASSIGNEE",
            field: "assignee"
        },
        {
            title: "PRIORITY",
            field: "ticketPriority"
        },
        {
            title: "STATUS",
            field: "status"
        }
    ]

    useEffect(() => {
        //Call the GET tickets API --> asynchonous call
        //Set the state - ticketDetails
    }, [])

    return(
        <div className="bg-light vh-100">
            <div className="container pt-5">
                <h3 className="text-center text-success">Welcome, {localStorage.getItem("name")}</h3>
            </div>
            <p className="text-center text-muted">Take a look at all your tickets below!</p>
            <MaterialTable 
                title="Tickets raised by you"
                columns={columns}
                data={ticketDetails}
            />
        </div>
    )
}

export default Customer