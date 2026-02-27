from PIL import Image, ImageFilter, ImageDraw

def process_image():
    try:
        # Load the mockup
        img = Image.open('d:/101/artisangps/frontend/public/images/artisan_hero.png').convert("RGB")
        width, height = img.size
        
        # Crop out the top navbar
        top_crop = 90
        base_height = height - top_crop
        base_img = img.crop((0, top_crop, width, height))

        # Text is roughly x=100 to x=850. Left edge x=0 to 100 has no text.
        left_strip = base_img.crop((0, 0, 100, base_height))
        
        # Stretch it to cover x=0 to 1100
        stretched = left_strip.resize((1100, base_height), Image.Resampling.LANCZOS)
        stretched = stretched.filter(ImageFilter.GaussianBlur(15))

        # Create full stretched background
        background = Image.new("RGB", (width, base_height))
        background.paste(stretched, (0, 0))

        # Create mask
        mask = Image.new("L", (width, base_height), 0)
        draw = ImageDraw.Draw(mask)
        
        # solid part
        draw.rectangle((0, 0, 850, base_height), fill=255)
        
        # gradient part (fade out from x=850 to 1100)
        for x in range(850, 1100):
            a = int(255 * (1 - (x - 850) / 250))
            draw.line([(x, 0), (x, base_height)], fill=a)

        # Composite the stretched background over the base image using the mask
        final_img = Image.composite(background, base_img, mask)
        
        # Save output
        out_path = 'd:/101/artisangps/frontend/public/images/artisan_clean.png'
        final_img.save(out_path)
        print(f"Saved clean image to {out_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    process_image()
