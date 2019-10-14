import { IMixerProtocol, emptyMixerMessage } from '../MixerProtocolInterface';

export const SSLSystemT: IMixerProtocol = {
    protocol: 'SSL',
    label: 'SSL System T',
    mode: "master", //master (ignores mixers faderlevel, and use faderlevel as gain preset),
                    //client (use feedback from mixers fader level)
    leadingZeros: false,
    pingCommand: [emptyMixerMessage()],
    pingTime: 0,
    initializeCommands: [{ mixerMessage: "f1 04 00 80 00 00 {channel}", value: 0, type: '', min: 0, max: 1, zero: 0.75}],
    channelTypes: [{
        channelTypeName: 'CH',
        channelTypeColor: '#2f2f2f',
        fromMixer: {
            CHANNEL_FADER_LEVEL: [emptyMixerMessage()],        //PgmChange 0 - ignores this command
            CHANNEL_OUT_GAIN: [{ mixerMessage: 'f1 06 ff 80 00 00 {channel} {level}', value: 0, type: '', min: 0, max: 1, zero: 0.75}],            //PgmChange 0 - ignores this command
            CHANNEL_VU: [{ mixerMessage: "0", value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],                   //PgmChange 0 - ignores this command
            CHANNEL_NAME: [emptyMixerMessage()],
            PFL: [emptyMixerMessage()],
            AUX_SEND: [emptyMixerMessage()],
        },
        toMixer: {
            CHANNEL_FADER_LEVEL: [emptyMixerMessage()],
            CHANNEL_OUT_GAIN: [{ mixerMessage: "f1 06 00 80 00 {channel} {level}", value: 0, type: '', min: 0, max: 1, zero: 0.75}],
            CHANNEL_NAME: [emptyMixerMessage()],
            PFL_ON: [{ mixerMessage: "f1 05 00 80 05 {channel} 01", value: 0, type: '', min: 0, max: 1, zero: 0.75}],
            PFL_OFF: [{ mixerMessage: "f1 05 00 80 05 {channel} 00", value: 0, type: '', min: 0, max: 1, zero: 0.75}],
            AUX_SEND: [{ mixerMessage: "f1 06 00 80 00 {channel} {level}", value: 0, type: '', min: 0, max: 1, zero: 0.75}],
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