import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import ActivitiesCard from './ActivitiesCard';

class ActivitiesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [],
    };

    this.BASE_URL = 'https://tripr-backend.herokuapp.com/api/v1/destinations';
  }

  componentDidMount() {
    this.getActivities(this.props.url);
  }

  getActivities(id) {
    fetch(id)
      .then(resp => resp.json())
      .then(json =>
        this.setState(prevState => ({
          ...prevState,
          activities: json,
        }))
      );
  }

  renderActivitiesCards() {
    return this.state.activities.map(activity => {
      const key = `activities-${activity.id}`;
      return <ActivitiesCard key={key} {...activity} />;
    });
  }

  render() {
    return (
      <div id="activities-container">
        <Item.Group>{this.renderActivitiesCards()}</Item.Group>
      </div>
    );
  }
}

export default ActivitiesContainer;
