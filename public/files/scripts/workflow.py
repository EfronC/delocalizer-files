import subprocess
import sys
import os
from c_delocalizer.modify_subs import overwrite_subs as modify_subs_py
from subdeloc_tools.subtools import SubTools
from subdeloc_tools.modules.shift_subs import shift_sub
from subdeloc_tools.modules.merger import Merger
import os

merger = Merger()
OUTPUT = './Finished'

# DEMUX ***********************************************************************************************

def extract_english(f: str, idx: int):
	merger.set_file(f)
	fname = f.split(".")[0]
	ext = ".txt"

	if idx>-1:
		streams = merger.get_streams()
		codec_name = streams["streams"][idx]['codec_name']
		if codec_name == "ass":
			ext = ".ass"
		elif codec_name == "subrip":
			ext = ".srt"
		else:
			ext = ".txt"
		merger.demux(f, idx, fname+ext)

	return fname+ext

def extract_reference(f: str, idx: int):
	merger.set_file(f)
	fname = f.split(".")[0]
	ext = ".txt"

	if idx>-1:
		streams = merger.get_streams()
		codec_name = streams["streams"][idx]['codec_name']
		if codec_name == "ass":
			ext = ".ass"
		elif codec_name == "subrip":
			ext = ".srt"
		else:
			ext = ".txt"
		merger.demux(f, idx, fname+ext)

	return fname+ext

def full_delocalize(eng, ref, delo, names, honorifics="./honorifics.json", notokens=True, shift=0.0, thresh=0):
	shifted = False
	print(shift)
	if shift>0 or shift<0:
		sref = shift_sub(ref, shift, thresh)
		shifted = True
	else:
		sref = ref
	name = modify_subs_py(eng, delo)
	fname = name.split(".")[0]
	on = "[Fixed]"+fname+".ass"
	st = SubTools(name, sref, names, honorifics, on, jap_ref=notokens)
	delocalized = st.main()
	os.remove(name)
	if shifted:
		os.remove(sref)
	print(delocalized)
	return delocalized

def delocalize(eng, delo):
	name = modify_subs_py(eng, delo)
	return name

def honorize(eng, ref, names, honorifics="./honorifics.json", notokens=True, shift=0.0, thresh=0):
	if shift>0 or shift<0:
		sref = shift_sub(ref, shift, thresh)
	else:
		sref = ref
	fname = eng.split(".")[0]
	on = "[Fixed]"+fname+".ass"
	st = SubTools(eng, sref, names, honorifics, on, jap_ref=notokens)
	delocalized = st.main()
	return delocalized

def half_delocalize(action, eng, delo, ref=None, names=None, honorifics="./honorifics.json", notokens=True, shift=0.0, thresh=0):
	if action:
		name = delocalize(eng, delo)
	else:
		name = honorize(eng, ref, names, honorifics, notokens, shift, thresh)

	return name

# MUX *************************************************************************************************

def append(file:str, subtitle:str, path:str="./Finished"):
	merger.set_file(file)
	fname = file.split(".")[0]

	r = merger.mux(file, subtitle, path)
	return r