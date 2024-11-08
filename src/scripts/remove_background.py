from rembg import remove
from PIL import Image

def remove_background(input_path, output_path):
    # Open the image
    input_image = Image.open(input_path)
    
    # Remove the background
    output_image = remove(input_image)
    
    # Save the result
    output_image.save(output_path)
    
    print(f"Background removed! Saved to: {output_path}")

# Usage
remove_background(
    '../contents/images/logo.jpg',
    '../contents/images/logo2.png'
) 