import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Typography, Form, Button, Input, List, Card, message } from 'antd';
import './App.css';
import data from './data';

import copy from 'clipboard-copy';
const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { decodeURIComponent } = window;

const normalize = (url, idp_domain) => decodeURIComponent(url).replace('{idp_domain}', `${idp_domain.trim()}.edu.cn`);

const copyHandler = url => e => {
  copy(url).then(() => {
    message.info('已复制到剪切板！');
  });
};

const openURL = url => e => {
  window.open(url);
};

function App() {
  const [idpDomainValue, setIdpDomainValue] = useState('');
  const [spValue, setSpValue] = useState('');
  const filteredData = spValue.trim()
    ? data.filter(item => {
        console.info(item);
        return item.title.toLowerCase().includes(spValue.trim().toLowerCase());
      })
    : data;
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">WAYFless</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>WAYFless</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Typography>
            <Title>WAYFless</Title>
            <Paragraph>
              <Text strong>WAYFless</Text>
              是一种通过将IDP地址组合在URL中，避免读者在采用<Text strong>Shibboleth</Text>
              认证时必须先选择自己所在机构的方法，省去了不同SP界面各不相同的复杂认证步骤。
            </Paragraph>
            <Paragraph>
              请在下面输入框中输入您自己所在学校idp系统的域名，例如<Text code>idp.ynu</Text>
              <Text strong>.edu.cn</Text>，列表中即可自动生成
              <Text strong>WAYFless</Text>链接，可以链接后的点击复制或访问。
            </Paragraph>
            <Paragraph>
              加入<Text strong>CARSI</Text>联盟的各个学校均可使用此方式，方便读者使用。
            </Paragraph>
            <Paragraph>本词条由深圳大学图书馆、香港中文大学(深圳)图书馆、清华大学图书馆共同维护。</Paragraph>
          </Typography>
          <Row>
            <Col span={24}>
              <Form layout="inline">
                <Form.Item label="输入IDP域名">
                  <Input
                    allowClear
                    placeholder="idp.ynu"
                    value={idpDomainValue}
                    addonBefore="https://"
                    addonAfter=".edu.cn"
                    onChange={e => setIdpDomainValue(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="输入过滤关键字词">
                  <Input allowClear placeholder="EBSCO" value={spValue} onChange={e => setSpValue(e.target.value)} />
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <List
                dataSource={filteredData}
                renderItem={item => (
                  <List.Item key={item.title}>
                    <Card title={item.title} style={{ width: '100%' }}>
                      {item.accessURLs.map(url => (
                        <Row type="flex" justify="start" key={url}>
                          <div className="link-container">
                            <Input disabled={!url.includes('{idp_domain}')} value={normalize(url, idpDomainValue)} />
                          </div>
                          <div className="operation-container">
                            <Button
                              disabled={!url.includes('{idp_domain}')}
                              type="primary"
                              onClick={copyHandler(normalize(url, idpDomainValue))}
                            >
                              复制
                            </Button>
                          </div>
                          <div className="operation-container">
                            <Button
                              disabled={!url.includes('{idp_domain}')}
                              type="primary"
                              onClick={openURL(normalize(url, idpDomainValue))}
                            >
                              访问
                            </Button>
                          </div>
                        </Row>
                      ))}
                    </Card>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>WAYFless generator ©2018 Created by Donghua Liu</Footer>
    </Layout>
  );
}

export default App;
