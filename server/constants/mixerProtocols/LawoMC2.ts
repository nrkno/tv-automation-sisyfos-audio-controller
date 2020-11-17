import { IMixerProtocol, emptyMixerMessage } from '../MixerProtocolInterface'

export const LawoMC2: IMixerProtocol = {
    protocol: 'EMBER',
    label: 'Lawo MC2',
    presetFileExtension: '',
    loadPresetCommand: [emptyMixerMessage()],
    FADE_DISPATCH_RESOLUTION: 5,
    leadingZeros: false, //some OSC protocols needs channels to be 01, 02 etc.
    pingCommand: [emptyMixerMessage()],
    pingResponseCommand: [emptyMixerMessage()],
    pingTime: 0, //Bypass ping when pingTime is zero
    initializeCommands: [emptyMixerMessage()],
    channelTypes: [
        {
            channelTypeName: 'CH',
            channelTypeColor: '#2f2f2f',
            fromMixer: {
                CHANNEL_OUT_GAIN: [
                    {
                        mixerMessage:
                            'Channels.Inputs.${channel}.Fader.Fader Level',
                        value: 0,
                        type: 'real',
                        min: -128,
                        max: 12,
                        zero: 0,
                    },
                ],
                CHANNEL_NAME: [
                    {
                        mixerMessage:
                            'Channels.Inputs.${channel}.General.User Label',
                        value: 0,
                        type: 'real',
                        min: -200,
                        max: 20,
                        zero: 0,
                    },
                ],
                CHANNEL_INPUT_GAIN: [
                    {
                        mixerMessage:
                            'Channels.Inputs.${channel}.Signal Processing.Input Mixer.Input Gain',
                        value: 0,
                        type: 'int',
                        min: -128,
                        max: 12,
                        zero: 0,
                        maxLabel: 12,
                        minLabel: -128,
                    },
                ],
                CHANNEL_INPUT_SELECTOR: [
                    {
                        mixerMessage:
                            'Channels.Inputs.${channel}.Signal Processing.Input Mixer.Input Left to Both',
                        value: 0,
                        type: 'bool',
                        label: 'LR',
                    },
                    {
                        mixerMessage:
                            'Channels.Inputs.${channel}.Signal Processing.Input Mixer.Input Left to Both',
                        value: true,
                        type: 'bool',
                        label: 'LL',
                    },
                    {
                        mixerMessage:
                            'Channels.Inputs.${channel}.Signal Processing.Input Mixer.Input Right to Both',
                        value: true,
                        type: 'bool',
                        label: 'RR',
                    },
                ],
                PFL: [
                    {
                        mixerMessage: 'Channels.Inputs.${channel}.Listen.PFL',
                        value: 0,
                        type: 'boolean',
                        min: -128,
                        max: 12,
                        zero: 0,
                    },
                ],
                CHANNEL_AMIX: [
                    {
                        mixerMessage:
                            'Channels.Inputs.${channel}.Automix.Automix Active',
                        value: false,
                        type: 'boolean',
                        min: -128,
                        max: 12,
                        zero: 0,
                    },
                ],
            },
            toMixer: {
                CHANNEL_OUT_GAIN: [
                    {
                        mixerMessage:
                            'Channels.Inputs.${channel}.Fader.Fader Level',
                        value: 0,
                        type: 'real',
                        min: -128,
                        max: 12,
                        zero: 0,
                    },
                ],
                CHANNEL_INPUT_GAIN: [
                    {
                        mixerMessage:
                            'Channels.Inputs.${channel}.Signal Processing.Digital Amplifier.DigiAmp Level',
                        value: 0,
                        type: 'int',
                        min: -128,
                        max: 12,
                        zero: 0,
                        maxLabel: 12,
                        minLabel: -128,
                    },
                ],
                CHANNEL_INPUT_SELECTOR: [
                    {
                        mixerMessage:
                            'Channels.Inputs.${channel}.Signal Processing.Input Mixer.Input Left to Both',
                        value: 0,
                        type: 'bool',
                        label: 'LR',
                    },
                    {
                        mixerMessage:
                            'Channels.Inputs.${channel}.Signal Processing.Input Mixer.Input Left to Both',
                        value: 1,
                        type: 'bool',
                        label: 'LL',
                    },
                    {
                        mixerMessage:
                            'Channels.Inputs.${channel}.Signal Processing.Input Mixer.Input Right to Both',
                        value: 1,
                        type: 'bool',
                        label: 'RR',
                    },
                ],
                PFL_ON: [
                    {
                        mixerMessage: 'Channels.Inputs.${channel}.Listen.PFL',
                        value: true,
                        type: 'boolean',
                        min: -128,
                        max: 12,
                        zero: 0,
                    },
                ],
                PFL_OFF: [
                    {
                        mixerMessage: 'Channels.Inputs.${channel}.Listen.PFL',
                        value: false,
                        type: 'boolean',
                        min: -128,
                        max: 12,
                        zero: 0,
                    },
                ],
                CHANNEL_AMIX: [
                    {
                        mixerMessage:
                            'Channels.Inputs.${channel}.Automix.Automix Active',
                        value: false,
                        type: 'boolean',
                        min: -128,
                        max: 12,
                        zero: 0,
                    },
                ],
            },
        },
    ],
    fader: {
        min: 0,
        max: 1,
        zero: 0.75,
        step: 10,
    },
    meter: {
        min: 0,
        max: 1,
        zero: 0.75,
        test: 0.6,
    },
}
