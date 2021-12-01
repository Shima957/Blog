export const isDraft = (arg: any): arg is { draftKey: string } =>
  !!(arg?.draftKey && typeof arg.draftKey === 'string')
