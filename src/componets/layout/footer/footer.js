import React from 'react';
import style from './footer.module.scss'
import Logo from './../../../img/logo_usd.jpg'
import TableFoot from "./table_foot";
import VkLogo from "./../../../img/logo_vk.jpg"
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <div className={style.first_foot}>
                <Link to="/"> <img src={Logo}/></Link>
                <div className={style.social}>
                    <div className={style.text_social}>Подпишитесь в соц. сетях</div>
                    <div className={style.icons}>
                        <Link to="https://vk.com/usd_russia" className={style.icon}><img src={VkLogo}></img></Link>
                        <Link to="https://www.instagram.com/usd_russia/" className={style.icon}><img src={VkLogo} /></Link>
                    </div>
                </div>
            </div>
            <div className={style.second_foot}>
                <TableFoot title="Главная" name_text={[
                    {"name":"Benefits", "link":"/"},
                    {"name":"Our Testimonials", "link":"#"},
                    {"name":"Partners", "link":"#"}
                ]}/>
                <TableFoot title="Services" name_text={[
                    {"name":"Web Design", "link":"#"},
                    {"name":"Website Development", "link":"#"},
                    {"name":"App Development", "link":"#"},
                    {"name":"Digital Marketing", "link":"#"}
                ]}/>
                <TableFoot title="Партнёры" name_text={[
                    {"name":"Alphard Group", "link":"#"},
                    {"name":"Dynamic State", "link":"#"},
                    {"name":"Aura", "link":"#"},
                    {"name":"ACV", "link":"#"},
                    {"name":"Kicx", "link":"#"},
                    {"name":"SWAT", "link":"#"},
                    {"name":"ORIS", "link":"#"}
                ]}/>
                <TableFoot title="About Us" name_text={[
                    {"name":"Our Team", "link":"#"},
                    {"name":"Achievements", "link":"#"},
                    {"name":"Awards", "link":"#"}
                ]}/>
                <TableFoot title="Careers" name_text={[
                    {"name":"Job Openings", "link":"#"},
                    {"name":"Benefits & Perks", "link":"#"},
                    {"name":"Employee Refral", "link":"#"}
                ]}/>
                <TableFoot title="Blogs" name_text={[
                    {"name":"Our Blogs", "link":"#"}
                ]}/>
            </div>
            <div className={style.third_foot}>
                <div className={style.first_text}>@2024 USD-Russia. Все права защищены.</div>
                <div className={style.second_text}>
                    <div className={style.third_foot_text}>Privacy Policy</div>
                    <div className={style.third_foot_text}>Terms & Conditions</div>
                    <div className={style.third_foot_text}>Cookie Policy</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;