import React from 'react'
import Page from 'core/Page/Page'
import PageTile from 'core/Page/PageTile'
import { Counter } from './Counter'
import withReducer from 'app/store/withReducer'
import reducers from './store'
import config from './config'

const CounterPage = props => {
  return (
    <Page
      classes={{
        root: 'p-24 text-justify'
      }}
      header={<PageTile>Counter</PageTile>}
      content={
        <div>
          <Counter />
        </div>
      }
    />
  )
}

export default withReducer(config.reducerKey, reducers)(CounterPage)
