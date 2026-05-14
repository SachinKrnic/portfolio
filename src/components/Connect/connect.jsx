import React from "react";
import './connect.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import leetcode from '../../assets/leetcode.png'
import instagram from '../../assets/instagram.png'

const Connect = () => {
    return (
        <div className="links">
            <a href="https://github.com/sachinkrnic" aria-label="GitHub">
                <img src={github} alt="GitHub" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/sachinkrnic/" aria-label="LinkedIn">
                <img src={linkedin} alt="LinkedIn" className="link" />
            </a>
            <a href="https://leetcode.com" aria-label="LeetCode" target="_blank" rel="noopener noreferrer">
                <img src={leetcode} alt="LeetCode" className="link" />
            </a>
            <a href="https://www.instagram.com/sachinkrnic__01" aria-label="Instagram">
                <img src={instagram} alt="Instagram" className="link" />
            </a>
        </div>
    )
}
export default Connect;