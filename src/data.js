export default [
  {
    title: 'EBSCO',
    accessURLs: [
      'https://shibboleth.ebscohost.com/Shibboleth.sso/Login?SAMLDS=1&target=https%3A%2F%2Fshibboleth.ebscohost.com%2FShibAgent.aspx%3Fshib_returl%3Dhttps%253a%252f%252fsearch.ebscohost.com%252flogin.aspx%253fauthtype%253dshib%26IdpId%3D&entityID=https://{idp_domain}/idp/shibboleth&providerID=http://shibboleth.ebscohost.com',
      'http://search.ebscohost.com/login.aspx?authtype=ip,shib&custid={customer_id}',
    ],
  },
  {
    title: 'Emerald Management',
    accessURLs: ['https://www.emerald.com/start-session?idp=https://{idp_domain}/idp/shibboleth'],
  },
  {
    title: 'ProQuest',
    accessURLs: [
      'https://shibboleth-sp.prod.proquest.com/Shibboleth.sso/DS?SAMLDS=1&target=https%3A%2F%2Fshibboleth-sp.prod.proquest.com%2FONE_SEARCH%2FPROD&entityID=https%3A%2F%2F{idp_domain}%2Fidp%2Fshibboleth',
      'https://search.proquest.com/?accountid={account_id}',
    ],
  },
  {
    title: 'IEEE/IET ELECTRONIC LIBRARY（IEL）',
    accessURLs: [
      'https://ieeexplore.ieee.org/servlet/wayf.jsp?entityId=https://{idp_domain}/idp/shibboleth&url=https%3A%2F%2Fieeexplore.ieee.org',
    ],
  },
  {
    title: 'IOP Journals',
    accessURLs: [
      'https://myiopscience.iop.org/signin?origin=deeplink&entity=https://{idp_domain}/idp/shibboleth&target=https://iopscience.iop.org/',
    ],
  },
  {
    title: 'Nature',
    accessURLs: [
      'https://sp.nature.com/saml/login?idp=https://{idp_domain}/idp/shibboleth&targetUrl=https://www.nature.com/nature',
    ],
  },
  {
    title: 'Reaxys',
    accessURLs: [
      'https://auth.elsevier.com/ShibAuth/institutionLogin?entityID=https://{idp_domain}/idp/shibboleth&appReturnURL=https%3A%2F%2Fwww.reaxys.com%2Fservices%2Foauth%2Fshibboleth-sso',
    ],
  },
  {
    title: 'Royal Society of Chemistry',
    accessURLs: [
      'https://www.rsc.org/rsc-id/account/checkfederatedaccess?instituteurl=https%3A%2F%2F{idp_domain}%2Fidp%2Fshibboleth&returnurl=https%3A%2F%2Fpubs.rsc.org',
    ],
  },
  {
    title: 'ScienceDirect',
    accessURLs: [
      'https://auth.elsevier.com/ShibAuth/institutionLogin?entityID=https%3A%2F%2F{idp_domain}%2Fidp%2Fshibboleth&appReturnURL=https%3A%2F%2Fwww.sciencedirect.com%2Fuser%2Frouter%2Fshib%3FtargetURL%3Dhttps%253A%252F%252Fwww.sciencedirect.com%252F',
    ],
  },
  {
    title: 'Scival',
    accessURLs: [
      'https://auth.elsevier.com/ShibAuth/institutionLogin?entityID=https%3A%2F%2F{idp_domain}%2Fidp%2Fshibboleth&appReturnURL=http%3A%2F%2Fwww.scival.com%2F',
    ],
  },
  {
    title: 'Scopus',
    accessURLs: [
      'https://auth.elsevier.com/ShibAuth/institutionLogin?entityID=https%3A%2F%2F{idp_domain}%2Fidp%2Fshibboleth&appReturnURL=https%3A%2F%2Fwww.scopus.com%2F',
    ],
  },
  {
    title: 'Springer Link',
    accessURLs: [
      'https://fsso.springer.com/federation/init?entityId=https%3A%2F%2F{idp_domain}%2Fidp%2Fshibboleth&returnUrl=https%3A%2F%2Flink.springer.com%2F',
    ],
  },
  {
    title: 'SpringerMaterials',
    accessURLs: [
      'https://fsso.springer.com/federation/init?entityId=https%3A%2F%2F{idp_domain}%2Fidp%2Fshibboleth&returnUrl=https%3A%2F%2Fmaterials.springer.com%2F',
    ],
  },
  {
    title: 'Web of Science',
    accessURLs: [
      'https://www.webofknowledge.com/?auth=ShibbolethIdPForm&entityID=https%3A%2F%2F{idp_domain}%2Fidp%2Fshibboleth&target=https%253A%252F%252Fwww.webofknowledge.com%252F%253FDestApp%253DUA&ShibFederation=ChineseFederation&DestApp=UA',
    ],
  },
  {
    title: 'CNKI',
    accessURLs: [
      'https://fsso.cnki.net/Shibboleth.sso/Login?entityID=https://{idp_domain}/idp/shibboleth&target=https://fsso.cnki.net/secure/default.aspx',
    ],
  },
  {
    title: 'JoVE',
    accessURLs: [
      'https://www.jove.com/Shibboleth.sso/Login?entityID=https://{idp_domain}/idp/shibboleth&target=https%3A%2F%2Fwww.jove.com%2Fshibboleth%2Fwayf_login.php%3Freturn_page=http://www.jove.com/',
    ],
  },
  {
    title: 'Embase',
    accessURLs: [
      'https://auth.elsevier.com/ShibAuth/institutionLogin?entityID=https%3A%2F%2F{idp_domain}%2Fidp%2Fshibboleth&appReturnURL=http%3A%2F%2Fwww.embase.com%2Fcustomer%2Fauthenticate%3Fauth_type%3DSHIBBOLETH',
    ],
  },
  {
    title: 'OVID',
    accessURLs: [
      'https://openathens.ovid.com/secure-ssl/home.oa?idpselect=https://{idp_domain}/idp/shibboleth&entityID=https://{idp_domain}/idp/shibboleth&T=JS&CSC=y&PAGE=dblist&NEW',
    ],
  },
  {
    title: 'Wiley',
    accessURLs: [
      'https://onlinelibrary.wiley.com/action/ssostart?idp=https://{idp_domain}/idp/shibboleth&redirectUri=https://onlinelibrary.wiley.com/',
    ],
  },
];
