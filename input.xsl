<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xi="http://www.w3.org/2001/XInclude"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:fo="http://www.w3.org/1999/XSL/Format">
    <xsl:output method="xml" indent="yes" />
    <xsl:template match="/">
        <fo:root>
            <fo:layout-master-set>
                <fo:simple-page-master master-name="A4-portrait" page-height="29.7cm" page-width="21.0cm" margin="0cm">
                    <fo:region-body />
                    <fo:region-before extent="0cm" />
                </fo:simple-page-master>
            </fo:layout-master-set>

            <!--New page -->
            <fo:page-sequence master-reference="A4-portrait">

                <!-- Header -->
                <fo:static-content flow-name="xsl-region-before">
                    <fo:block text-align="center" font-weight="bold" font-size="12pt">
                        My Document Header - <fo:page-number/>
                    </fo:block>
                </fo:static-content>

                <!-- Body -->
                <fo:flow flow-name="xsl-region-body">
                    <fo:block> Hello, <xsl:value-of select="name" />! </fo:block>
                    <xi:include href="./image1.fo" parse="xml" />
                    <xi:include href="./image1.fo" parse="xml" />
                    <xi:include href="./image1.fo" parse="xml" />
                </fo:flow>

            </fo:page-sequence>

            <!-- New page -->
            <fo:page-sequence master-reference="A4-portrait">
                <fo:flow flow-name="xsl-region-body">
                    <fo:block> Hello, <xsl:value-of select="name" />! </fo:block>
                </fo:flow>
            </fo:page-sequence>

        </fo:root>
    </xsl:template>
</xsl:stylesheet>