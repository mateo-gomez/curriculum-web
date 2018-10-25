import React, { Component } from 'react'

import HomeLayout from "../components/home-layout";
import Header from "../../header/components/header";
import Content from '../../content/components/content'
import Cards from "../../content/components/cards";
import Nav from '../../header/components/nav'
import Contact from '../../contact/components/contact'
import Footer from '../../footer/components/footer'
import NavComponent from '../../header/components/nav';
import Portfolio from '../../content/components/portfolio'
import Knowledges from '../../content/components/knowledges';

export default class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Header />
        <NavComponent />
        <Content>
          <Cards aboutMe={this.props.data.content[0].aboutMe} />
          <Portfolio />
          <Knowledges cards={this.props.data.content[0].cards} />
        </Content>
        <Contact contact={this.props.data.content[0].contact} />
        <Footer />
      </HomeLayout>
    )
  }
}