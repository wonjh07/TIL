def list_sum(nums):
	result = 0
	temp = list(map(int, nums))
	for i in temp:
		result += i
	return result

print(list_sum([1, 2, 3, 4, 5]))
