import React from 'react';
import { Tag, Space } from 'antd-mobile';
import { DemoBlock } from 'demos';
import { clamp } from 'ts-library';

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space direction='vertical'>
          <Tag fill='outline'>{clamp(1, 10, 20)}</Tag>
          <Tag fill='outline'>{clamp(1, 10, 20)}</Tag>
          <Tag fill='outline'>{clamp(1, 10, 20)}</Tag>
        </Space>
      </DemoBlock>
    </>
  );
};
