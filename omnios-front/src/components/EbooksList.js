import { Table, Tag, Button, Card, Input,Modal } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { getEbooks } from '../api/api';
import AddEbbokForm from './addEbookForm';
const { Search } = Input;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },

  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          return (
            <Tag color={'blue'} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },

];



const EbookList=()=>{
    const [source,setSource]=useState(null)
    const [filter,setFilter]=useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const filterRef=useRef()
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    const getParams=()=>{
        //use hook filter to set params to the api
       
        return filter 
    }
    const prepareData=()=>{
        const params=getParams() 
        console.log("params",params)
        let data=getEbooks(params)
        setSource(data)

    }
    const onSearch=(values)=>{
       setFilter(values)
       prepareData()
    }
    useEffect(()=>{
        prepareData()
    },[])
    if(!source) <div>loading</div> 
    return (
        <>
        <div> 
            <Card>
            <Button onClick={showModal}>Add Ebbok</Button>
            <Search  ref={filterRef} placeholder="filter by name" onSearch={onSearch} style={{ width: 200 }} />
            </Card>
        </div>
         <Table columns={columns} dataSource={source} />
         <Modal title="Add ebbok" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <AddEbbokForm/>
      </Modal>
        </>
    )
}

export default EbookList