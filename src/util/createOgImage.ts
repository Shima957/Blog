import base64url from 'base64url';

export const createOgImage = (baseImageUrl: string, title: string) => {
  const ogImageUrl = `${baseImageUrl}?w=1200&h=1200&blend64=${base64url(
    `https://assets.imgix.net/~text?txtsize=64&txt-color=000000&w=1120&txt-align=center&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt64=${base64url(
      title
    )}`
  )}&blend-mode=normal&blend-align=top,left&blend-x=80&blend-y=180`;

  return { ogImageUrl };
};
