import re
import xml.etree.ElementTree as ET

routes = [
    '/',
    '/features',
    '/ota-booking-management',
    '/direct-hotel-booking',
    '/website-only',
    '/resources',
    '/resources/what-is-hotel-management-software',
    '/resources/what-is-ota-booking-management',
    '/resources/ota-vs-direct-hotel-bookings',
    '/resources/what-should-a-hotel-website-include',
    '/resources/how-hotel-reservation-systems-work',
    '/about',
    '/contact'
]

# 1. Verify sitemap.xml
sitemap_path = 'public/sitemap.xml'
tree = ET.parse(sitemap_path)
root = tree.getroot()
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}

sitemap_urls = [elem.text for elem in root.findall('sm:url/sm:loc', ns)]
print(f"Total URLs in sitemap.xml: {len(sitemap_urls)}")

base_url = 'https://staycore.club'
missing_in_sitemap = []
for r in routes:
    expected = base_url + ('/' if r == '/' else r)
    if expected not in sitemap_urls:
        missing_in_sitemap.append(expected)

if missing_in_sitemap:
    print(f"FAILED: Missing in sitemap: {missing_in_sitemap}")
else:
    print("SUCCESS: All 13 routes exist in sitemap.xml!")

# 2. Check for forbidden words (unsupported claims) in pages
forbidden_words = [
    r'\bnumber one\b',
    r'\b#1\b',
    r'\bguaranteed revenue\b',
    r'\bused by thousands\b',
    r'\bworld\'s best\b'
]

files_to_check = [
    'src/pages/Home.jsx',
    'src/pages/Features.jsx',
    'src/pages/OtaBookingManagement.jsx',
    'src/pages/DirectHotelBooking.jsx',
    'src/pages/WebsiteOnly.jsx',
    'src/pages/Resources.jsx',
    'src/pages/GuideDetail.jsx',
    'src/data/guidesData.js',
    'src/data/seoData.js'
]

forbidden_hits = []
for f in files_to_check:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
        for pat in forbidden_words:
            if re.search(pat, content, re.IGNORECASE):
                forbidden_hits.append((f, pat))

if forbidden_hits:
    print(f"WARNING: Forbidden claim hits: {forbidden_hits}")
else:
    print("SUCCESS: Zero unsupported claims found across all pages and data files!")

print("Static Content SEO Audit Completed Successfully.")
