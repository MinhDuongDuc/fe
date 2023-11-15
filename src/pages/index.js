
import RootLayout from "@/layout";
import GetCurrentUser from "@/utils/getUser";
import { Button, Layout, Input, Space } from "antd"

import React, { useEffect, useState } from 'react';



const { Sider, Header, Content, Footer } = Layout
const { Search } = Input;

const HomePage = () => {
  console.log(GetCurrentUser());
  return (
    <>
      <RootLayout>
        <div>1234</div>
      </RootLayout>
    </>);
}
export default HomePage
