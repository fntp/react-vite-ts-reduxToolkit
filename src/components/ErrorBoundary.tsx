import React from 'react';
import { Button, Result, Row, Col } from 'antd';

export const ErrorPage: React.FC = () => {
  return (
    <Row
      justify="center"
      align="middle"
      wrap={false}
      style={{ height: '100vh' }}
    >
      <Col>
        <Result
          status="error"
          title="对不起，发生意外错误！"
          subTitle="稍后我们将立即处理。"
          extra={[
            <Button
              type="primary"
              key="connectionManager"
              onClick={() => {
                console.log('联系管理员事件触发。');
              }}
            >
              联系管理员
            </Button>
          ]}
        />
      </Col>
    </Row>
  );
};
