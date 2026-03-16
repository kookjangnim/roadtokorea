import re
import os

filepath = r"d:\Project\roadtokorea\frontend\app\globals.css"

with open(filepath, "r", encoding="utf-8") as f:
    css = f.read()

# 1. Root variables
css = css.replace("--background: #ffffff; /* Pure white */", "--background: #0a0a0b; /* Deep rich dark */")
css = css.replace("--foreground: #111111; /* Deep rich black */", "--foreground: #f3f4f6; /* Off white */")
css = css.replace("--color-brand-primary: #ffffff;", "--color-brand-primary: #111111;")
css = css.replace("--color-brand-secondary: #e5e7eb;", "--color-brand-secondary: rgba(255, 255, 255, 0.1);")
css = css.replace("--glass-bg: rgba(0, 0, 0, 0.02);", "--glass-bg: rgba(255, 255, 255, 0.03);")
css = css.replace("--glass-border: rgba(0, 0, 0, 0.05);", "--glass-border: rgba(255, 255, 255, 0.08);")

# 2. Text Colors
css = re.sub(r'color:\s*#111827\s*;', 'color: #f9fafb;', css)
css = re.sub(r'color:\s*#1f2937\s*;', 'color: #f3f4f6;', css)
css = re.sub(r'color:\s*#374151\s*;', 'color: #d1d5db;', css)
css = re.sub(r'color:\s*#4b5563\s*;', 'color: #9ca3af;', css)
css = re.sub(r'color:\s*#6b7280\s*;', 'color: #6b7280;', css)
css = re.sub(r'color:\s*#9ca3af\s*;', 'color: #4b5563;', css)

# 3. Accent Colors
css = re.sub(r'color:\s*#2563eb\s*;', 'color: #60a5fa;', css)  # Links / active
css = re.sub(r'color:\s*#d97706\s*;', 'color: #fbbf24;', css)  # Ratings
css = re.sub(r'border-left:\s*3px solid\s*#d97706\s*;', 'border-left: 3px solid #fbbf24;', css)
css = re.sub(r'border-left:\s*3px solid\s*#2563eb\s*;', 'border-left: 3px solid #60a5fa;', css)

# 4. Backgrounds & Borders (The Glassmorphism Core)
# White backgrounds to glass
css = re.sub(r'background:\s*#ffffff\s*;', 'background: rgba(255, 255, 255, 0.02);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);', css)
css = re.sub(r'background:\s*#f9fafb\s*;', 'background: rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);', css)
css = re.sub(r'background:\s*#fafafa\s*;', 'background: rgba(255, 255, 255, 0.02);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);', css)
css = re.sub(r'background:\s*#f3f4f6\s*;', 'background: rgba(255, 255, 255, 0.08);', css)
css = re.sub(r'background:\s*#f0f9ff\s*;', 'background: rgba(59, 130, 246, 0.1);', css) # Tip cards blue bg
css = re.sub(r'background:\s*#fffbeb\s*;', 'background: rgba(245, 158, 11, 0.1);', css) # Why visit rating bg

# Borders
css = re.sub(r'border:\s*1px solid\s*#e5e7eb\s*;', 'border: 1px solid rgba(255, 255, 255, 0.1);', css)
css = re.sub(r'border-bottom:\s*1px solid\s*#e5e7eb\s*;', 'border-bottom: 1px solid rgba(255, 255, 255, 0.1);', css)
css = re.sub(r'border-bottom:\s*2px solid\s*#e5e7eb\s*;', 'border-bottom: 2px solid rgba(255, 255, 255, 0.1);', css)
css = re.sub(r'border-bottom:\s*1px solid\s*#f3f4f6\s*;', 'border-bottom: 1px solid rgba(255, 255, 255, 0.05);', css)
css = re.sub(r'border-top:\s*1px solid\s*#e5e7eb\s*;', 'border-top: 1px solid rgba(255, 255, 255, 0.1);', css)
css = re.sub(r'border:\s*1px solid\s*#bfdbfe\s*;', 'border: 1px solid rgba(59, 130, 246, 0.2);', css)

# 5. Box Shadows (Darker for dark glass)
css = css.replace("box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);", "box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);")
css = css.replace("box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);", "box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);")

# 6. Specific overrides
# Buttons
css = re.sub(r'background-color:\s*#000\s*;', 'background-color: #ffffff;', css)
css = css.replace("color: #fff;", "color: #000000;")
css = css.replace("background-color: #333;", "background-color: #e5e7eb;")

# Hero Cta and others
css = re.sub(r'background:\s*#111827\s*;', 'background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);', css)
css = re.sub(r'background:\s*#374151\s*;', 'background: rgba(255, 255, 255, 0.2);', css)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(css)

print("Theme converted successfully!")
