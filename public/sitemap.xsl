<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap · DARSH DREAM TOURS</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style type="text/css">
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #07101F;
            color: #F7F5F0;
            padding: 40px 20px;
            line-height: 1.6;
          }
          .container {
            max-width: 1040px;
            margin: 0 auto;
          }
          header {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 24px;
            margin-bottom: 32px;
          }
          .brand {
            font-size: 11px;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: #E2B18D;
            font-weight: 600;
            margin-bottom: 8px;
          }
          h1 {
            font-size: 32px;
            font-weight: 300;
            color: #FFFFFF;
            letter-spacing: -0.02em;
            margin-bottom: 8px;
          }
          p.desc {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
            max-width: 650px;
          }
          p.desc a {
            color: #E2B18D;
            text-decoration: none;
          }
          p.desc a:hover {
            text-decoration: underline;
          }
          .stats-bar {
            display: flex;
            gap: 16px;
            margin-top: 16px;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.4);
          }
          .stats-bar span {
            color: #FFFFFF;
            font-weight: 600;
          }
          .table-wrapper {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 13px;
          }
          thead {
            background: rgba(255, 255, 255, 0.05);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          th {
            padding: 14px 20px;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: #E2B18D;
            font-weight: 600;
          }
          td {
            padding: 16px 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.04);
            color: rgba(255, 255, 255, 0.8);
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background: rgba(255, 255, 255, 0.02);
          }
          td a {
            color: #FFFFFF;
            text-decoration: none;
            font-weight: 500;
            display: inline-block;
            transition: color 0.2s ease;
          }
          td a:hover {
            color: #E2B18D;
          }
          .badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 9999px;
            background: rgba(184, 117, 67, 0.2);
            color: #E2B18D;
            font-size: 11px;
            font-weight: 600;
          }
          footer {
            margin-top: 32px;
            text-align: center;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.3);
          }
          footer a {
            color: #E2B18D;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <div class="brand">Darsh Dream Tours · Vadodara</div>
            <h1>XML Sitemap Index</h1>
            <p class="desc">
              This index helps search engines like Google and Bing discover and index pages across 
              <a href="https://www.darshdreamtours.com">darshdreamtours.com</a>.
            </p>
            <div class="stats-bar">
              <div>Total URLs: <span><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span></div>
              <div>Generated: <span>Automated via Next.js</span></div>
            </div>
          </header>

          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th style="width: 50%;">URL Location</th>
                  <th style="width: 20%;">Change Frequency</th>
                  <th style="width: 15%;">Priority</th>
                  <th style="width: 15%;">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td>
                      <span class="badge">
                        <xsl:value-of select="sitemap:priority"/>
                      </span>
                    </td>
                    <td style="color: rgba(255, 255, 255, 0.45); font-size: 12px;">
                      <xsl:value-of select="substring(sitemap:lastmod, 0, 11)"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <footer>
            <p>© DARSH DREAM TOURS · Curated Journeys by Sakshi Chandiramani · <a href="/">Return to Website</a></p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
