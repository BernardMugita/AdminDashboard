import React from 'react'
import '../Table/Table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 1226388,
            product: "Indie Film",
            img: "",
            customer: "Philip Jatelo",
            date: "1 March",
            amount: 785,
            method: "Mpesa payment",
            status: "Approved"
        },
        {
            id: 1234511,
            product: "Bruklynn Boyz Record",
            img: "",
            customer: "Austin Kamau",
            date: "3 October",
            amount: 500,
            method: "Mpesa payment",
            status: "Approved"
        },
        {
            id: 1258586,
            product: "Poem Record",
            img: "",
            customer: "Mary Akoth",
            date: "1 June",
            amount: 700,
            method: "Bank payment",
            status: "Approved"
        },
        {
            id: 1229982,
            product: "Sailors E-P",
            img: "",
            customer: "Jordan Marko",
            date: "25 August",
            amount: 400,
            method: "Mpesa payment",
            status: "Approved"
        },
        {
            id: 1266439,
            product: "Ishmael Akro Mixtape",
            img: "",
            customer: "Kijabe Opiyo",
            date: "14 April",
            amount: 765,
            method: "Bank payment",
            status: "Pending"
        },
        {
            id: 1226452,
            product: "Under the Sun Indie Production",
            img: "",
            customer: "Kassim Abram",
            date: "15 June",
            amount: 430,
            method: "Bank payment",
            status: "Pending"
        }

    ]

    return (
        <TableContainer component={Paper} className="Table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className='head'>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Products</TableCell>
                        <TableCell className="tableCell">Customers</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Payment Method</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} className="table-row">
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        <img src={row.img} alt="" className="image"/>
                                        {row.product}
                                    </div>
                                </TableCell>
                            <TableCell className="tableCell">{row.customer}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List