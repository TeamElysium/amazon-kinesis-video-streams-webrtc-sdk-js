/**
 * Validates that the given value is not null, undefined, or empty string and throws an error if the condition is not met.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateValueNonNil(value: any, valueName: string): void {
    if (value === null) {
        throw new Error(`${valueName} cannot be null`);
    } else if (value === undefined) {
        throw new Error(`${valueName} cannot be undefined`);
    } else if (value === '') {
        throw new Error(`${valueName} cannot be empty`);
    }
}

/**
 * Validates that the given value is null, undefined, or empty string and throws an error if the condition is not met.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateValueNil(value: any, valueName: string): void {
    if (value !== null && value !== undefined && value !== '') {
        throw new Error(`${valueName} should be null`);
    }
}

// Temporary functions; Returns its init, json format.

export function toJSONSdp(desc: RTCSessionDescription) {
    if (typeof desc.toJSON === 'function') {
        return desc.toJSON();
    }

    const { sdp, type } = desc;

    const init: RTCSessionDescriptionInit = {
        sdp,
        type,
    };

    return init;
}

export function toJSONIceCandidate(iceCandidate: RTCIceCandidate) {
    if (typeof iceCandidate.toJSON === 'function') {
        return iceCandidate.toJSON();
    }

    const { candidate, sdpMLineIndex, sdpMid, usernameFragment } = iceCandidate;

    const init: RTCIceCandidateInit = {
        candidate,
        sdpMLineIndex,
        sdpMid,
        usernameFragment,
    };

    return init;
}
