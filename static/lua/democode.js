
const helloCode = `-- first lua code
print("Hello World")
`

const dataTypeCode = `-- Lua 数据类型
print(type(nil))                --> nil

print(type(1))             --> number
print(type(3.14 * 5))             --> number
print(type("Hello world"))       --> string

print(type(true))               --> boolean

print(type(type))               --> function
print(type(print))                --> function


value = 'string'
print(type(type(value)))            --> string
`

const tableCode = `-- Lua table
table = {}
print("table 的类型是 ", type(table))
`

const getCodeValue = function(menu_name) {
    code_name = helloCode;

    switch (menu_name) {
        case 'hello':
            code_name = helloCode;
            break;
        case 'dataType':
            code_name = dataTypeCode;
            break;
        case 'table':
            code_name = tableCode;
            break;
    }

    return code_name;    
}
