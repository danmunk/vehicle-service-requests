import '@servicenow/sdk/global'
import { Table, StringColumn, DateColumn, IntegerColumn, ChoiceColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_snc_vehicle_se_1_vehicle = Table({
    name: 'x_snc_vehicle_se_1_vehicle',
    label: 'Vehicle',
    schema: {
        name: StringColumn({
            label: 'Vehicle Name',
            maxLength: 100,
            mandatory: true,
        }),
        vehicle_tag_one: StringColumn({
            label: 'Vehicle Tag',
            maxLength: 150,
            mandatory: true,
        }),
        make: StringColumn({
            label: 'Make',
            maxLength: 50,
            mandatory: true,
        }),
        make_details: StringColumn({
            label: 'Make Details',
            maxLength: 50,
            mandatory: true,
        }),
        model: StringColumn({
            label: 'Model',
            maxLength: 50,
            mandatory: true,
        }),
        model_details: StringColumn({
            label: 'Model Details',
            maxLength: 50,
            mandatory: true,
        }),
        year: IntegerColumn({
            label: 'Year',
            mandatory: true,
        }),
        vin: StringColumn({
            label: 'VIN',
            maxLength: 17,
        }),
        license_plate: StringColumn({
            label: 'License Plate',
            maxLength: 20,
        }),
        vehicle_type: ChoiceColumn({
            label: 'Vehicle Type',
            choices: {
                car: { label: 'Car', sequence: 0 },
                truck: { label: 'Truck', sequence: 1 },
                van: { label: 'Van', sequence: 2 },
                motorcycle: { label: 'Motorcycle', sequence: 3 },
                bus: { label: 'Bus', sequence: 4 },
                trailer: { label: 'Trailer', sequence: 5 },
            },
            mandatory: true,
            dropdown: 'dropdown_with_none',
        }),
        fuel_type: ChoiceColumn({
            label: 'Fuel Type',
            choices: {
                gasoline: { label: 'Gasoline', sequence: 0 },
                diesel: { label: 'Diesel', sequence: 1 },
                electric: { label: 'Electric', sequence: 2 },
                hybrid: { label: 'Hybrid', sequence: 3 },
                lpg: { label: 'LPG', sequence: 4 },
            },
            dropdown: 'dropdown_with_none',
        }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                active: { label: 'Active', sequence: 0 },
                maintenance: { label: 'In Maintenance', sequence: 1 },
                retired: { label: 'Retired', sequence: 2 },
                out_of_service: { label: 'Out of Service', sequence: 3 },
            },
            default: 'active',
            dropdown: 'dropdown_with_none',
        }),
        purchase_date: DateColumn({
            label: 'Purchase Date',
        }),
        last_service_date: DateColumn({
            label: 'Last Service Date',
        }),
        next_service_due: DateColumn({
            label: 'Next Service Due',
        }),
        mileage: IntegerColumn({
            label: 'Current Mileage',
        }),
        department: ReferenceColumn({
            label: 'Department',
            referenceTable: 'cmn_department',
            attributes: {
                encode_utf8: false,
            },
        }),
        assigned_to: ReferenceColumn({
            label: 'Assigned To',
            referenceTable: 'sys_user',
            attributes: {
                encode_utf8: false,
            },
        }),
        last_inspected_by: ReferenceColumn({
            label: 'Last Inspected By',
            referenceTable: 'sys_user',
            attributes: {
                encode_utf8: false,
            },
        }),
    },
    display: 'name',
    actions: ['read', 'update', 'create'],
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    index: [
        {
            name: 'index',
            unique: false,
            element: 'assigned_to',
        },
        {
            name: 'index2',
            unique: false,
            element: 'department',
        },
        {
            name: 'index3',
            unique: false,
            element: 'last_inspected_by',
        },
    ],
})
