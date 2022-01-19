def get_middle_char(word):
	length = len(word)
	middle_num = length // 2
	if length % 2 == 0:
		print(word[middle_num - 1 : middle_num + 1])
	else:
		print(word[middle_num])

get_middle_char('ssafy')
get_middle_char('coding')