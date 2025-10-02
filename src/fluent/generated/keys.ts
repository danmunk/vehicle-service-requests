import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '6089527f2b883210c77ef2324291bf70': {
                        table: 'sys_scope_privilege'
                        id: '6089527f2b883210c77ef2324291bf70'
                    }
                    '66afdbd22b50f610fb33ff03b191bf05': {
                        table: 'sys_app_application'
                        id: '66afdbd22b50f610fb33ff03b191bf05'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'faf973d798a34eeea19f99df2c171d54'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '60a233ca440c40fb997f141c5728362c'
                    }
                    service_request_create: {
                        table: 'sys_security_acl'
                        id: '0c514bc3a4ad4db2940c77da741621df'
                    }
                    service_request_delete: {
                        table: 'sys_security_acl'
                        id: '67cb6d1366dd479d996a6c42ecd58a32'
                    }
                    service_request_read: {
                        table: 'sys_security_acl'
                        id: '40875725dfc04347b3ab6bc18ee90ed5'
                    }
                    service_request_write: {
                        table: 'sys_security_acl'
                        id: '7d816246e91d493fb1bdcf69eec401a0'
                    }
                    'src_server_service-request-utils_js': {
                        table: 'sys_module'
                        id: 'fee8b5be732e4da78046261aab39eaa4'
                    }
                    vehicle_create: {
                        table: 'sys_security_acl'
                        id: 'fa643a592bd04ee0a14c4490fa85f7df'
                    }
                    vehicle_delete: {
                        table: 'sys_security_acl'
                        id: '6a5606f5e73d4d3ab1343cf9b8909f90'
                    }
                    vehicle_read: {
                        table: 'sys_security_acl'
                        id: '89dc9cbf58e64db7b7b033bafa0610e7'
                    }
                    vehicle_write: {
                        table: 'sys_security_acl'
                        id: '48de1d85c9b84f1185db5ed577ef2b0b'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '012651e066d54f5cb28551cd61532100'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'work_notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0419e442bb3e42a3bfb0c0134bb23d70'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'requested_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0710f44cf5944762b707aca254999953'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0761655c6a0040aeb10723e08215b904'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'fuel_type'
                            value: 'hybrid'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '077bb44c442a455f9a0ffe2926773f71'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'priority'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b1ab4937e334ea5927cd063c82c2efb'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'model'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0bb5fc7e24d34fc7bba9607546ee6aac'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'vehicle'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c2d3524b39848bd9923169d09cfe527'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1473f388b8aa4aa2959849d1f6acb6ce'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '15f122349e5149b18c2474418870c07e'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1a920146e14f474b8ac4af32dea9c73d'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'state'
                            value: 'submitted'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1e6b65b3606b420ea321934494074c51'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'purchase_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1e977ce3df06417ab756daedad3fefb6'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1f887ca546924880892be5e6e0c9689a'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'state'
                            value: 'assigned'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1fe9516bfe2949ac9e7ed17773bbe2c7'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'scheduled_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '238a840914f5429394b24b73f5020441'
                        key: {
                            sys_security_acl: '6a5606f5e73d4d3ab1343cf9b8909f90'
                            sys_user_role: {
                                id: 'b45fd1db159949cab0ba12f877ef62ff'
                                key: {
                                    name: 'x_snc_vehicle_se_1.vehicle_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '27a36c7521274cb0bb3d3c1f29ef0d30'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'actual_cost'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '27ba5321acc54f449649bf00f99dcf6a'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'state'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '280d3fa952d54cf792de866314569d9a'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'vehicle_tag'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2a7234a1bb984ac68de3d470bdde1342'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f0f0cc906bd48b9954df52b2d094e10'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '30e5e7f6261e42e9b7f57de1b0b8c20a'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '352e12132fc0490194728239e1743811'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'fuel_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3939616bdba84d1e88dc20f0293cf982'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'vehicle_type'
                            value: 'motorcycle'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b531f3aff91429786d65a7d70a02d62'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'last_inspected_by'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '3c1964cdc1574ec495bfc0db0afb8e7f'
                        key: {
                            role: {
                                id: 'b45fd1db159949cab0ba12f877ef62ff'
                                key: {
                                    name: 'x_snc_vehicle_se_1.vehicle_admin'
                                }
                            }
                            contains: {
                                id: 'dfff1cfedf4141f2b7672c50788db832'
                                key: {
                                    name: 'x_snc_vehicle_se_1.vehicle_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4045728cd4fe4c2e9ecbec6321e2808b'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'model'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44b71d617b594155892c95377d7c684d'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'year'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '45de595db3464e0fb08819891cc6eab8'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'make'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b0a4b865ef34eeea32ecda20ffb7511'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'priority'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4de91524435c479fb3b99226b72a8a99'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'vehicle'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '50454e02497d44dab2b8c820eed40c26'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'next_service_due'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5130a9651fb54432aafc39add4492148'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'fuel_type'
                            value: 'electric'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '51ee0125432c475da9fcd61a899d0ee0'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '522ab32015f8445dab41a1b8bd8153e1'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'priority'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54b73eab1241414e9f593f024a6f9061'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'fuel_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '569c72ee931a4eb18ff51ef38d412762'
                        key: {
                            sys_security_acl: '48de1d85c9b84f1185db5ed577ef2b0b'
                            sys_user_role: {
                                id: 'dfff1cfedf4141f2b7672c50788db832'
                                key: {
                                    name: 'x_snc_vehicle_se_1.vehicle_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e647ffae0664fbf89ab06185a490134'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'purchase_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5f6ad19f02984f69ba6a063bdda6784d'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'completed_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '602ea21a60f1417bb400ab3e3cba60fe'
                        key: {
                            name: 'x_snc_vehicle_se_1.vehicle_technician'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '62c07f41d3bb4e88ad00eec934f12694'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '635f7705680149ae80338c9396585d13'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '66b234f7c49342f1ba9a051060334987'
                        key: {
                            category: 'x_snc_vehicle_se_1_service_request'
                            prefix: 'VSR'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '673bccbdb9d6449784e9fc524f4c3727'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'state'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68ae3cec0c254c138086dd2174bd0865'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'work_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '693d3681753245ce88baf37421939c31'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'vin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '69857cc6b2a4430ea26f3646deddfc7d'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'license_plate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6b374622fe4c4f38a962775ac904ca86'
                        key: {
                            sys_security_acl: '67cb6d1366dd479d996a6c42ecd58a32'
                            sys_user_role: {
                                id: 'b45fd1db159949cab0ba12f877ef62ff'
                                key: {
                                    name: 'x_snc_vehicle_se_1.vehicle_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6beca62f69d74afbaa6cf0e10c3f8b4c'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'priority'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7439367ee29a4bdbab2f5aa5382a9e13'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'vehicle_type'
                            value: 'bus'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '76d4a4579a5a487bb8978f6f50b3460b'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '76ec477a9eb34223bf14228637328b55'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'vehicle_tag'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7a0e9d7b8e824a68a72550866c15f47c'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7d639a2ca2284dd6b13d33708c8b410f'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'state'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7dad3e893ebf4e6c9d646a8ef7a1ec69'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'status'
                            value: 'retired'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7eff43f65fa74afb914f341df6d6bd93'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'vehicle_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '803dbc1ba6424e9593ff048ec6712a64'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'actual_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '80ae6ff4e75547b0abb6c61a3a858c1c'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'fuel_type'
                            value: 'gasoline'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '832a2c54887f4b2c87d83043999bc338'
                        key: {
                            role: {
                                id: 'dfff1cfedf4141f2b7672c50788db832'
                                key: {
                                    name: 'x_snc_vehicle_se_1.vehicle_manager'
                                }
                            }
                            contains: {
                                id: '602ea21a60f1417bb400ab3e3cba60fe'
                                key: {
                                    name: 'x_snc_vehicle_se_1.vehicle_technician'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83e63a574966485caa3a68538feb1bef'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83e93704f2444945a42c4505c934afa5'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'estimated_cost'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '871a2413af7c4db6b45213362f85221f'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'mileage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '88f1f13807b244b58f2c0acf4bc8836b'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'fuel_type'
                            value: 'diesel'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '8f5e7d37893d40eeb29272268c14833d'
                        key: {
                            role: {
                                id: '602ea21a60f1417bb400ab3e3cba60fe'
                                key: {
                                    name: 'x_snc_vehicle_se_1.vehicle_technician'
                                }
                            }
                            contains: {
                                id: 'bcb111ee28d5443d9129bcbcd4143602'
                                key: {
                                    name: 'x_snc_vehicle_se_1.vehicle_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f605c0ebfcc49c587604d856fae8631'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '903b46a7b69f487ab69c0d9b5953107b'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'mileage'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '918f4f0b37f94fb7b2427a8f5f409e5c'
                        key: {
                            sys_security_acl: '40875725dfc04347b3ab6bc18ee90ed5'
                            sys_user_role: {
                                id: 'bcb111ee28d5443d9129bcbcd4143602'
                                key: {
                                    name: 'x_snc_vehicle_se_1.vehicle_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '923ba44f7f2b41a8b6b031108b4c2c2c'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'estimated_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '929eef226f13471b969a544e71f07487'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'vehicle_type'
                            value: 'truck'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '93401168fe554ec4a1afbf946df25e3c'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'service_type'
                            value: 'maintenance'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '95d6198fb7ec42d0b7741a9f2a0bd136'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'vehicle_type'
                            value: 'van'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '97fa57a3cc724a91be14eb931cd4a065'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'status'
                            value: 'out_of_service'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9cd57ac646854b02a3b5253fda595bd0'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'license_plate'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a00e7f5a9ed64932bc38c24d64148c90'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a014acd89a634b398276944d3612fd0a'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'status'
                            value: 'maintenance'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a382013b284540ad9580fac8249d5104'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'service_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a85fb6d278f54cfcab0da09b4a55b900'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aa888f7deee549d58fb4003ec41b4d0c'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'state'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'abccb23e590b4930a304f52a575cd389'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'vehicle_type'
                            value: 'car'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b0ef303221be42de8c48216848636d3a'
                        key: {
                            sys_security_acl: 'fa643a592bd04ee0a14c4490fa85f7df'
                            sys_user_role: {
                                id: 'dfff1cfedf4141f2b7672c50788db832'
                                key: {
                                    name: 'x_snc_vehicle_se_1.vehicle_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2da27d15ac846a0ba15fdaa7178571c'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4430ebaf4ae418bb857ceb29488c078'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'vin'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'b45fd1db159949cab0ba12f877ef62ff'
                        key: {
                            name: 'x_snc_vehicle_se_1.vehicle_admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b98b269848da4cc694b7ce9aca8f8c0c'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b9c0e5c0a767450baceb966de177ec50'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b9ef6eb0807849aba5ffb46094b4bdab'
                        key: {
                            sys_security_acl: '7d816246e91d493fb1bdcf69eec401a0'
                            sys_user_role: {
                                id: 'bcb111ee28d5443d9129bcbcd4143602'
                                key: {
                                    name: 'x_snc_vehicle_se_1.vehicle_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'bcb111ee28d5443d9129bcbcd4143602'
                        key: {
                            name: 'x_snc_vehicle_se_1.vehicle_user'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bdb1afea22d34f8b961a0f147782cc66'
                        key: {
                            sys_security_acl: '89dc9cbf58e64db7b7b033bafa0610e7'
                            sys_user_role: {
                                id: 'bcb111ee28d5443d9129bcbcd4143602'
                                key: {
                                    name: 'x_snc_vehicle_se_1.vehicle_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bee731851ea446259b9b2cea5134448d'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'make'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c007ecf85fe749a7b8fc12f4718ec9eb'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c254c5de18b24d9688f2b9486270ab03'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'vehicle_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c89d5688ccae4ec3b25b96e222b66fdd'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'last_service_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb5acfa8277744a7ba538928ac729b76'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'last_inspected_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cc37564d88974552b704b77a9861672e'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'next_service_due'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ccf4512b8970426cace0d747bee7db1e'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'last_service_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cfc6bf5dd76340979564f7aad3db3813'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd13810efc9d2453086c45081192026fc'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd82d64bb74234daa9fd3a244ea92f44f'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'requested_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db5b6d7bd33648658e7780f386ee7363'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'fuel_type'
                            value: 'lpg'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'df7b48f8c3f947c29d5c4c5f22a3526b'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'dfff1cfedf4141f2b7672c50788db832'
                        key: {
                            name: 'x_snc_vehicle_se_1.vehicle_manager'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e133b54e627443c790794c7f082d8c90'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2366f4eaa9e41a1bed755bdcf1c9204'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3255637db5546c7991ef9b32452afe4'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e55dcc7f015048e0ad442c9d0bb43e1e'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'scheduled_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e91d6939e0004215a51e0258a26ddd71'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ea0a523a560b4854a90356c2fcebdc5a'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'service_type'
                            value: 'emergency'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ecb6e953b17e4744bdd7bc0e92024131'
                        key: {
                            sys_security_acl: '0c514bc3a4ad4db2940c77da741621df'
                            sys_user_role: {
                                id: 'bcb111ee28d5443d9129bcbcd4143602'
                                key: {
                                    name: 'x_snc_vehicle_se_1.vehicle_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eef90e119c11466389201afc7e55e76c'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'year'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ef13a46a9b5743f48e1272ca6f5d4a9f'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'service_type'
                            value: 'repair'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f1933bb325134898875e2e8b02317a1a'
                        key: {
                            name: 'x_snc_vehicle_se_1_vehicle'
                            element: 'vehicle_type'
                            value: 'trailer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f2f0b15148e949a2a89052618be1bd9b'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'completed_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f3fc6e465dae44cc9ae51dea8341517b'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f68afedf394e4917be306a17d6e718dc'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f8e0595b7d2b4561b3ce27f733ee8d71'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fb1abe92a88b43f7a2b176f65f00e82d'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'service_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc3dabe9a6a44f58acb748e43be831d2'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fce976b6fb4b40f98ffb5645b9efccda'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'service_type'
                            value: 'inspection'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe3834cc2ee04f5fb37f26234114bc0c'
                        key: {
                            name: 'x_snc_vehicle_se_1_service_request'
                            element: 'short_description'
                        }
                    },
                ]
            }
        }
    }
}
