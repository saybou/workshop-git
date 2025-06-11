#!/usr/bin/env node

const greet = (name = 'stranger') => {
  return `Hello, ${name}!`;
}

module.exports = { greet };