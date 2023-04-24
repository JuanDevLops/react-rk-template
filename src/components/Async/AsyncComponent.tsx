import React, { PureComponent } from 'react';

export default class AsyncComponent extends PureComponent {
  constructor(props : any) {
    super(props);

    this.state = {
      Component: null
    }
  }

   props: any;

  componentWillMount() {
let state: any = this.state;
let props: any = this.props;

//Will not reload again
    if(!state.ComponentLazy) {
    
 props.moduleProvider().then( ({ComponentLazy} : any) => this.setState({ ComponentLazy }));
    }
  }

  render() {
    const { ComponentLazy } : any = this.state;

    //The magic happens here!
    return (
      <>
        {ComponentLazy ? <ComponentLazy /> : <div>Carregando</div>}
      </>
    );
  }
};