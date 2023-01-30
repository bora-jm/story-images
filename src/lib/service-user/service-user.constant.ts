import { gql } from 'graphql-request';

export const SERVICE_USER_TOKEN = 'SERVICE_USER_INJECT_TOKEN';

export const GET_USER_GQL = gql`
  query GetUser($id: Int!) {
    user: getUser(id: $id) {
      id
      status
      departmentId
      companyId
      positionId
      roleId
      supervisorId
      firstName
      lastName
      email
      userType
      phoneNumber
      dob
      placeOfBirth
      currentAddress
      image
      joinedDate
      createdAt
      updatedAt
      department {
        id
        avatar
        name
      }
      position {
        id
        name
      }
      supervisor {
        id
        companyId
      }
    }
  }
`;

export const GET_USERS_BY_COMPANYID_GQL = gql`
  query GetUsersBycompanyId($id: Int!) {
    getUsersBycompanyId(id: $id) {
      user {
        id
        companyId
        departmentId
        firstName
        lastName
        supervisorId
        email
      }
      company {
        id
        parentId
        name
        child {
          id
        }
      }
    }
  }
`;
export const GET_ADMIN_LIST_GQL = gql`
  query GetAdminList($limit: Int!, $filter: UserFilter) {
    getAllUsers(limit: $limit, filter: $filter) {
      results {
        id
        status
        departmentId
        positionId
        roleId
        firstName
        lastName
        email
        userType
        phoneNumber
        dob
        placeOfBirth
        currentAddress
        image
        joinedDate
        createdAt
        updatedAt
        department {
          id
          avatar
          name
        }
        position {
          id
          name
        }
        company {
          id
          parentId
          name
          description
          status
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export const GET_USERS_BY_COMPANY_GQL = gql`
  query GetUsers($filter: UserFilter, $limit: Int) {
    getUsers(filter: $filter, limit: $limit) {
      results {
        id
        status
        departmentId
        companyId
        positionId
        roleId
        firstName
        lastName
        email
        userType
        phoneNumber
        dob
        placeOfBirth
        currentAddress
        image
        joinedDate
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_DEPARTMENT_BY_COMPANY = gql`
  query GetDepartmentByCompany($companyId: Int!) {
    getDepartmentByCompany(companyId: $companyId) {
      id
      companyId
      avatar
      name
      description
      address
      latitude
      longitude
      status
      createdAt
      updatedAt
      company {
        id
        parentId
        name
        description
        status
        createdAt
        updatedAt
        child {
          id
          parentId
          parentId
        }
      }
    }
  }
`;

export const USER_LIST_FILTER_GQL = gql`
  query GetUser($limit: Int!, $filter: UserFilter) {
    users(limit: $limit, filter: $filter) {
      results {
        id
        status
        departmentId
        positionId
        roleId
        firstName
        lastName
        email
        userType
        phoneNumber
        dob
        placeOfBirth
        currentAddress
        image
        joinedDate
        createdAt
        updatedAt
        department {
          id
          avatar
          name
        }
        position {
          id
          name
        }
      }
    }
  }
`;

export const USER_LIST_FOR_SERVICE_GQL = gql`
  query GetUserListForService($limit: Int!, $filter: UserListFilter) {
    users: getUserListForService(limit: $limit, filter: $filter) {
      results {
        id
        fullName
        phoneNumber
        avatar
        userType
        prefixName
      }
    }
  }
`;

export const SEND_NOTIFICATION_GQL = gql`
  mutation SendNotification($userId: Float!, $message: CreateNotificationInput!) {
    sendNotification(input: { userId: $userId, message: $message })
  }
`;

export const SEND_MULTIPLE_NOTIFICATION_GQL = gql`
  mutation SendMultipleNotification($userIds: [Int!]!, $message: CreateNotificationInput!) {
    sendMultipleNotification(input: { userIds: $userIds, message: $message })
  }
`;

export const SEND_WEB_NOTIFICATION_GQL = gql`
  mutation SendWebNotification($payload: String!) {
    sendWebNotification(payload: $payload)
  }
`;

export const GET_USERS_GQL = gql`
  query userList($ids: [Int!]!) {
    findUserByIds(ids: $ids) {
      id
      status
      departmentId
      companyId
      positionId
      roleId
      firstName
      lastName
      email
      userType
      phoneNumber
      dob
      placeOfBirth
      currentAddress
      image
      joinedDate
      createdAt
      updatedAt
      department {
        id
        avatar
        name
      }
      position {
        id
        name
      }
      company {
        id
        parentId
        name
        description
        status
      }
    }
  }
`;

export const GET_COMPANIES_BY_ID_GQL = gql`
  query GetCompaniesById($userId: Int!) {
    getCompaniesById(userId: $userId) {
      results {
        id
        parentId
        name
        status
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_COMPANY_BY_ID_GQL = gql`
  query GetCompanyById($companyId: Int!) {
    getCompany(companyId: $companyId) {
      id
      parentId
      name
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_COMPANY_UNDER_USER_BY_ID_GQL = gql`
  query GetCompanyUnderUserById($userId: Int!) {
    companyUnderUserById: getCompanyUnderUserById(userId: $userId) {
      user {
        id
        companyId
        departmentId
        positionId
        supervisorId
        firstName
        lastName
        image
        email
        gender
        userType
        phoneNumber
        status
        dob
        placeOfBirth
        joinedDate
        currentAddress
        createdAt
        updatedAt
        department {
          id
          companyId
          name
          status
          company {
            id
            parentId
            name
            status
            child {
              id
              parentId
              name
              status
              child {
                id
                parentId
                name
                users {
                  user {
                    id
                    companyId
                    departmentId
                    firstName
                    lastName
                  }
                }
              }
            }
          }
        }
        supervisor {
          id
          companyId
          supervisorId
          firstName
          lastName
          email
          departmentId
        }
        company {
          id
          parentId
          name
          child {
            id
            parentId
            name
          }
        }
      }
      company {
        id
        parentId
        name
        description
        status
        createdAt
        updatedAt
        child {
          id
          parentId
          name
        }
        users {
          user {
            id
            companyId
            company {
              id
              name
            }
          }
        }
        parent {
          id
          parentId
          name
        }
      }
    }
  }
`;

export const CREATE_NOTIFICATION = gql`
  mutation CreateUserNotification(
    $userId: Int!
    $notificationId: Int!
    $title: String!
    $body: String!
    $statusType: String
  ) {
    createUserNotification(
      input: { userId: $userId, notificationId: $notificationId, title: $title, body: $body, statusType: $statusType }
    ) {
      id
      notificationId
      title
      body
      statusType
    }
  }
`;
