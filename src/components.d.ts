/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppForms {
    }
    interface AppHome {
    }
    interface AppListobservations {
    }
    interface AppProfile {
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppFormsElement extends Components.AppForms, HTMLStencilElement {
    }
    var HTMLAppFormsElement: {
        prototype: HTMLAppFormsElement;
        new (): HTMLAppFormsElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppListobservationsElement extends Components.AppListobservations, HTMLStencilElement {
    }
    var HTMLAppListobservationsElement: {
        prototype: HTMLAppListobservationsElement;
        new (): HTMLAppListobservationsElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-forms": HTMLAppFormsElement;
        "app-home": HTMLAppHomeElement;
        "app-listobservations": HTMLAppListobservationsElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppForms {
    }
    interface AppHome {
    }
    interface AppListobservations {
    }
    interface AppProfile {
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-forms": AppForms;
        "app-home": AppHome;
        "app-listobservations": AppListobservations;
        "app-profile": AppProfile;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-forms": LocalJSX.AppForms & JSXBase.HTMLAttributes<HTMLAppFormsElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-listobservations": LocalJSX.AppListobservations & JSXBase.HTMLAttributes<HTMLAppListobservationsElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}