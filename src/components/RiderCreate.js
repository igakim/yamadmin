import React from 'react';
import {
  Form,
  Button,
  Input,
  Layout,
} from 'antd';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions';

const { Content } = Layout;

const CreateRider = (props) => {
  const dispatch = useDispatch();
  const createStatus = useSelector((state) => state.riders.createRiderStatus);

  const { form } = props;
  const { getFieldDecorator } = form;

  const handleSubmit = (e) => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      if (!err) {
        dispatch(actions.createRider({ ...values, phone: parseInt(values.phone, 10) }));
      }
    });
  };

  return (
    <Layout>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
        }}
      >
        <h1 style={{ textAlign: 'center', fontSize: 30 }}>Создания Курьера</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Item label="Имя">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Это обязательное поле' }],
            })(
              <Input />,
            )}
          </Form.Item>
          <Form.Item label="Сот.Тел">
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Это обязательное поле' }],
            })(
              <Input type="number" />,
            )}
          </Form.Item>
          <Form.Item label="Заметки">
            {getFieldDecorator('notes')(
              <Input />,
            )}
          </Form.Item>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Form.Item>
              <Button onClick={() => props.history.push('/riders/')}>
                  Назад
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                style={{ marginLeft: 10 }}
                type="primary"
                htmlType="submit"
                loading={createStatus === 'request'}
              >
                Сохранить
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Content>
    </Layout>
  );
}

const WrappedForm = Form.create()(CreateRider);
export default withRouter(WrappedForm);
