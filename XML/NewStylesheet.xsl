<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
<html>
<head>
	<meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Central Mall</title>
	<style>
		*{
			margin: 0;
			padding: 0;
		}
		body{
			background-color: #ffa500;
			font-family: 'Montserrat';
		}
		h1{
			text-align: center;
			color: white;
			background-color: #404040;
			padding:1%;
		}
		table{
			background-color: #a0a0a0;
			margin:5% 5% 5% ;
			width:90%;
		}
		td, th{
			text-align:left;
			padding:1.5%;
		}
	</style>
</head>
<body>
<h1>Restaurant Detail</h1>
<table>
<tr>
<th>Court No</th>
<th>Floor No</th>
<th>Restaurant Name</th>
<th>Type</th>
</tr>
<xsl:for-each select="CentralMall/FoodCourt/Restaurant">
<xsl:sort select="court_no"></xsl:sort>
<tr>
<td>
<xsl:value-of select="court_no"></xsl:value-of>
</td>
<td>
<xsl:value-of select="floor_no"></xsl:value-of>
</td>
<td>
<xsl:value-of select="r_name"></xsl:value-of>
</td>
<td>
<xsl:value-of select="type"></xsl:value-of>
</td>
</tr>
</xsl:for-each>
</table>

<h1>Menu</h1>
<table>
<tr>
<th>Restaurant name</th>
<th>food name</th>
<th>price</th>
</tr>
<xsl:for-each select="CentralMall/FoodCourt/Restaurant/menu/food">
<xsl:choose>
<xsl:when test="floor_no &lt; 1">
<tr>
<td>
<xsl:value-of select="r_name"></xsl:value-of>
</td>
<td>
<xsl:value-of select="name"></xsl:value-of>
</td>
<td>
<xsl:value-of select="price"></xsl:value-of>
</td>
</tr>
</xsl:when>
</xsl:choose>
</xsl:for-each>
</table>

<h1>Menu</h1>
<table>
	<tr>
	<th>Restaurant name</th>
	<th>food name</th>
	<th>price</th>
	</tr>
	<xsl:for-each select="CentralMall/FoodCourt/Restaurant/menu/food">
	<xsl:choose>
	<xsl:when test="floor_no &gt; 0">
	<tr>
	<td>
	<xsl:value-of select="r_name"></xsl:value-of>
	</td>
	<td>
	<xsl:value-of select="name"></xsl:value-of>
	</td>
	<td>
	<xsl:value-of select="price"></xsl:value-of>
	</td>
	</tr>
    </xsl:when>
	</xsl:choose>
	</xsl:for-each>
	</table>
</body>
</html>		
</xsl:template>
</xsl:stylesheet>