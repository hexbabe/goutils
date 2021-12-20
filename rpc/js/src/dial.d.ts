import { grpc } from "@improbable-eng/grpc-web";
export interface DialOptions {
    authEntity?: string;
    credentials?: Credentials;
    webrtcOptions?: DialWebRTCOptions;
    externalAuthAddress?: string;
}
export interface DialWebRTCOptions {
    disableTrickleICE: boolean;
    rtcConfig?: RTCConfiguration;
}
export interface Credentials {
    type: string;
    payload: string;
}
export declare function dialDirect(address: string, opts?: DialOptions): Promise<grpc.TransportFactory>;
interface WebRTCConnection {
    transportFactory: grpc.TransportFactory;
    peerConnection: RTCPeerConnection;
}
export declare function dialWebRTC(signalingAddress: string, host: string, opts?: DialOptions): Promise<WebRTCConnection>;
export {};
