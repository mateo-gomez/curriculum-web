import React, { Component } from 'react'
//components
import HomeLayout from "../components/home-layout";
import Header from "../../header/components/header";
import Content from '../../content/components/content'
import Profile from '../../content/components/profile'
import ExpContent from '../../content/components/exp-content'
import Skills from '../../content/components/skills'
import Row from '../../content/components/row'

export default class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Header />
        <Content>
          <Profile />
          <ExpContent data={this.props.data} />
          <Skills data={this.props.data} />
          <Row data={this.props.data} />
        </Content>
      </HomeLayout>
    )
  }
}