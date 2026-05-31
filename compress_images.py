from PIL import Image
from pathlib import Path

input_folder = Path("images-original")
output_folder = Path("images")

output_folder.mkdir(exist_ok=True)

max_size = 1200
quality = 82

allowed_ext = [".jpg", ".jpeg", ".png", ".webp"]

for file in input_folder.iterdir():
    if file.suffix.lower() not in allowed_ext:
        continue

    img = Image.open(file).convert("RGB")

    width, height = img.size

    if width > max_size or height > max_size:
        img.thumbnail((max_size, max_size))

    output_name = file.stem + ".jpg"
    output_path = output_folder / output_name

    img.save(output_path, "JPEG", quality=quality, optimize=True)

    original_size = file.stat().st_size / 1024 / 1024
    new_size = output_path.stat().st_size / 1024 / 1024

    print(f"{file.name} -> {output_name}")
    print(f"Original: {original_size:.2f} MB | Baru: {new_size:.2f} MB")