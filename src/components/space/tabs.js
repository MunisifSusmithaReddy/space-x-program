import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { actionCreators, selectors } from '../../store/basic';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './index.css';
import Search from '../../common/search';
import moment from 'moment';
import history from '../../history';

let searchKeyword = '';

class Tabs extends React.Component {
  constructor(props){
      super(props);
      this.state = {
      }
  }

  
 render() {
     const { onChange } = this.props;
     return (
        <div className="border">
           <div className={`${window.location.href.includes('/address') ? '' : 'background-pink'} tabs`} onClick={onChange('data')}>SpaceX data</div>
           <div className={`${window.location.href.includes('/address') ? 'background-pink' : ''} tabs`} onClick={onChange('address')}>SpaceX address</div>
        </div>
     )
 }
}

export default Tabs;