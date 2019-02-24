import React, { Component } from 'react';
import {
  Carousel, Button, Modal, notification, Icon, Tree
} from 'antd';
import antdTest from './antdTest.less';

const { TreeNode } = Tree;

class AntdTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello antd'
    };
  }

  // tree
  onSelect(selectedKeys, info) {
    console.log('selected', selectedKeys, info);
  }

  // tree
  onCheck(checkedKeys, info) {
    console.log('onCheck', checkedKeys, info);
  }

  testforModal() {
    console.log('click Button event');
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {
        console.log('modal closed');
      }
    });
  }

  testforNotify() {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />
    });
  }

  render() {
    const { greeting } = this.state;
    return (
      <div>
        <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
        <h4>{greeting}</h4>
        <Button type="default" onClick={this.testforModal}>
          show modal
        </Button>
        <span> | </span>
        <Button type="primary" onClick={this.testforNotify}>
          show notification
        </Button>
        <br />
        <Tree
          checkable
          defaultExpandedKeys={['0-0-0', '0-0-1']}
          defaultSelectedKeys={['0-0-0', '0-0-1']}
          defaultCheckedKeys={['0-0-0', '0-0-1']}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0" disabled>
              <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
              <TreeNode title="leaf" key="0-0-0-1" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
            </TreeNode>
          </TreeNode>
        </Tree>
      </div>
    );
  }
}

export default AntdTest;
