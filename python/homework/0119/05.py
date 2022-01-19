def my_avg(*avg):
	result = sum(avg) / len(avg)
	return result

print(my_avg(77, 83, 95, 80, 70))
