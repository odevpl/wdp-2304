export const getRegisteredUsers = ({ registeredUsers }) => registeredUsers;

export const getRegisteredUsersByLogin = ({ registeredUsers }, login) =>
  registeredUsers.find(user => user.login === login);

const reducerName = 'logOnUser';
const createActionName = actionName => `app/${reducerName}/${actionName}`;
const LOGIN_USER = createActionName('LOGIN_USER');

export const logOnUser = payload => ({ payload, type: LOGIN_USER });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...statePart.logOnUser,
        user: action.payload,
      };
    default:
      return statePart;
  }
}
