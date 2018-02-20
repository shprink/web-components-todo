import { emit, withComponent } from "skatejs/dist/esnext";
import withRenderer from "@skatejs/renderer-lit-html/dist/esnext";

// Mixin for auto-defining functions that emit events.
const withEvents = (Base = HTMLElement) =>
  class extends Base {
    // Since observedAttributes are called only once, we can use that as a hook
    // to do any one-time setup we need upon definition.
    static get observedAttributes() {
      (this.events || []).forEach(e => {
        const name = `on${e[0].toUpperCase() + e.substring(1)}`;

        // Allows the following for the consumer:
        //
        // - elem.onEvent = fn
        // - elem.addEventListener('event', fn)
        //
        // Allows the following for the author:
        //
        // - this.onEvent(detail)
        Object.defineProperty(this.prototype, name, {
          get() {
            if (!this.__events[e]) {
              this[name] = () => {};
            }
            return this.__events[e];
          },
          set(fn) {
            this.__events[e] = detail => {
              fn(detail);
              emit(this, e, { detail });
            };
            if (this.triggerUpdate) {
              this.triggerUpdate();
            }
          }
        });
      });
      return super.observedAttributes;
    }
    __events = {};
  };

// We must mixin in this order because withComponent() doesn't yet call super
// on observedAttributes. This means that observedAttributes from the
// withEvents() mixin wouldn't get called. This will be fixed in the next
// version of Skate.
export const Component = withEvents(withComponent(withRenderer()));
