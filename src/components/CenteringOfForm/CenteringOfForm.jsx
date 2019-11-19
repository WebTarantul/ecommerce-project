import React from 'react';
import s from './CenteringOfForm.module.scss';

const CenteringOfForm = ({ children, innerWith,...props }) => (
  <div className={s.wrapper}>
    <div className={s.inner} style={{maxWidth: `${innerWith}px`}} {...props} >{children}</div>
  </div>
);

CenteringOfForm.defaultProps = {
  innerWith: 425,
};

export default CenteringOfForm;
