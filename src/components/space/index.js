import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { actionCreators, selectors } from '../../store/basic';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './index.css';
import Search from '../../common/search';
import moment from 'moment';
import history from '../../history';
import Tabs from './tabs';
import Pagination from '../../common/pagination';

let searchKeyword = '';

class Landing extends React.Component {
  constructor(props){
      super(props);
      this.state = {
      }
  }

  componentDidMount() {
      const { getSpaceXData, getSpaceAddress } = this.props;
      getSpaceXData();
      getSpaceAddress();
  }

  onSearch = (value) => (e) => {
      const { getSearchData } = this.props;
      getSearchData(e.target.value, value);
      searchKeyword = e.target.value;
  }

  onTabChange = (value) => () => {
      value === 'data' ? history.push('/') : history.push('/address');
      /* eslint-disable */
      location.reload();
  }
  
 render() {
     const { homePageData, addressData } = this.props;
     return (
        <span>
             <h3>SpaceX Launch Programs</h3>
             <Row style={{ width: '100%' }}>
             <Col md={2}><Tabs onChange={this.onTabChange}/></Col>
             {window.location.href.includes('/address') ?
             <React.Fragment>
                 <Col md={10} sm={12}>
                 <Search onChange={this.onSearch('address')} address/>
                  <div className='mainContainer'>
                    {addressData && addressData.map(val => {
                        return (
                        <Col md={3} className='main-data'>
                        <span>
                           <span className='subCategories'>Manufacturer: </span>         
                           <span>{val.manufacturer}</span>
                           </span>
                           <span>
                           <span className='subCategories'>Nationality: </span>         
                           <span>{val.nationality}</span>
                           </span>   
                           <span>
                           <span className='subCategories'>Orbit: </span>         
                           <span>{val.orbit}</span>
                           </span>   
                           <span>
                           <span className='subCategories'>payload_id: </span>         
                           <span>{val.payload_id}</span>
                        </span>
                        <span>
                           <span className='subCategories'>Type: </span>         
                           <span>{val.payload_type}</span>
                        </span>      
                        <span>
                           <span className='subCategories'>Customers: </span>
                           {val.customers.map((val) => {
                               return <li>{val}</li>
                           })}        
                        </span> 
                           </Col>
                        )
                    })}
                  </div>
                 </Col>
                 </React.Fragment>
                 :
            <React.Fragment>
                 <Col md={10} sm={12}>
                 <Search onChange={this.onSearch('data')}/>
                  <div className='mainContainer'>
                    {homePageData.map(val => {
                        return (
                        <Col md={3} className='main-data'>
                        <span>
                           <span className='subCategories'>Title: </span>         
                           <span>{val.title}</span>
                           </span>
                           <span>
                           <span className='subCategories'>Flight number: </span>         
                           <span>{val.flight_number ? val.flight_number : 'NA'}</span>
                           </span>   
                           <span>
                           <span className='subCategories'>Event date: </span>         
                           <span>{moment(val.event_date_utc).format('MMM Do YY')}</span>
                           </span>   
                           <span>
                           <span className='subCategories'>Description: </span>         
                           <span className="description" title={val.details}>{val.details}</span>
                        </span>   
                           </Col>
                        )
                    })}
                  </div>
                  <Pagination data={homePageData}/>
                 </Col>
                 </React.Fragment>}
             </Row>
             
         </span>
     )
 }
}
const mapStateToProps = store => ({
    homePageData: searchKeyword ? selectors.searchData(store) : selectors.getHomePageData(store),
    addressData: searchKeyword ? selectors.searchData(store) : selectors.addressData(store),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getSpaceXData: actionCreators.getSpaceXData,
      getSearchData: actionCreators.getSearchData,
      getSpaceAddress: actionCreators.getSpaceAddress,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Landing);