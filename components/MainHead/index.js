import Head from 'next/head';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';


const MainHead = (props) => {
  if(process.browser){
    TagManager.initialize({gtmId : 'GTM-M9GCZFC' });
    ReactGA.initialize('UA-140242777-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  return (
    <Head>
  		<meta charset="utf-8" />
  		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
  		<title>Seven Sisters |Senior Care </title>
  		<meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
  		<meta name="description" content=" Seven Sisters Senior Care is" />
  		<meta name="keywords" content="senior care, assisted living, elderly care, elderly care connecticut" />
  		<meta name="author" content="sevensisters.care" />
  		<meta property="og:title" content="Seven Sisters | Senior Care" />
  		<meta property="og:image" content="images/web/tableTopQRSocialMedia.png" />
  		<meta property="og:url" content="https://sevensisters.care/" />
  		<meta property="og:site_name" content="" />
  		<meta property="og:description" content="Senior Care" />
  		<meta name="twitter:title" content="Seven Sisters | Senior Care" />
  		<meta name="twitter:image" content="/images/web/tableTopQRSocialMedia.png" />
  		<meta name="twitter:url" content="http://www.getkroo.com/" />
  		<meta name="twitter:card" content="" />
  		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
  		<link href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,600,700,800,900" rel="stylesheet" />
  		<link rel="shortcut icon" href="favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
};

export default MainHead;
