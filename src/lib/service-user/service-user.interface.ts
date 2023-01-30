import { Company } from 'src/graphql/user/user.model';

import { T } from '@common';

export interface User {
  id: number;
  departmentId: number;
  positionId: number;
  companyId: number;
  roleId: number;
  supervisorId: number;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: T.GenderStatusEnum;
  email: string;
  userType: string;
  phoneNumber: string;
  dob: Date;
  pob: string;
  currentAddress: string;
  image: string;
  joinedDate: Date;
  status: T.StatusEnum;
  createdAt: Date;
  updatedAt: Date;
  department: Department;
  position: Position;
  company: Company;
  supervisor: User;
}

export interface Department {
  id: number;
  name: string;
  avatar: string;
}

export interface Position {
  id: number;
  name: string;
}

export interface CompanyUnderUserByIdOption {
  userId: number;
}

export interface GetCompaniesByIdOption {
  userId?: number;
  id?: number;
  ids?: number[];
  companyId?: number;
}

export interface UsersBycompanyIdOption {
  id: number;
}

export interface GetUserOption {
  offset?: number;
  limit?: number;
  id?: number;
  departmentId?: number;
  userType?: string[];
  ids?: number[];
}

export interface GetUserResult {
  user: User;
}

export interface GetUsersResult {
  user: User[];

  company: Company;
}

/**
 * Get User List For Service
 */
export interface UserListFilter {
  userType?: T.UserTypeEnum[];
  userTypes?: T.UserTypeEnum[];
  fullName?: string;
  phoneNumber?: string;
  search?: string;
  departmentId?: number;
}

/**
 * Get User List
 */
export interface UserListOption {
  offset?: number;
  limit?: number;
  filter: UserFilter | UserListFilter;
}

export interface UserFilter {
  departmentId?: number;
  companyId?: number;
  companyIds?: number[];
  status?: T.StatusEnum;
  ids?: number[];
  search?: string;
  userType?: T.UserTypeEnum;
  userTypes?: T.UserTypeEnum[];
}

export interface UserListResult {
  getUsers: {
    results: User[];
  };
}

export interface UserAllListResult {
  getAllUsers: {
    results: User[];
  };
}

export interface CompanyUnderUserById {
  getCompanyUnderUserById: {
    user: User;
    company: Company[];
  };
}
export interface CompaniesById {
  getCompaniesById: {
    results: Company[];
  };
}

export interface getCompany {
  getCompany: Company;
}

export interface UserListResultByCompanyId {
  getUsersBycompanyId: {
    company: Company;
    user: User[];
  };
}
export interface UserByIdsResult {
  findUserByIds: User[];
}

/**
 * Send Notification
 */
export interface SendNotificationOption {
  userId?: number;
  message?: CreateNotificationInput;
}

export interface SendNotificationsOption {
  userIds: number[];
  message?: CreateNotificationInput;
}

/* Create Notification */
export interface CreateNotificationInput {
  type?: string;
  title?: string;
  body?: string;
  status?: string;
  referenceId?: number;
  serviceType?: T.ServiceType;
  notificationId?: number;
}

/* Create Notification */
export interface CreateUserNotificationInput {
  type?: string;
  title?: string;
  body?: string;
  status?: string;
  userId?: number;
  serviceType?: T.ServiceType;
  referenceType?: T.ReferenceType;
  statusType?: string;
  notificationId?: number;
}

export interface CreateNotificationResult {
  createUserNotification: { id: number; userId: number; notificationId?: number; statusType?: string };
}

/**
 * Send Web Notification
 */
export interface WebNotification {
  type: string;
  title: string;
  body: string;
  icon?: string;
  click_action?: string;
}
export interface WebNotificationOption {
  notification?: WebNotification;
  data?: { [key: string]: string };
}

export interface SendWebNotificationOption {
  payload: string;
}

export interface GetUserByCompanyResult {
  getUsers: {
    results: User[];
  };
}

export interface GetDepartmentByCompanyOption {
  companyId?: number;
}

export interface GetDepartmentByCompanyResult {
  getDepartmentByCompany: Department[];
}

export interface GetUserByCompanyOption {
  filter?: UserFilter;
  limit?: number;
}
