// lua code demo

const helloCode = `
--[[
    基于 fengari-web
    https://github.com/fengari-lua/fengari-web
]]

-- first Lua code
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

const numberCode = `-- Lua 数字
print(type(3))        -- number
print(type(3.5))      -- number
print(1 == 1.0)       -- true
print(-3 == -3.0)     -- true
print(0.2e3 == 200)   -- true
print(math.type(3))   -- integer
print(math.type(3.0))   -- float
-- 算术运算
print(3 // 2)         -- 1
print(3.0 // 2)       -- 1.0
print(6 // 2)         -- 3
print(6.0 // 2.0)     -- 3.0
print(-9 // 2)        -- -5
print(1.5 // 0.5)     -- 3.0 
`

const stringCode = `-- Lua 字符串

-- 长字符串

page = [[
<html>
    <head>
    <title>An HTML Page</title>
    </head>
    <body>
        <a href="http://www.lua.org">Lua</a>
    </body>
</html>
]]

print(page)
`

const tableCode = `-- Lua table
table = {name = 'codingcat', age = 28}
print("table 的类型是 ", type(table))
print(table.name, table.age)

array = {1, true, "字符串"}
print('array type: ', type(array))
print('数组: ', array[1], array[2], array[3])
`

const loopCode = `-- lua loop
for i = 1, 5 do
    print(i)
end
`

const functionCode = `-- Lua function
function sum(a, b)
    return a + b
end

result = sum(1, 3)
print(result)
`

const closuresCode = `-- Lua 闭包

`

const dateTimeCode = `-- Lua 日期和时间
print(os.time())     -- 时间戳

ts = 906000490
print(os.date("%Y-%m-%d %H:%M:%S", ts))     -- 日期格式和
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
        case 'number':
            code_name = numberCode;
            break;
        case 'string':
            code_name = stringCode;
            break;
        case 'closures':
            code_name = closuresCode;
            break;
        case 'datetime':
            code_name = dateTimeCode;
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
