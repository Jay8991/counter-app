import React, { Component } from 'react';


class Counter extends Component {
    state = { 
        count: 0,
        // imageUrl: 'https://picsum.photos/200'
    };


    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>
    }

    handleIncrement = (product) => {
        console.log(product)
        this.setState({ count: this.state.count + 1 })

    }

    render() { 

        return (
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt="" /> */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement(1)} className='btn btn-secondary btn-sm'>Increment</button>
                {/* <ul>
                    { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
                </ul> */}
                {/* {this.state.tags.length === 0 && 'Please create new tag'}
                {this.renderTags()} */}
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;