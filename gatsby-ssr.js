import React from 'react'

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: 'en' })

  setHeadComponents([
    // Meta description
    <meta
      key="description"
      name="description"
      content="La Raven Gordon is an AI Brain Specialist who helps large language models reason more reliably and businesses build durable AI systems."
    />,
    
    // Google Fonts
    <link key="google-fonts-preconnect" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
    <link key="google-fonts-dns-prefetch" rel="dns-prefetch" href="https://fonts.gstatic.com" />,
    
    // Google Analytics
    <link key="google-analytics-preconnect" rel="preconnect" href="https://analytics.google.com" />,
    <link key="google-analytics-dns-prefetch" rel="dns-prefetch" href="https://analytics.google.com" />,
  ])
} 
