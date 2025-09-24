import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

// Basic user role - can create and view own requests
export const vehicle_user = Role({
    name: 'x_snc_vehicle_se_1.vehicle_user',
    description: 'Can create and view vehicle service requests'
})

// Service technician role - can be assigned to and work on requests
export const vehicle_technician = Role({
    name: 'x_snc_vehicle_se_1.vehicle_technician',
    description: 'Vehicle service technician - can work on assigned service requests',
    contains_roles: [vehicle_user]
})

// Service manager role - can manage all service requests and vehicles
export const vehicle_manager = Role({
    name: 'x_snc_vehicle_se_1.vehicle_manager',
    description: 'Vehicle service manager - can manage all service requests and vehicles',
    contains_roles: [vehicle_technician]
})

// Vehicle administrator role - full administrative access
export const vehicle_admin = Role({
    name: 'x_snc_vehicle_se_1.vehicle_admin',
    description: 'Vehicle service administrator - full access to all application features',
    contains_roles: [vehicle_manager],
    scoped_admin: true
})