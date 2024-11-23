import os
import sys
import argparse
import json
from dotenv import load_dotenv

load_dotenv()
from workflow import *

"""
jobs.json
{
	"delocalizer":"delocalizer.json",
	"names":"names.json",
	"honorifics":"honorifics.json",
	"pairs": [
		[["file1.mkv", 2], ["ref1.mkv", 3], true, 0.0, 0],
		[["file2.mkv", 2], ["ref2.mkv", 3], true, 0.0, 0]
	]
}
"""

parser = argparse.ArgumentParser(description='')
parser.add_argument('--full', dest='full', action=argparse.BooleanOptionalAction,
                   help='Full workflow')
parser.add_argument('--side', dest='side', action=argparse.BooleanOptionalAction, required=not '--full' in sys.argv,
                   help='Action: side - delocalize | no-side - honorify')

path = './Finished'

def load_jobs(file: str = "./jobs.json"):
	with open(file, 'r', encoding="utf-8") as f:
		j = json.load(f)
		return j

def full():
	jobs = load_jobs()
	for eng, ref, nt, shift, thresh in jobs["pairs"]:
		if eng[0].endswith((".ass", ".srt")):
			eng_sub = eng[0]
		else:
			eng_sub = extract_english(eng[0], eng[1])

		if ref[0].endswith((".ass", ".srt")):
			ref_sub = ref[0]
		else:
			ref_sub = extract_reference(ref[0], ref[1])

		delocalized = full_delocalize(eng_sub, ref_sub, jobs["delocalizer"], jobs["names"], jobs["honorifics"], nt, shift, thresh)

		final = append(eng[0], delocalized, path)
		print(final)

def half(action):
	jobs = load_jobs()
	if action:
		for eng, ref, nt, shift, thresh in jobs["pairs"]:
			eng_sub = extract_english(eng[0], eng[1])

			delocalized = half_delocalize(action, eng_sub, jobs["delocalizer"])

			final = append(eng[0], delocalized, path)
	else:
		for eng, ref, nt, shift, thresh in jobs["pairs"]:
			eng_sub = extract_english(eng[0], eng[1])
			ref_sub = extract_reference(ref[0], ref[1])

			delocalized = half_delocalize(action, eng_sub, jobs["delocalizer"], ref_sub, jobs["names"], jobs["honorifics"], nt, shift, thresh)

			final = append(eng[0], delocalized, path)

def main():
	args = parser.parse_args()

	if args.full:
		full()
	else:
		half(args.side)

if __name__ == '__main__':
	main()