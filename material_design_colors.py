from json import dump
from bs4 import BeautifulSoup

with open('./colors.html', 'r', encoding='utf-8') as f:
    html = f.read()
soup = BeautifulSoup(html, 'html.parser')


def details(_soup):
    # 解析色板
    return {
        'shade': _soup.find('span', attrs={'class': 'shade'}).text,
        'hex': _soup.find('span', attrs={'class': 'hex'}).text
    }


def color_level(__soup):
    # 获取色彩等级
    temp_color_level = {}
    attrs = {'class': 'details'}
    for detail in [details(i) for i in __soup.find_all('div', attrs=attrs)]:
        temp_color_level[detail['shade']] = detail['hex']
    return temp_color_level


def write_color_js(__data):
    with open('./colo.json', 'w', encoding='utf-8') as f:
        dump(__data, f)


def parse_color_model():
    temp = {}
    # 查询所有的色彩卡
    for item in soup.find_all('div', attrs={'class': 'module'}):
        try:
            # 获取色卡名称
            name = item.find('span', attrs={'class': 'group'}).text
            # 小写色彩名称
            name = name.lower().replace(' ', '_')

            temp[name] = color_level(item)

        except AttributeError:
            attrs = {'class': 'details'}
            detail = [details(i) for i in item.find_all('div', attrs=attrs)]
            if detail:
                for item in detail:
                    temp[item['shade']] = item['hex']
    return temp


# print(temp)
if __name__ == '__main__':

    # 解析色板
    data = parse_color_model()
    # 写入文件
    write_color_js(data)
