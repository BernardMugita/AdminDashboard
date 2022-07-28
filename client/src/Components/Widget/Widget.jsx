import React from 'react'
import { MdArrowUpward, MdPersonOutline, MdOutlineAccountBalanceWallet, MdOutlineShoppingBag, MdOutlineMonetizationOn } from 'react-icons/md'
import '../Widget/Widget.scss'

const Widget = ({ type }) => {
    let data;

    const amount = 100;
    const diff = 20;

    switch (type) {
        case "users":
            data = {
                title: "USERS",
                id: "QWAAKS675HJJH",
                isMoney: false,
                link: "See all users",
                icon: <MdPersonOutline className='icon' style={{color:"crimson", backgroundColor:"#8e000058", borderRadius:"5px", padding:"0.1rem"}}/>,
            };
            break;

        case "orders":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <MdOutlineShoppingBag className='icon' style={{color:"pink", backgroundColor:"#ff45f356", borderRadius:"5px", padding:"0.1rem"}}/>,
            };
            break;

        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MdOutlineMonetizationOn className='icon' style={{color:"green", backgroundColor:"#00ff2238", borderRadius:"5px", padding:"0.1rem"}}/>,
            };
            break;

        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "Account balance",
                icon: <MdOutlineAccountBalanceWallet className='icon' style={{color:"yellow", backgroundColor:"#d5ff4d55", borderRadius:"5px", padding:"0.1rem"}}/>,
            };
            break;
        default:
            break;
    }

    return (
        <div className='Widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="id">{data.id}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <MdArrowUpward />
                    14%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget