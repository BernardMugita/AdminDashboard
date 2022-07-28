import styled from "styled-components";
import './Navbar.scss'
import React from 'react'
import image from '../../Resources/index.jpeg'
import { MdOutlineLanguage, MdOutlineFullscreen, MdOutlineNotificationsActive, MdOutlineChatBubble, MdOutlineList, MdOutlineSearch } from 'react-icons/md'

const Container = styled.div`
    background-color: #000000;
    color: #fff;
    display: flex;   
    height: 2rem;
    margin-top: -2rem;
`
const Items = styled.div`
    display: flex;
    float: right;
`
const Item = styled.div`
    margin-right: 1rem;
    font-size: 1.85rem;
    display: flex;
    text-align: right;
    position: relative;
`
const Counter = styled.p`
        color: #fff;
        background-color: red;
        width: 1rem;
        height: 1rem;
        text-align: center;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 0.8rem;
    `

const Navbar = () => {
    return (
        <Container>
            <div className="site-search">
                <input type="text" placeholder="Search..." />
                <MdOutlineSearch id="search" />
            </div>
            <div className="site-items">
                <Items>
                    <Item>
                        <MdOutlineLanguage />
                        <h3>English</h3>
                    </Item>
                    <Item>
                        <MdOutlineFullscreen />
                    </Item>
                    <Item>
                        <MdOutlineNotificationsActive />
                        <Counter>1</Counter>
                    </Item>
                    <Item>
                        <MdOutlineChatBubble />
                        <Counter>2</Counter>
                    </Item>
                    <Item>
                        <MdOutlineList />
                    </Item>
                    <Item>
                        <img src={image} alt="" />
                    </Item>
                </Items>
            </div>
        </Container>
    )
}

export default Navbar;