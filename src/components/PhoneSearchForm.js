import React, { useEffect } from 'react';
import {
  Form,
  Button,
  Input,
} from 'antd';
import { useDispatch } from 'react-redux';

const PhoneSearchForm = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    props.form.validateFields();
  });
  const { getByPhone, form } = props;
  const { getFieldDecorator } = form;

  const handleSubmit = (e) => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      const { phone } = values;
      if (!err) {
        dispatch(getByPhone({ phone }));
      }
    });
  };

  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('phone')(
          <Input
            prefix="+"
            placeholder="Phone"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Поиск
        </Button>
      </Form.Item>
    </Form>
  );
}

const WrappedForm = Form.create()(PhoneSearchForm);
export default WrappedForm;
