import React from 'react';
import styles from './PlaceSection.module.css';
import photo from '../../../../assets/photo.png';

const PlaceSection = () => {  
  return (
    <div className={styles.container}>
      {/* <img className={styles.image} src={photo} alt="" /> */}
       <div className={styles.secondDiv}>
              <button className={styles.btn}></button>
            </div>
    </div>
    
  );
};

export default PlaceSection;