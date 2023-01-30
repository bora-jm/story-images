import { BadRequestException } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';

import { ErrorResponse, GqlCustomHeader } from '@common';

import * as C from './service-user.constant';
import * as I from './service-user.interface';

export class GqlServiceUser {
  constructor(private readonly client: GraphQLClient) {}

  async getUserById(opt: I.GetUserOption) {
    try {
      const { user } = await this.client.request<I.GetUserResult, I.GetUserOption>(C.GET_USER_GQL, opt);
      return user;
    } catch (error: any) {
      throw new BadRequestException(this.responseError(error));
    }
  }

  async getCompany(opt: I.GetCompaniesByIdOption, { authorization }: GqlCustomHeader) {
    try {
      this.client.setHeader('authorization', authorization);
      const { getCompany } = await this.client.request<I.getCompany, I.GetCompaniesByIdOption>(
        C.GET_COMPANY_BY_ID_GQL,
        opt
      );
      return getCompany;
    } catch (error: any) {
      throw new BadRequestException(this.responseError(error));
    }
  }

  async getUsersBycompanyId(opt: I.UsersBycompanyIdOption, { authorization }: GqlCustomHeader) {
    try {
      this.client.setHeader('authorization', authorization);
      const { getUsersBycompanyId } = await this.client.request<I.UserListResultByCompanyId, I.UsersBycompanyIdOption>(
        C.GET_USERS_BY_COMPANYID_GQL,
        opt
      );
      return getUsersBycompanyId;
    } catch (error: any) {
      throw new BadRequestException(this.responseError(error));
    }
  }

  async getAllUsers(opt: I.UserListOption) {
    try {
      const { getAllUsers } = await this.client.request<I.UserAllListResult, I.UserListOption>(
        C.GET_ADMIN_LIST_GQL,
        opt
      );
      return getAllUsers;
    } catch (error: any) {
      throw new BadRequestException(this.responseError(error));
    }
  }

  async getCompanyUnderUserById(opt: I.CompanyUnderUserByIdOption, { authorization }: GqlCustomHeader) {
    try {
      this.client.setHeader('authorization', authorization);
      const { getCompanyUnderUserById } = await this.client.request<
        I.CompanyUnderUserById,
        I.CompanyUnderUserByIdOption
      >(C.GET_COMPANY_UNDER_USER_BY_ID_GQL, opt);
      return getCompanyUnderUserById;
    } catch (error: any) {
      throw new BadRequestException(this.responseError(error));
    }
  }

  async getCompaniesById(opt: I.GetCompaniesByIdOption, { authorization }: GqlCustomHeader) {
    try {
      this.client.setHeader('authorization', authorization);
      const { getCompaniesById } = await this.client.request<I.CompaniesById, I.GetCompaniesByIdOption>(
        C.GET_COMPANIES_BY_ID_GQL,
        opt
      );
      return getCompaniesById;
    } catch (error: any) {
      throw new BadRequestException(this.responseError(error));
    }
  }
  async getUserByIds(opt: I.GetUserOption) {
    try {
      const { findUserByIds } = await this.client.request<I.UserByIdsResult, I.GetUserOption>(C.GET_USERS_GQL, opt);
      return findUserByIds;
    } catch (error: any) {
      throw new BadRequestException(this.responseError(error));
    }
  }

  async sendNotification(opt: I.SendNotificationOption) {
    try {
      const data = await this.client.request<boolean, I.SendNotificationOption>(C.SEND_NOTIFICATION_GQL, opt);
      return data;
    } catch (error: any) {
      throw new BadRequestException(this.responseError(error));
    }
  }

  async sendMultipleNotification(opt: I.SendNotificationsOption) {
    try {
      const data = await this.client.request<boolean, I.SendNotificationsOption>(C.SEND_MULTIPLE_NOTIFICATION_GQL, opt);
      return data;
    } catch (error: any) {
      throw new BadRequestException(this.responseError(error));
    }
  }

  async sendWebNotification(opt: I.SendWebNotificationOption) {
    try {
      const data = await this.client.request<boolean, I.SendWebNotificationOption>(C.SEND_WEB_NOTIFICATION_GQL, opt);
      return data;
    } catch (error: any) {
      throw new BadRequestException(this.responseError(error));
    }
  }

  async createUserNotification(input: I.CreateUserNotificationInput) {
    try {
      const data = await this.client.request<I.CreateNotificationResult, I.CreateUserNotificationInput>(
        C.CREATE_NOTIFICATION,
        input
      );

      return data;
    } catch (error: any) {
      throw new BadRequestException(this.responseError(error));
    }
  }

  /**
   * Private Function
   */
  private responseError(error: any) {
    const str = JSON.stringify(error);
    const res: ErrorResponse = JSON.parse(str);

    return res?.response?.errors[0]?.message || 'Something went wrong on service user';
  }

  async getUserByCompany(opt: I.GetUserByCompanyOption, { authorization }: GqlCustomHeader) {
    try {
      this.client.setHeader('authorization', authorization);
      const { getUsers } = await this.client.request<I.GetUserByCompanyResult, I.GetUserByCompanyOption>(
        C.GET_USERS_BY_COMPANY_GQL,
        opt
      );
      return getUsers;
    } catch (error: any) {
      throw new BadRequestException(this.responseError(error));
    }
  }

  async getDepartmentByCompany(opt: I.GetDepartmentByCompanyOption) {
    try {
      console.log('------------', opt);
      const { getDepartmentByCompany } = await this.client.request<
        I.GetDepartmentByCompanyResult,
        I.GetDepartmentByCompanyOption
      >(C.GET_DEPARTMENT_BY_COMPANY, opt);
      return getDepartmentByCompany;
    } catch (error: any) {
      throw new BadRequestException(this.responseError(error));
    }
  }
}
