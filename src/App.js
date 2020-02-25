import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Typography, Form, Button, Input, List, Card, message, Icon } from 'antd';
import './App.css';
import data from './data';

import copy from 'clipboard-copy';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import GHCorner from 'react-gh-corner';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { decodeURIComponent } = window;

const normalize = (url, idp_domain) =>
  url.replace(/\{idp_domain\}/g, `${idp_domain.trim()}.edu.cn`);

const normalizeStyled = (url, idp_domain) => {
  console.info(`idp_domain: ${idp_domain}`);
  const styledText = idp_domain
    ? `<p>${decodeURIComponent(decodeURIComponent(url)).replace(
        /\{idp_domain\}/g,
        `<span style="background-color: rgb(0, 255, 0);">${idp_domain.trim()}.edu.cn</span>`
      )}</p>`
    : `<p>${decodeURIComponent(decodeURIComponent(url)).replace(
        /\{idp_domain\}/g,
        `<span style="background-color: rgb(255, 255, 0);">${idp_domain.trim()}.edu.cn</span>`
      )}</p>`;
  return styledText;
};

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
      <GHCorner
        href="https://github.com/liudonghua123/wayfless-generator"
        positon="top-right"
        bgColor="#550088"
        size={100}
        ariaLabel="Check my project"
        openInNewTab={true}
      />
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['WAYFless']} style={{ lineHeight: '64px' }}>
          <Menu.Item key="WAYFless">WAYFless</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>WAYFless</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }} className="mainContent">
          <Typography>
            <Title>WAYFless</Title>
            <Paragraph>
              <Text strong>WAYFless</Text>
              是一种通过将IDP地址组合在URL中，避免用户在采用<Text strong>Shibboleth</Text>
              认证时必须先选择自己所在机构的方法，省去了不同SP界面各不相同的复杂认证步骤。
            </Paragraph>
            <Paragraph>
              请在下面输入框中输入您自己所在学校idp系统的域名，已省略 <Text mark>.edu.cn</Text> 部分，例如输入
              <Text code>idp.ynu</Text>，列表中即可自动生成<Text code>idp.ynu.edu.cn</Text>对应的各大数据库的
              <Text strong>WAYFless</Text>链接，可以点击其后的复制或打开进行后续操作。
            </Paragraph>
            <Paragraph>
              加入<Text strong>CARSI</Text>联盟的各个学校均可使用此方式，方便用户使用。
            </Paragraph>
            <Paragraph>本词条由深圳大学图书馆、香港中文大学(深圳)图书馆、清华大学图书馆共同维护。</Paragraph>
            <Paragraph>本列表内容较多，可以根据数据库名称输入过滤字词进行过滤筛选！</Paragraph>
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
                <Form.Item label="输入过滤字词">
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
                            <ReactQuill
                              readOnly
                              modules={{ toolbar: false }}
                              value={normalizeStyled(url, idpDomainValue)}
                            />
                          </div>
                          <div className="operation-container">
                            <Button
                              icon="copy"
                              disabled={!url.includes('{idp_domain}') || !idpDomainValue.trim()}
                              type="primary"
                              onClick={copyHandler(normalize(url, idpDomainValue))}
                            >
                              复制
                            </Button>
                          </div>
                          <div className="operation-container">
                            <Button
                              icon="global"
                              disabled={!url.includes('{idp_domain}') || !idpDomainValue.trim()}
                              onClick={openURL(normalize(url, idpDomainValue))}
                            >
                              打开
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
      <Footer style={{ textAlign: 'center' }}>
        WAYFless generator ©2020 Created by Donghua Liu,{' '}
        <a href="https://github.com/liudonghua123/wayfless-generator">
          <Icon style={{ fontSize: '20px' }} type="github" />
        </a>
      </Footer>
    </Layout>
  );
}

export default App;
