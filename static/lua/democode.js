// lua code demo

const helloCode = `
--[[
    基于 fengari-web
    https://github.com/fengari-lua/fengari-web
]]

-- first lua code
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
table = {name = 'codingcat', age = 28}
print("table 的类型是 ", type(table))
print(table.name, table.age)
`

const loopCode = `-- lua loop
for i = 1, 5 do
    print(i)
end
`

const functionCode = `-- lua function
function sum(a, b)
    return a + b
end

result = sum(1, 3)
print(result)
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
        case 'loop':
            code_name = loopCode;
            break;
        case 'function':
            code_name = functionCode;
            break;
    }

    return code_name;    
}
