import React from 'react';
import './List.css';
import Card from './Card.js'

class List extends React.Component {
  static defaultProps = {
    header: 'Header',
    cards: []
  };
render () {
    return (
   <section className="List">
       <header className="List-header">
           <h2>{this.props.header}</h2>
       </header>
       <div className='List-cards'>
        {this.props.cards.map((card) =>
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
          />
        )}
        <button
          className='List-add-button'>
          + Add Random Card
        </button>
      </div>
   </section>
  )}
}

export default List;