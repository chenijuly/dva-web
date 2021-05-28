import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import styles from './common.less'


const Logo = require('@/assets/logo.png')
const { Header, Content } = Layout;
export type IntrinsicElements = {
  [elemName: string]: any;
}
const BasicLayout: React.FC<IntrinsicElements> = (props) => {
  const {children, dispatch } = props
  useEffect(() => {
    dispatch({
      type: 'user/fetchUserPrivilege'
    })
  },[])
  return (
    <Layout>
      <Header style={{ position: 'fixed', width: '100%', zIndex: 2 }}>
        <div
          style={{
            padding: '0 18.75%',
            display: 'flex',
            justifyContent: 'space-between',
            height: '72px',
            background: '#005BAB',
          }}
        >
          <div>
            <img src={Logo} alt='ichint' style={{marginTop: '13px', width: '137px'}}/>
          </div>
          <div className={styles.headerRight}>
            <a>帮助中心</a>
            <a>帮助中心后台管理</a>
          </div>
        </div>
      </Header>
      <Content style={{ padding: '124px 18.75% 0', overflow: 'scroll' }}>
          {children}
      </Content>
    </Layout>
  );
}

BasicLayout.propTypes = {};
// const mapStateToProps = (state) => {
//   return {
//     user: state.
//   }
// }
export default connect(
  // ({user}) => ({ user })
  )(BasicLayout);
