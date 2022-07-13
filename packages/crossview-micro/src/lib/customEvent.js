// dispatch custom event
export const dispatchCustomEvent = (hostTarget = window, eventName, eventProps = { bubbles : true }) => {
    const event = new CustomEvent( eventName, { ...eventProps } );
    hostTarget.dispatchEvent(event);
};

