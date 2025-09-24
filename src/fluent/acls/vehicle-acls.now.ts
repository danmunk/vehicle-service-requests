import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'
import { vehicle_user, vehicle_manager, vehicle_admin } from '../roles/vehicle-roles.now'

// Service Request ACLs
export const service_request_create = Acl({
    $id: Now.ID['service_request_create'],
    type: 'record',
    table: 'x_snc_vehicle_se_1_service_request',
    operation: 'create',
    roles: [vehicle_user],
    active: true
})

export const service_request_read = Acl({
    $id: Now.ID['service_request_read'],
    type: 'record',
    table: 'x_snc_vehicle_se_1_service_request',
    operation: 'read',
    roles: [vehicle_user],
    active: true,
    script: `
        // Users can read their own requests or if they are technician/manager
        if (gs.hasRole('x_snc_vehicle_se_1.vehicle_technician') || 
            gs.hasRole('x_snc_vehicle_se_1.vehicle_manager') || 
            gs.hasRole('x_snc_vehicle_se_1.vehicle_admin')) {
            answer = true;
        } else {
            answer = current.requested_by == gs.getUserID();
        }
    `
})

export const service_request_write = Acl({
    $id: Now.ID['service_request_write'],
    type: 'record',
    table: 'x_snc_vehicle_se_1_service_request',
    operation: 'write',
    roles: [vehicle_user],
    active: true,
    script: `
        // Managers and admins can edit all, technicians can edit assigned, users can edit own draft requests
        if (gs.hasRole('x_snc_vehicle_se_1.vehicle_manager') || 
            gs.hasRole('x_snc_vehicle_se_1.vehicle_admin')) {
            answer = true;
        } else if (gs.hasRole('x_snc_vehicle_se_1.vehicle_technician')) {
            answer = current.assigned_to == gs.getUserID();
        } else {
            answer = current.requested_by == gs.getUserID() && current.state == 'draft';
        }
    `
})

export const service_request_delete = Acl({
    $id: Now.ID['service_request_delete'],
    type: 'record',
    table: 'x_snc_vehicle_se_1_service_request',
    operation: 'delete',
    roles: [vehicle_admin],
    active: true
})

// Vehicle ACLs
export const vehicle_create = Acl({
    $id: Now.ID['vehicle_create'],
    type: 'record',
    table: 'x_snc_vehicle_se_1_vehicle',
    operation: 'create',
    roles: [vehicle_manager],
    active: true
})

export const vehicle_read = Acl({
    $id: Now.ID['vehicle_read'],
    type: 'record',
    table: 'x_snc_vehicle_se_1_vehicle',
    operation: 'read',
    roles: [vehicle_user],
    active: true
})

export const vehicle_write = Acl({
    $id: Now.ID['vehicle_write'],
    type: 'record',
    table: 'x_snc_vehicle_se_1_vehicle',
    operation: 'write',
    roles: [vehicle_manager],
    active: true
})

export const vehicle_delete = Acl({
    $id: Now.ID['vehicle_delete'],
    type: 'record',
    table: 'x_snc_vehicle_se_1_vehicle',
    operation: 'delete',
    roles: [vehicle_admin],
    active: true
})