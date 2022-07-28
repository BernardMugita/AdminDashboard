import styled from "styled-components"
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdDashboard, MdEmail, MdLogout, MdSettingsSystemDaydream, MdSettings } from 'react-icons/md'
import { BsCreditCard2BackFill, BsBroadcastPin } from 'react-icons/bs'
import { IoStatsChartSharp } from 'react-icons/io5'
import { TbCalendarStats } from 'react-icons/tb'
import { RiNotification2Fill } from 'react-icons/ri'
import { GiPortal } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import Logo from '../Resources/plausemedeiared.png'

const Left = styled.div`
        background-color: #000000;
        flex: 2;
        border-top: 1px ridge #fff;
        height: 100%;
        overflow-y: scroll;
        padding-left: 0.2rem;
    `
const Heading = styled.div`
        color: #fff;
        text-align: center;
        font-size: 2rem;
        border-bottom: 2px solid #fff;
        margin-bottom: 2rem;
        background-color: #000000;
    `
const Tab = styled.span`
        background-color: #000000;
        padding: 0.5rem;
        color: #ffffff;
        margin: 0.3rem;
        text-decoration: none;
        display: flex;
        border-bottom: 1px solid #ffffff;
    `
const MiniFooter = styled.div`
        background-color: #fff;
        padding: 2rem;
        color: #000000;
        margin: 0.3rem;
        margin-top: 2rem;
        border-radius: 0.3rem;
    `
const Bal = styled.div`
        font-size: 2.5rem;
        background-color: #fff;
    `
const LeftLink = styled(Link)`
        text-decoration: none;
        color: #ffffff;
        background-color: #000000;
        margin: 0.5rem;
        font-size: 1rem;
    `
const Tags = styled.p`
        color: red;
        font-weight: 600;
        font-size: 1rem;
        margin-left: 0.5rem;
    `

const SiteId = styled.div`
    padding-left: 2rem;
    color: #fff;
    border-bottom: 1px solid #fff;
    `

const style = { fontSize: "1.5rem", marginTop: "0.3rem" };

const resize = { height: "15rem", width: "15rem" };

const activeTab = { borderColor: "white", borderWidth: "1px", borderStyle: "solid", color: "white" }

export default function Sidebar() {

    const [active, setActive] = useState(activeTab)

    return (
        <Left>
            <SiteId>
                <h3>Artist Portal  <GiPortal /></h3>
            </SiteId>
            <Heading>
                <img src={Logo} alt="" style={resize} />
            </Heading>
            <Tags>MAIN</Tags>
            <Tab style={active}>
                <MdDashboard style={style} />
                <LeftLink to="/">  Dashboard </LeftLink>
            </Tab>
            <Tags>LISTS</Tags>
            <Tab>
                <BsCreditCard2BackFill style={style} />
                <LeftLink to="/users"> Users</LeftLink>
            </Tab>
            <Tab>
                <BsBroadcastPin style={style} />
                <LeftLink to="/"> Products</LeftLink>
            </Tab>
            <Tab>
                <MdEmail style={style} />
                <LeftLink to="/email"> Orders</LeftLink>
            </Tab>
            <Tags>USEFUL</Tags>
            <Tab>
                <IoStatsChartSharp style={style} />
                <LeftLink to="/payment"> Stats</LeftLink>
            </Tab>
            <Tab>
                <RiNotification2Fill style={style} />
                <LeftLink to="/support"> Notifications</LeftLink>
            </Tab>
            <Tags>SERVICE</Tags>
            <Tab>
                <MdSettingsSystemDaydream style={style} />
                <LeftLink to="/"> System Health</LeftLink>
            </Tab>
            <Tab>
                <TbCalendarStats style={style} />
                <LeftLink to="/"> Logs</LeftLink>
            </Tab>
            <Tab>
                <MdSettings style={style} />
                <LeftLink to="/">Settings</LeftLink>
            </Tab>
            <Tags>USER</Tags>
            <Tab>
                <CgProfile style={style} />
                <LeftLink to="/">Profile</LeftLink>
            </Tab>
            <Tab>
                <MdLogout style={style} />
                <LeftLink to="/"> Log Out</LeftLink>
            </Tab>
        </Left>
    )
}
