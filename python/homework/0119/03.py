def ssafy(name, location='서울'):
	print(f"{name}의 지역은 {location}입니다.")

ssafy('허준')
ssafy(location='대전', name='철수')
ssafy('영희', name='철수')
# ssafy(name='길동', '구미') # 정답 4번 : 기본인자 값을 가지는 인자 뒤에 기본값이 없는 인자는 더이상 올 수 없습니다.
