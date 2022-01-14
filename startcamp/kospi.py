import requests
from bs4 import BeautifulSoup

response = requests.get('https://finance.naver.com/sise/').text
bs = BeautifulSoup(response, 'html.parser').select_one('#KOSPI_now')
kospi = bs.text
print(kospi)

response2 = requests.get('https://finance.naver.com/marketindex/').text
bs2 = BeautifulSoup(response2, 'html.parser').select_one('#exchangeList > li.on > a.head.usd > div > span.value')
USD = bs2.text
print(USD)