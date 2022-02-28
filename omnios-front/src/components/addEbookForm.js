import { Form, Input, Button, Upload,Select } from 'antd';
import { useNavigate } from 'react-router-dom';

import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
const { Option } = Select;

const AddEbbokForm = () => {
    const navigate=useNavigate()
    const [file,setFile]=useState(null)

    const onFileChange=({ file, fileList })=> {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
        setFile(file)
      }
    }
  const onFinish = (values) => {

    try{
       
        console.log("values",values,file)

        navigate('/')

    }catch(error){
        onFinishFailed(error)
    }
   
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Ebbok name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input the ebbook name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ebbok author"
        name="author"
        rules={[
          {
            required: true,
            message: 'Please input the ebbook author!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ebbok tags"
        name="tags"
        
      >
         <Select
    showSearch
    mode="multiple"
    placeholder="Select tags"
    optionFilterProp="children"
 
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="Fantasia">Fantasia</Option>
    <Option value="Misteri">Misteri</Option>
    <Option value="Medieval">Medieval</Option>
  </Select>
      </Form.Item>
      <Form.Item
        label="Ebbok"
        name="file"
       
      >
         <Upload onChange={onFileChange}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>,
      </Form.Item>
    
  
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddEbbokForm