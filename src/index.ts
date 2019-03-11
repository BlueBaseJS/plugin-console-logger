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
      console.group("%cBlueBase", "background-image: url('../assets/common/logo.png') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      console.log(message, 'background: green; color: white; display: block;');
      console.log( "Params: ", params);
      console.log("BB: ", BB);
      console.groupEnd();
    },
    'bluebase.logger.info': (message: string, { params }: any, BB: BlueBase) => {
      console.group("%cBlueBase", "background-image: url('https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LPjsIbS1DfhqT8BS3Ui%2Favatar.png?generation=1540566320738340&alt=media') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      console.info(message);
      console.info( "Params: ", params);
      console.info("BB: ", BB);
      console.groupEnd();
    },
    'bluebase.logger.debug': (message: string, { params }: any, BB: BlueBase) => {
      console.group("%cBlueBase", "background-image: url('https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LPjsIbS1DfhqT8BS3Ui%2Favatar.png?generation=1540566320738340&alt=media') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      console.debug(message);
      console.debug( "Params: ", params);
      console.debug("BB: ", BB);
      console.groupEnd();
    },
    'bluebase.logger.warn': (message: string, { params }: any, BB: BlueBase) => {
      console.group("%cBlueBase", "background-image: url('https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LPjsIbS1DfhqT8BS3Ui%2Favatar.png?generation=1540566320738340&alt=media') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      console.warn(message);
      console.warn( "Params: ", params);
      console.warn("BB: ",BB);
      console.groupEnd();
      return message;
    },
    'bluebase.logger.error': (message: string, { params }: any, BB: BlueBase) => {
      console.group("%cBlueBase", "background-image: url('https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LPjsIbS1DfhqT8BS3Ui%2Favatar.png?generation=1540566320738340&alt=media') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      console.error(message);
      console.error( "Params: ", params);
      console.error("BB: ", BB);
      console.groupEnd();
    }
  }
});