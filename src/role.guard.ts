// role.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('role', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; // No roles are required, so access is granted
    }

    const { user } = context.switchToHttp().getRequest();
    console.log('User Object:', user);
    const userRole = user?.roles;

    // Check if the user has any of the required roles
    if (requiredRoles.some((roles) => userRole === roles)) {
      return true;
    }

    return false;
  }
}
