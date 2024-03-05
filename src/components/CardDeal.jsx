import React from 'react';
import { card } from '../assets';
import styles, {layout} from '../styles';
import Button from './Button';

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} font-bold`}>Find a better card deal <br className='sm:block hidden'/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5 leading-[30.6px] mb-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" />

      </div>

    </section>
  )
}

export default CardDeal