export const login = async (routerClient) => {
  const authUrl = await routerClient.kindeClient.login(
    routerClient.sessionManager,
    {
      authUrlParams: Object.fromEntries(routerClient.searchParams)
    }
  );

  const postLoginRedirectURL = routerClient.getSearchParam(
    'post_login_redirect_url'
  );

  if (postLoginRedirectURL) {
    await routerClient.sessionManager.setSessionItem(
      'post_login_redirect_url',
      postLoginRedirectURL
    );
  }

  routerClient.redirect(authUrl);
};
