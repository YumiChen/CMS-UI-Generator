/*  !! Infos !!
    (1) Ajax API should return data of which structure as below: 
    [
        {
            name: [table name],
            fields: [
                {
                    name:[string / field name],
                    type: [string /field type],
                    PK: [boolean / is PK or not]
                },
                {...},
                {...}...
            ],
            apis:[
                insert: [string / insert API],
                update: [string / update API],
                query: [ string / query API],
                delete: [ string / delete API]
            ]
        },
        {...},
        {...}
    ]
    (2) available field types are:
        varchar, int, date
    (3) query API should return data containing list property, like below:
        {
            list: [
                {
                    [column1]: [column1 value],
                    [other column data]
                },
                {...}...],
            [other properties...]
        }
        also query API should accept following parameters:
        1. start(int): the number to query data of which index is greater than
        2. rowsperpage(int): the number of (rows of) data to return
*/

module.exports = 
{   
    AjaxAPI : "",
    tables: [
    {
        name: "aaa",
        fields: [{
            name: "id",
            type: "int",
            PK: true
        },{
            name: "name",
            type: "varchar",
            PK: false
        },
        {
            name: "test",
            type: "varchar",
            PK: false
        }],
        apis:{
            insert: "",
            update: "",
            query: "",
            delete: ""
        }
    },{
        name: "ccc",
        fields: [{
            name: "id",
            type: "int",
            PK: true
        },{
            name: "name",
            type: "varchar",
            PK: false
        }],
        apis:{
            insert: "",
            update: "",
            query: "",
            delete: ""
        }
    },{
        name: "ddd",
        fields: [{
            name: "id",
            type: "int",
            PK: true
        },{
            name: "name",
            type: "varchar",
            PK: false
        }],
        apis:{
            insert: "",
            update: "",
            query: "",
            delete: ""
        }
    },{
        name: "eee",
        fields: [{
            name: "id",
            type: "int",
            PK: true
        },{
            name: "name",
            type: "varchar",
            PK: false
        }],
        apis:{
            insert: "",
            update: "",
            query: "",
            delete: ""
        }
    },{
        name: "fff",
        fields: [{
            name: "id",
            type: "int",
            PK: true
        },{
            name: "name",
            type: "varchar",
            PK: false
        }],
        apis:{
            insert: "",
            update: "",
            query: "",
            delete: ""
        }
    },{
        name: "ggg",
        fields: [{
            name: "id",
            type: "int",
            PK: true
        },{
            name: "name",
            type: "varchar",
            PK: false
        }],
        apis:{
            insert: "",
            update: "",
            query: "",
            delete: ""
        }
    },{
        name: "jjj",
        fields: [{
            name: "id",
            type: "int",
            PK: true
        },{
            name: "name",
            type: "varchar",
            PK: false
        }],
        apis:{
            insert: "",
            update: "",
            query: "",
            delete: ""
        }
    },{
        name: "www",
        fields: [{
            name: "id",
            type: "int",
            PK: true
        },{
            name: "name",
            type: "varchar",
            PK: false
        }],
        apis:{
            insert: "",
            update: "",
            query: "",
            delete: ""
        }
    }
    ]
}