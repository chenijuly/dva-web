import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { Layout } from 'antd';
import ManageList from '../manage-list';

const Logo = require('@/assets/logo.png')
const { Header, Content } = Layout;
const IndexPage: React.FC = (props) => {
  const {children, } = props
  // useEffect(() => {
  //   dispatch({

  //   })
  // },[])
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>帮助中心管理后台</h1>
      <ManageList />
      {children}
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
