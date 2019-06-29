import { IMixerProtocol } from '../MixerProtocolPresets';

export const MidasMaster: IMixerProtocol = {
    protocol: 'OSC',
    label: 'Midas M32 / Behringer X32 Master Mode',
    mode: "master", //master (ignores mixers faderlevel, and use faderlevel as gain preset),
                    //client (use feedback from mixers fader level)
    leadingZeros: true,
    pingCommand: [
        {
            mixerMessage: "/xremote",
            value: 0,
            type: "f",
            min: 0,
            max: 1, zero: 0.75
        },
        {
            mixerMessage: "/meters",
            value: "/meters/1",
            type: "s",
            min: 0,
            max: 1, zero: 0.75
        }
    ],
    pingTime: 9500,
    initializeCommands: [
        {
            mixerMessage: '/ch/{channel}/mix/fader',
            value: "",
            type: "s",
            min: 0,
            max: 1,
            zero: 0.75
        },
        {
            mixerMessage: '/ch/{channel}/config/name',
            value: "",
            type: "s",
            min: 0,
            max: 1,
            zero: 0.75
        }
    ],
    channelTypes: [{
        channelTypeName: 'CH',
        channelTypeColor: '#2f2f2f',
        fromMixer: {
            CHANNEL_FADER_LEVEL: [{ mixerMessage: 'none', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],        //'none' ignores this command
            CHANNEL_OUT_GAIN: [{ mixerMessage: '/ch/{channel}/mix/fader', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],
            CHANNEL_VU: [{ mixerMessage: '/meters/1', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],
            CHANNEL_NAME: [{ mixerMessage: '/ch/{channel}/config/name', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],
            PFL: [{ mixerMessage: 'none', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],
            AUX_SEND: [{ mixerMessage: 'none', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],
        },
        toMixer: {
            CHANNEL_FADER_LEVEL: [{ mixerMessage: 'none', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],
            CHANNEL_OUT_GAIN: [{ mixerMessage: '/ch/{channel}/mix/fader', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],
            CHANNEL_NAME: [{ mixerMessage: '/ch/{channel}/config/name', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],
            PFL_ON: [{
                mixerMessage: "/not_in_use",
                value: 0,
                type: "f",
                min: 0,
                max: 1,
                zero: 0.75
            }],
            PFL_OFF: [{
                mixerMessage: "/not_in_use",
                value: 0,
                type: "f",
                min: 0,
                max: 1,
                zero: 0.75
            }],
            AUX_SEND: [{ mixerMessage: 'none', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],
        },
    }],
    fader: {
        min: 0,
        max: 1,
        zero: 0.75,
        step: 0.01,
    },
    meter: {
        min: 0,
        max: 1,
        zero: 0.75,
        test: 0.6,
    },
}
