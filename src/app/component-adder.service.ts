import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  vewReference: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }

  setViewReference(vewRef) {
    this.vewReference = vewRef;
  }

  addComponent(componentToAdd: any): any {
    console.log('add from add serve called');
    //Entry components will have a factory created and resgistered in resolver
    const factory = this.resolver.resolveComponentFactory(componentToAdd);

    //Access the viewReference's Injector of insert the component
    const componentReference = factory.create(this.vewReference.parentInjector);

    console.log(this.vewReference.parentInjector);

    //insert the hostview of the component
    this.vewReference.insert(componentReference.hostView);

    return componentReference;

  }

  remove(){
    console.log('remove from add serve called');
    this.vewReference.detach();
  }
}
