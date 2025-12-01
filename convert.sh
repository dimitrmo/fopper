#!/bin/bash

xmllint --xinclude input.xsl > expanded.xsl
fop -xml data.xml -xsl expanded.xsl -pdf output.pdf
