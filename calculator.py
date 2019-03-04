"""
    Title: Simple Calculator
    Author: Kelton Adey
"""

numOne = input('Enter first number: ')
numTwo = input('Enter second number: ')
operand = False

while not(operand):
    operation = input('Enter operation (+ - * /): ')

    if operation == '+':
        answer = float(numOne) + float(numTwo)
        operand = True
    elif operation == '-':
        answer = float(numOne) - float(numTwo)
        operand = True
    elif operation == '*':
        answer = float(numOne) * float(numTwo)
        operand = True
    elif operation == '/':
        answer = float(numOne) / float(numTwo)
        operand = True
    else:
        print('Invalid operand')
        operand = False

output = numOne + ' ' + operation + ' ' + numTwo + ' = ' + str(answer)

print(output)