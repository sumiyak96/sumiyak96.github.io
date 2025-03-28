USERNAME = 'dummy'
PASSWORD = 'dummydummy'

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
import json
import re

options = webdriver.ChromeOptions()
options.add_argument('--disable-gpu')
options.add_argument('--disable-software-rasterizer')
options.add_argument('--start-maximized')
options.add_argument("user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36")

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

def login_instagram():
    driver.get('https://www.instagram.com/accounts/login/')
    time.sleep(5)
    username_input = driver.find_element(By.NAME, 'username')
    password_input = driver.find_element(By.NAME, 'password')

    username_input.send_keys(USERNAME)
    password_input.send_keys(PASSWORD)
    password_input.send_keys(Keys.RETURN)
    time.sleep(5)

def scroll_to_target_count(target_count=60):
    SCROLL_PAUSE_TIME = 3
    same_count = 0
    max_same_count = 5
    last_count = 0

    while True:
        links = driver.find_elements(By.XPATH, "//a[contains(@href, '/p/')]")
        current_count = len(links)

        if current_count >= target_count:
            break

        if current_count == last_count:
            same_count += 1
            if same_count >= max_same_count:
                break
        else:
            same_count = 0
            last_count = current_count

        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(SCROLL_PAUSE_TIME)

def scrape_posts():
    driver.get('https://www.instagram.com/dummy/')
    time.sleep(5)
    scroll_to_target_count(90)

    links = driver.find_elements(By.XPATH, "//a[contains(@href, '/p/')]")
    post_urls = list(set([link.get_attribute('href') for link in links]))

    cleaned_urls = []
    for url in post_urls:
        match = re.search(r"/p/[^/]+/", url)
        if match:
            cleaned_urls.append(f"https://www.instagram.com{match.group(0)}")

    results = []
    for url in cleaned_urls:
        try:
            driver.get(url)
            time.sleep(4)
            caption_elem = driver.find_element(By.XPATH, "/html/body/div[1]/div/div/div[2]/div/div/div[1]/div[1]/div[1]/section/main/div/div[1]/div/div[2]/div/div[2]/div/div[1]/div/div[2]/div/span/div/span")
            caption_text = caption_elem.text.strip()
            hashtags = re.findall(r"#\w+", caption_text)
            results.append({'url': url, 'hashtags': hashtags})
            print(f"✅ {url} - {hashtags}")
        except Exception as e:
            print(f"⚠️  Failed to extract: {url}", e)
        time.sleep(3)

    with open('instagram_posts.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f"✅ Done! Extracted {len(results)} posts.")

if __name__ == '__main__':
    login_instagram()
    scrape_posts()
    driver.quit()
