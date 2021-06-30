import React, { useState } from 'react';
import { Input } from 'antd';
import styles from './index.module.scss';

const Demo = () => {
  const [_numberArr1, setNumberArr1] = useState([]);
  const [_numberArr2, setNumberArr2] = useState([]);

  const handleNumberAChange = (event: any) => {
    setNumberArr1(event.target.value.split(''));
  };

  const handleNumberBChange = (event: any) => {
    setNumberArr2(event.target.value.split(''));
  };

  return (
    <div className={styles.container}>
      <Input onChange={handleNumberAChange} style={{ marginTop: '32px' }} />
      <Input onChange={handleNumberBChange} style={{ marginTop: '32px' }} />
      <div style={{ paddingLeft: '12px' }}>
        {_numberArr1?.map((item, index) => {
          const style = { fontSize: '14px' };
          return <span style={style}>{item}</span>;
        })}
      </div>
      <div style={{ paddingLeft: '12px' }}>
        {_numberArr2?.map((item, index) => {
          const style = { fontSize: '14px' };
          if (item === _numberArr1?.[index]) {
            return <span style={style}>{item}</span>;
          }
          return <span style={{ ...style, color: 'red' }}>{item}</span>;
        })}
      </div>
    </div>
  );
};

export default Demo;
