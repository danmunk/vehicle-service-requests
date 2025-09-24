import '@servicenow/sdk/global'
import { Table, StringColumn, DateTimeColumn, ReferenceColumn, IntegerColumn, ChoiceColumn, DateColumn } from '@servicenow/sdk/core'

export const x_snc_vehicle_se_1_service_request = Table({
    name: 'x_snc_vehicle_se_1_service_request',
    label: 'Vehicle Service Request',
    schema: {
        number: StringColumn({
            label: 'Number',
            maxLength: 40,
            read_only: true
        }),
        short_description: StringColumn({
            label: 'Short Description',
            maxLength: 160,
            mandatory: true
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 4000
        }),
        vehicle: ReferenceColumn({
            label: 'Vehicle',
            referenceTable: 'x_snc_vehicle_se_1_vehicle',
            mandatory: true
        }),
        service_type: ChoiceColumn({
            label: 'Service Type',
            choices: {
                maintenance: { label: 'Routine Maintenance', sequence: 0 },
                repair: { label: 'Repair', sequence: 1 },
                inspection: { label: 'Inspection', sequence: 2 },
                emergency: { label: 'Emergency Service', sequence: 3 }
            },
            mandatory: true,
            dropdown: 'dropdown_with_none'
        }),
        state: ChoiceColumn({
            label: 'State',
            choices: {
                draft: { label: 'Draft', sequence: 0 },
                submitted: { label: 'Submitted', sequence: 1 },
                assigned: { label: 'Assigned', sequence: 2 },
                in_progress: { label: 'In Progress', sequence: 3 },
                completed: { label: 'Completed', sequence: 4 },
                cancelled: { label: 'Cancelled', sequence: 5 }
            },
            default: 'draft',
            dropdown: 'dropdown_with_none'
        }),
        priority: ChoiceColumn({
            label: 'Priority',
            choices: {
                low: { label: 'Low', sequence: 0 },
                medium: { label: 'Medium', sequence: 1 },
                high: { label: 'High', sequence: 2 },
                critical: { label: 'Critical', sequence: 3 }
            },
            default: 'medium',
            dropdown: 'dropdown_with_none'
        }),
        requested_by: ReferenceColumn({
            label: 'Requested By',
            referenceTable: 'sys_user',
            mandatory: true
        }),
        assigned_to: ReferenceColumn({
            label: 'Assigned To',
            referenceTable: 'sys_user'
        }),
        requested_date: DateTimeColumn({
            label: 'Requested Date'
        }),
        scheduled_date: DateTimeColumn({
            label: 'Scheduled Date'
        }),
        due_date: DateColumn({
            label: 'Due Date'
        }),
        completed_date: DateTimeColumn({
            label: 'Completed Date'
        }),
        estimated_cost: IntegerColumn({
            label: 'Estimated Cost'
        }),
        actual_cost: IntegerColumn({
            label: 'Actual Cost'
        }),
        work_notes: StringColumn({
            label: 'Work Notes',
            maxLength: 4000
        })
    },
    display: 'number',
    auto_number: {
        prefix: 'VSR',
        number: 1000,
        number_of_digits: 7
    }
})