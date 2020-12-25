import React from 'react';

class Pagination extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        currentPage: 1,
        pageCount: null
      }
    }
    
    componentDidMount() {
      const startingPage = 1;
      const data = this.props.data;
      const pageSize = 25;
      let pageCount = parseInt(data.length / pageSize);
      if (data.length % pageSize > 0) {
        pageCount++;
      }
      this.setState({
        currentPage: startingPage,
        pageCount: pageCount
      });
    }

    getNumbers = () => {
        const { pageCount } = this.state;
        debugger;
    }
  
    render() {
      return (
        <div>{this.getNumbers()}</div>
      );
    }
  }

  export default Pagination;