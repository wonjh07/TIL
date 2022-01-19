
a = int(input())
b = int(input())
c = int(input())

equation = (-b + ((b ** 2) - (4 * a * c)) ** 0.5) / (2 * a)
equation2 = (-b - ((b ** 2) - (4 * a * c)) ** 0.5) / (2 * a)

print(equation, equation2)