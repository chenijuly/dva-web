import React from 'react';

import styles from './index.less';
const plus = require('@/assets/plus.png');
function ManageList() {
  return (
    <>
      <div className={styles.list}>
        <div className={styles.column}>
          <div className={styles.topTitle}>一级目录</div>
          <img src={plus} alt="添加" />
        </div>
        <div className={styles.column}>
          <div className={styles.topTitle}>二级目录</div>
          <img src={plus} alt="添加" />
        </div>
        <div className={styles.column} style={{ width: 'calc(62.5vw - 536px)' }}>
          <div className={styles.topTitle}>文章列表</div>
          <img src={plus} alt="添加" />
        </div>
      </div>
      <div className={styles.listContent}>
        <div className={styles.column}>
          <div>一级目录列表</div>
        </div>
        <div className={styles.column}>
          <div>一级目录列表</div>
        </div>
        <div className={styles.column} style={{ width: 'calc(62.5vw - 536px)' }}>
          <div>文章列表</div>
        </div>
      </div>
    </>
  );
}

export default ManageList;
