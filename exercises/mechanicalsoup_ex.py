import mechanicalsoup

my_browser = mechanicalsoup.Browser(soup_config={'features':'html.parser'})
page = my_browser.get("http://mattchoplin.com/python_city/practice/Profile_Aphrodite.htm")
print(page.soup)
