import os

def combine_css(directory, outfile):
    for filename in os.listdir(directory):
        path = os.path.join(directory, filename)
        if os.path.isdir(path):
            # If it's a directory, recursively call the function
            combine_css(path, outfile)
        elif filename.endswith('.css'):
            with open(path, 'r') as infile:
                for line in infile:
                    if not line.strip().startswith('@import'):
                        outfile.write(line)
                outfile.write('\n')  # Add a newline after each file's content

css_directory = './style'
output_file = 'css/style.css'

with open(output_file, 'w') as outfile:
    combine_css(css_directory, outfile)

print("CSS combined successfully.")
