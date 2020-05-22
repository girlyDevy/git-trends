import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { List, Avatar, Space, Button, Row, Badge,Spin} from "antd";
import {
  ForkOutlined,
  LikeOutlined,
  StarOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { T } from "antd/lib/upload/utils";
const Dashboard = (props) => {
  const [listData, setData] = useState([]);
  const [load, setLoading] = useState(true);
  const fetchData = () => {
    axios
      .get("https://github-trending-api.now.sh/repositories?since=daily")
      .then((response) => {
        // handle success
        if (response.data) {
          setData(response.data.slice(0, 10));
          setLoading(false)
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  });

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };
  return (
    <div className="root-div">
      <Row align="top" justify="end">
        <Button
          type="primary"
          shape="round"
          icon={<LogoutOutlined />}
          size="large"
          onClick={logout}
        >
          Logout
        </Button>
      </Row>
      <h2 className="page-header">Trending</h2>
      <h4 className="page-header">
        See what the GitHub community is most excited about today.
      </h4>
 <List
        style={{ backgroundColor: "white" }}
        className="list-div"
        itemLayout="vertical"
        size="large"
        loading={load}
        dataSource={listData}
        renderItem={(item, i) => (
          <List.Item
            key={item}
            actions={[
              <IconText
                icon={StarOutlined}
                text={item.stars}
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={ForkOutlined}
                text={item.forks}
                key="list-vertical-message"
              />,
              <Badge
                style={{ backgroundColor: item.languageColor }}
                count={item.language}
              />,
              // <h3 style={{color:item.languageColor}}>{item.language}</h3>
            ]}
            extra={[
              <h3>Stars Today</h3>,
              <IconText
                icon={StarOutlined}
                text={item.currentPeriodStars}
                key="list-vertical-star-o"
              />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} shape="round" size={40} />}
              title={
                <a href={item.url}>
                  {item.author}/{item.name}
                </a>
              }
              description={item.description}
            />
           
          </List.Item>
        )}
      />
    </div>
  );
};

export default Dashboard;
