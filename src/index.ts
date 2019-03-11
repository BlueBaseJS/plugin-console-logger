import { createPlugin, BootOptions, BlueBase } from '@bluebase/core';

export const LoggerPlugin = createPlugin({

  key: 'logger',
  name: 'Logger Plugin',
  discription: 'This plugin console the value',
  categories: ['logging'],

  filters: {
    'bluebase.boot.end': (_bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
      BB.Logger.log('Asad');
    },
    'bluebase.logger.log': (message: string, { params }: any, BB: BlueBase) => {
      console.group("%cBlueBase", "background-image: url('https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LPjsIbS1DfhqT8BS3Ui%2Favatar.png?generation=1540566320738340&alt=media') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      console.log(message);
      console.log(params);
      console.log(BB);
      console.groupEnd();
    },
    'bluebase.logger.info': (message: string, { params }: any, BB: BlueBase) => {
      console.group("%cBlueBase", "background-image: url('https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LPjsIbS1DfhqT8BS3Ui%2Favatar.png?generation=1540566320738340&alt=media') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      console.info(message);
      console.info(params);
      console.info(BB);
      console.groupEnd();
    },
    'bluebase.logger.debug': (message: string, { params }: any, BB: BlueBase) => {
      console.group("%cBlueBase", "background-image: url('https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LPjsIbS1DfhqT8BS3Ui%2Favatar.png?generation=1540566320738340&alt=media') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      console.debug(message);
      console.debug(params);
      console.debug(BB);
      console.groupEnd();
    },
    // 'bluebase.logger.warn': (message: string, { params }: any, BB: BlueBase) => {
      // console.group("%cBlueBase", "background-image: url('https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LPjsIbS1DfhqT8BS3Ui%2Favatar.png?generation=1540566320738340&alt=media') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      // console.warn(message);
      // console.warn(params);
      // console.warn(BB);
      // console.groupEnd();
    // },
    'bluebase.logger.error': (message: string, { params }: any, BB: BlueBase) => {
      console.group("%cBlueBase", "background-image: url('https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LPjsIbS1DfhqT8BS3Ui%2Favatar.png?generation=1540566320738340&alt=media') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      console.error(message);
      console.error(params);
      console.error(BB);
      console.groupEnd();
    }
  }
});