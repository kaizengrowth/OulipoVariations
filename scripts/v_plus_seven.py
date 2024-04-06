import sys
import json
import spacy
import pandas as pd
import re


def to_uppercase(input_text):
    """Converts the input text to uppercase."""
    return input_text.upper()


if __name__ == "__main__":
    # Check if any input text has been provided
    if len(sys.argv) > 1:
        input_text = sys.argv[1]
        print(to_uppercase(input_text))
    else:
        print("Please provide the text to transform.")
