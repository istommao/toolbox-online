// Python code demo

const helloCode = `
#
#    基于 fpyodide
#    https://github.com/pyodide/pyodide

# first python code
print("Hello World")
`

const dataTypeCode = `# Python 数据类型
print(type(1))                # <class 'int'>

print(type(3.14 * 5))             # <class 'float'>
print(type("Hello world"))       # <class 'str'>

print(type(True))               # <class 'bool'>
print(type(type))               # <class 'type'>
print(type(print))                # <class 'builtin_function_or_method'>
`

const loopCode = `# python loop
for i in range(1, 5):
    print(i)
`

const functionCode = `# python function
def sum(a, b):
    return a + b

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
        case 'loop':
            code_name = loopCode;
            break;
        case 'function':
            code_name = functionCode;
            break;
    }

    return code_name;    
}
