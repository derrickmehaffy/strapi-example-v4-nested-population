import type { Schema, Attribute } from '@strapi/strapi';

export interface TestOtherCompo extends Schema.Component {
  collectionName: 'components_test_other_compos';
  info: {
    displayName: 'otherCompo';
    icon: 'apps';
  };
  attributes: {
    string: Attribute.String;
  };
}

export interface TestTestCompo extends Schema.Component {
  collectionName: 'components_test_test_compos';
  info: {
    displayName: 'testCompo';
    icon: 'alien';
  };
  attributes: {
    string: Attribute.String;
    photo: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test.other-compo': TestOtherCompo;
      'test.test-compo': TestTestCompo;
    }
  }
}
