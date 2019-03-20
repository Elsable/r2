import React,{Fragment,useState} from 'react';
import { Card, Icon, Avatar } from 'antd';
import {Link} from 'react-router-dom'

const { Meta } = Card;

export default function Card1 ({_id,name,category}) {

	return(
	<Fragment>
    <Link to={`/recipes/${_id}`}>
		<Card
    style={{ width: 300 }}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={name}
      description={category}
    />
  </Card>
  </Link>

	</Fragment>
	)



}
