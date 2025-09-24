import { gs, GlideDateTime, GlideRecord } from '@servicenow/glide'

export function setRequestedDate(current, previous) {
    // Set requested date when a new service request is created
    if (!current.requested_date.nil()) {
        return;
    }
    
    const now = new GlideDateTime();
    current.requested_date = now.getDisplayValue();
}

export function validateStateTransition(current, previous) {
    const currentState = current.getValue('state');
    const previousState = previous.getValue('state');
    
    // Define valid state transitions
    const validTransitions = {
        'draft': ['submitted', 'cancelled'],
        'submitted': ['assigned', 'cancelled'],
        'assigned': ['in_progress', 'cancelled'],
        'in_progress': ['completed', 'assigned'],
        'completed': [],
        'cancelled': ['draft']
    };
    
    if (previousState && validTransitions[previousState]) {
        if (!validTransitions[previousState].includes(currentState)) {
            gs.addErrorMessage('Invalid state transition from ' + previousState + ' to ' + currentState);
            current.setAbortAction(true);
        }
    }
}

export function setCompletedDate(current, previous) {
    const currentState = current.getValue('state');
    const previousState = previous.getValue('state');
    
    // Set completed date when state changes to completed
    if (currentState === 'completed' && previousState !== 'completed') {
        const now = new GlideDateTime();
        current.completed_date = now.getDisplayValue();
        
        gs.addInfoMessage('Service request ' + current.number + ' has been completed.');
    }
    
    // Clear completed date if moving away from completed state
    if (currentState !== 'completed' && previousState === 'completed') {
        current.completed_date = '';
    }
}

export function notifyAssignment(current, previous) {
    const currentAssignee = current.getValue('assigned_to');
    const previousAssignee = previous.getValue('assigned_to');
    
    // Send notification when service request is assigned or reassigned
    if (currentAssignee && currentAssignee !== previousAssignee) {
        gs.addInfoMessage('Service request ' + current.number + ' has been assigned to ' + current.assigned_to.getDisplayValue());
    }
}

export function updateVehicleServiceDate(current, previous) {
    const currentState = current.getValue('state');
    const previousState = previous.getValue('state');
    
    // Update vehicle's last service date when request is completed
    if (currentState === 'completed' && previousState !== 'completed') {
        const vehicleId = current.getValue('vehicle');
        if (vehicleId) {
            const vehicleGr = new GlideRecord('x_snc_vehicle_se_1_vehicle');
            if (vehicleGr.get(vehicleId)) {
                const now = new GlideDateTime();
                vehicleGr.last_service_date = now.getDisplayValue();
                vehicleGr.update();
            }
        }
    }
}