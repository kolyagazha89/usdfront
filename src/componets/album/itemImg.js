import React from 'react';
import style from "./album.module.scss"
import img from "./../../img/photo.jpg"
const ItemImg = () => {
    return (
        <div className={style.box_img}>
            <img src={img}/>
        </div>
    );
};

export default ItemImg;