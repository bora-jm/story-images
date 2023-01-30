import { registerEnumType } from '@nestjs/graphql';

export enum ReferenceType {
  Admin = 'Admin',
  System = 'System'
}

export enum ServiceType {
  Booking = 'Booking',
  Leave = 'Leave',
  Ticket = 'Ticket',
  Claim = 'Claim',
  All = 'All'
}

export enum StatusEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED'
}

export enum LeaveStatusEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  REJECTED = 'REJECTED',
  PENDING_BY_BACKUP = 'PENDING_BY_BACKUP'
}

export enum UserTypeEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
  SUPER_ADMIN = 'SUPER_ADMIN'
}

export enum GenderStatusEnum {
  FEMALE = 'FEMALE',
  MALE = 'MALE '
}

export enum LeaveDateEnum {
  FULL_DAY = 'FULL_DAY',
  HALF_DAY = 'HALF_DAY',
  MORNING = 'MORNING',
  AFTERNOON = 'AFTERNOON'
}

export enum LeaveUpdateStatusEnum {
  APPROVED_BY_LEADER = 'APPROVED_BY_LEADER',
  APPROVED_BY_ADMIN = 'APPROVED_BY_ADMIN',
  REJECTED_BY_ADMIN = 'REJECTED_BY_ADMIN',
  APPROVED_BY_BACKUP = 'APPROVED_BY_BACKUP',
  REJECTED_BY_BACKUP = 'REJECTED_BY_BACKUP',
  REJECTED_BY_LEADER = 'REJECTED_BY_LEADER',
  PENDING_BY_BACKUP = 'PENDING_BY_BACKUP',
  APPROVED_BY_HR = 'APPROVED_BY_HR'
}

registerEnumType(LeaveStatusEnum, { name: 'LeaveStatusEnum' });
registerEnumType(StatusEnum, { name: 'StatusEnum' });
registerEnumType(GenderStatusEnum, { name: 'GenderStatusEnum' });
registerEnumType(UserTypeEnum, { name: 'UserTypeEnum' });
registerEnumType(LeaveDateEnum, { name: 'LeaveDateEnum' });
registerEnumType(LeaveUpdateStatusEnum, { name: 'LeaveUpdateStatusEnum' });
registerEnumType(ServiceType, { name: 'ServiceType' });
registerEnumType(ReferenceType, { name: 'ReferenceType' });
