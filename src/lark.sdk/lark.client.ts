import * as lark from '@larksuiteoapi/node-sdk';

const client = new lark.Client({
  appId: 'app id',
  appSecret: 'app secret',
  appType: lark.AppType.SelfBuild,
  domain: lark.Domain.Feishu,
});

export default client;
