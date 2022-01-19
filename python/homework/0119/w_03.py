def all_list_sum(my_list):
	result = 0
	for i in range(len(my_list)):
		for j in my_list[i]:
			result += j
	return result

print(all_list_sum([[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]]))
