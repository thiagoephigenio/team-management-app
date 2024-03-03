const bodyJsonTeamSchema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: { type: 'string' },
  }
}

const bodyJsonCoworkerSchema = {
  type: 'object',
  required: ['name', 'email', 'phone'],
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
    phone: { type: 'string' },
  }
}


export {
  bodyJsonTeamSchema,
  bodyJsonCoworkerSchema,
}