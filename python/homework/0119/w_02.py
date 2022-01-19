def dict_list_sum(my_dict):
	result = 0
	for i in range(len(my_dict)):
		for key, value in my_dict[i].items():
			if key == 'age':
				result += value
	return result

print(dict_list_sum([{'name': 'kim', 'age': 12}, {'name': 'lee', 'age': 4}]))