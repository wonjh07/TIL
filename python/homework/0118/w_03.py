result = ''
num = int(input())
for i in range(1, num):
	result += str(i)
	print(result)
	result += ' '
result += str(num)
print(result)
