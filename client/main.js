import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { render } from 'react-dom'

import App from '../imports/ui/components/App'

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
})
