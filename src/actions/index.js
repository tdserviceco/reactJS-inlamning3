export const namefield = (name) => {
  return {
    type: 'NAMEFIELD',
    name : name
  }
}

export const emailfield = (email) => {
  return {
    type: 'EMAILFIELD',
    email: email
  }
}

export const passwordfield = (password) => {
  return {
    type: 'PASSWORDFIELD',
    pwrd: password
  }
}

export const changesettings = (boolean) => {
  return {
    type: 'CHANGESETTING',
    change: boolean
  }
}

export const disableinputs = (boolean) => {
  return {
    type: 'DISABLEINPUTS',
    disable: boolean
  }
}