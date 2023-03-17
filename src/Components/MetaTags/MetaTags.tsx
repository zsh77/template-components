import React, { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import path from 'path'
import { baseUrl } from 'Constants'

interface IMetaTagsProps {
  data?: {
    title?: string
    description?: string
    url?: string
    image?: string
    ldScript?: string
    noIndex?
  }
  breadCrumb?
  productProps?: { price?: string; currency?: 'IRR' | 'USD' }
  isProduct?: boolean
}

const MetaTags: FC<IMetaTagsProps> = (props) => {
  const {
    data: { title, description, url, image, ldScript, noIndex },
    breadCrumb,
    productProps,
    isProduct,
  } = props

  const router = useRouter()
  const { locale } = router

  const modifiedUrl =
    url ||
    path.join(
      baseUrl,
      router.asPath.indexOf('?') !== -1
        ? router.asPath.slice(0, router.asPath.indexOf('?'))
        : router.asPath
    )

  return (
    <Head>
      {(true || noIndex) && <meta name="robots" content="noindex, nofollow" />}
      <title>{title}</title>
      {/* <title>
        گُل‌سِتان | گل فروشی آنلاین | سفارش آنلاین گل | گیاه آپارتمانی
      </title> */}
      <meta name="description" content={description} />
      <link rel="canonical" href={modifiedUrl} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {isProduct ? (
        <>
          <meta property="og:type" content="product" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={modifiedUrl} />
          <meta
            property="og:image"
            // TODO: fix
            content={
              image ||
              'https://www.golsetan.com/wp-content/uploads/2019/02/valentine.jpg'
            }
          />
          <meta property="og:description" content={description} />
          <meta property="product:price.amount" content={productProps.price} />
          <meta
            property="product:price.currency"
            content={productProps.currency}
          />
          <meta property="og:locale" content={locale} />
          <meta property="og:site_name" content="گلستان" />
        </>
      ) : (
        <>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={modifiedUrl} />
          <meta property="og:site_name" content="گُل‌سِتان" />
          <meta property="og:locale" content={locale} />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={
              image ||
              // TODO: fix
              'https://www.golsetan.com/wp-content/uploads/2019/02/valentine.jpg'
            }
          />
          <meta property="og:image:width" content="1044" />
          <meta property="og:image:height" content="500" />
        </>
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@golsetan" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        property="twitter:image"
        // TODO: fix
        content={
          image ||
          'https://www.golsetan.com/wp-content/uploads/2019/02/valentine.jpg'
        }
      />

      {/* product ldscript */}
      {isProduct && breadCrumb?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: breadCrumb.map((el, i) => {
                return {
                  '@type': 'ListItem',
                  position: i + 1,
                  name: el.label,
                  item: path.join(baseUrl, el.href),
                }
              }),
            }),
          }}
        ></script>
      )}
      {/* ldscript */}
      {ldScript && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldScript }}
        ></script>
      )}
    </Head>
  )
}

export default MetaTags
MetaTags.defaultProps = {
  data: {
    title: 'نیو گل ستان',
    description:
      'گل فروشی آنلاین گُل‌سِتان با حذف واسطه‌ها تازه‌ترین و با کیفیت ترین گل و گیاه را 30% ارزانتر در کمتر از 4 ساعت همین امروز با ارسال رایگان به شما تحویل می‌دهد',
    url: '',
  },
  isProduct: false,
  productProps: { price: '' },
}
