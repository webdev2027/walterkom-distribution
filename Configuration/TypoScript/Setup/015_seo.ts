seo_sitemap = PAGE
seo_sitemap {
  typeNum = 1533906435

  config {
    cache_period = 900
    disableAllHeaderCode = 1
    admPanel = 0
    removeDefaultJS = 1
    removeDefaultCss = 1
    removePageCss = 1
    additionalHeaders.10 {
      header = Content-Type:application/xml;charset=utf-8
    }
  }

  10 = USER
  10.userFunc = TYPO3\CMS\Seo\XmlSitemap\XmlSitemapRenderer->render
}

plugin.tx_seo {
  config {
    xmlSitemap {
      sitemaps {
        pages {
          provider = TYPO3\CMS\Seo\XmlSitemap\PagesXmlSitemapDataProvider
          config {
            excludedDoktypes = 3, 4, 6, 7, 199, 254, 255
            additionalWhere = no_index = 0
          }
        }
      }
    }
  }
}