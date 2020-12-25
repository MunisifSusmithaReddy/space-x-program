import React from 'react';

class Search extends React.Component {
  constructor(props){
      super(props);
      this.state = {
      }
  }

 render() {
     const { onChange, address } = this.props;
     return (
        <div>
            <input type="text" placeholder={address ? 'Search by country' : 'Search by title'} className="search" onChange={onChange} />
        </div>
    )
 }
}

export default Search;