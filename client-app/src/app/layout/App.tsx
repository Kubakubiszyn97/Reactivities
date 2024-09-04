import { act, useEffect, useState } from 'react'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';

function App() {
  const [acitivites, setActivites] = useState<Activity[]>([]);
  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivites(response.data)
      })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
      <List>
        {acitivites.map(activity => (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
    </div>
  )
}

export default App
