import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { Layout } from 'antd'
import ManageList from '../manage-list';

const { Header, Content } = Layout

function IndexPage() {
  return (
    <Layout >
      <Header style={{position: 'fixed', width: '100%'}}>
        <div style={{padding: '0 18.75%', display: 'flex', justifyContent: 'space-between', height: '72px', background:'#005BAB'}}>
          <div>
            Header
          </div>
          <div className={styles.headerRight}>
            <a>帮助中心</a> 
            <a>帮助中心后台管理</a>
          </div>
        </div>
      </Header>
      <Content style={{ padding: '72px 18.75%', overflow: 'scroll'}}>
        <div className={styles.normal}>
          <h1 className={styles.title}>帮助中心管理后台</h1>
          <ManageList />
        </div>
      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
