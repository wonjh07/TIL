case = int(input())
for i in range(case):
	nums = list(map(int, input().split()))
	result = 0
	for j in map(int, input().split()):
		if j % 2 == 1:
			result += j
	print(f"#{i + 1} {result}")
