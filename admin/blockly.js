'use strict';

goog.provide('Blockly.JavaScript.Sendto');

goog.require('Blockly.JavaScript');

// just to remove warning in webstorm
if (typeof systemLang === 'undefined') {
    var systemLang = 'en';
}

// --- SendTo pushsafer --------------------------------------------------
Blockly.Words['pushsafer']               = {'en': 'pushsafer',                   'de': 'pushsafer',                          'ru': 'pushsafer'};
Blockly.Words['pushsafer_message']       = {'en': 'message',                     'de': 'Meldung',                            'ru': 'сообщение'};
Blockly.Words['pushsafer_title']         = {'en': 'title (optional)',            'de': 'Betreff (optional)',                 'ru': 'заголовок (не обяз.)'};
Blockly.Words['pushsafer_sound']         = {'en': 'sound',                       'de': 'Klang',                              'ru': 'звук'};
Blockly.Words['pushsafer_vibration']     = {'en': 'vibration',                   'de': 'Vibration',                          'ru': 'виброзвонок'};
Blockly.Words['pushsafer_url']           = {'en': 'URL (optional)',              'de': 'URL (optional)',                     'ru': 'URL (не обяз.)'};
Blockly.Words['pushsafer_url_title']     = {'en': 'URL title (optional)',        'de': 'URL Betreff (optional)',             'ru': 'заголовок для URL (не обяз.)'};
Blockly.Words['pushsafer_device']        = {'en': 'device ID (optional)',        'de': 'Gerät ID (optional)',                'ru': 'ID устройства (не обяз.)'};
Blockly.Words['pushsafer_timestamp']     = {'en': 'time in ms (optional)',       'de': 'Zeit in ms (optional)',              'ru': 'время в мс (не обяз.)'};

Blockly.Words['pushsafer_icon']          = {'en': 'Icon number (optional)',      'de': 'Bildnummer (optional)',              'ru': 'Номер иконки (не обяз.)'};
Blockly.Words['pushsafer_filename']      = {'en': 'Picture path (optional)',     'de': 'Bildpfad (optional)',                'ru': 'Путь к картинке (не обяз.)'};

Blockly.Words['pushsafer_vibration_']    = {'en': 'default',                     'de': 'normal',                             'ru': 'по умолчанию'};
Blockly.Words['pushsafer_vibration_1']   = {'en': '1',                           'de': '1',                                  'ru': '1'};
Blockly.Words['pushsafer_vibration_2']   = {'en': '2',                           'de': '2',                                  'ru': '2'};
Blockly.Words['pushsafer_vibration_3']   = {'en': '3',                           'de': '3',                                  'ru': '3'};

Blockly.Words['pushsafer_log']           = {'en': 'log level',                   'de': 'Loglevel',                           'ru': 'Протокол'};
Blockly.Words['pushsafer_log_none']      = {'en': 'none',                        'de': 'keins',                              'ru': 'нет'};
Blockly.Words['pushsafer_log_info']      = {'en': 'info',                        'de': 'info',                               'ru': 'инфо'};
Blockly.Words['pushsafer_log_debug']     = {'en': 'debug',                       'de': 'debug',                              'ru': 'debug'};
Blockly.Words['pushsafer_log_warn']      = {'en': 'warning',                     'de': 'warning',                            'ru': 'warning'};
Blockly.Words['pushsafer_log_error']     = {'en': 'error',                       'de': 'error',                              'ru': 'ошибка'};

Blockly.Words['pushsafer_sound_']        = {'ru': 'Device Default' , 'en': 'Device Default' , 'de': 'Gerätestandard'};
Blockly.Words['pushsafer_sound_0']       = {'ru': 'silent' , 'en': 'silent' , 'de': 'lautlos'};
Blockly.Words['pushsafer_sound_1']       = {'ru': 'Ahem (IM)' , 'en': 'Ahem (IM)' , 'de': 'Ahem (IM)'};
Blockly.Words['pushsafer_sound_2']       = {'ru': 'Applause (Mail)' , 'en': 'Applause (Mail)' , 'de': 'Applaus (Mail)'};
Blockly.Words['pushsafer_sound_3']       = {'ru': 'Arrow (Reminder)' , 'en': 'Arrow (Reminder)' , 'de': 'Pfeil (Reminder)'};
Blockly.Words['pushsafer_sound_4']       = {'ru': 'Baby (SMS)' , 'en': 'Baby (SMS)' , 'de': 'Baby (SMS)'};
Blockly.Words['pushsafer_sound_5']       = {'ru': 'Bell (Alarm)' , 'en': 'Bell (Alarm)' , 'de': 'Glocke (Alarm)'};
Blockly.Words['pushsafer_sound_6']       = {'ru': 'Bicycle (Alarm2)' , 'en': 'Bicycle (Alarm2)' , 'de': 'Fahrradklingel (Alarm2)'};
Blockly.Words['pushsafer_sound_7']       = {'ru': 'Boing (Alarm3)' , 'en': 'Boing (Alarm3)' , 'de': 'Boing (Alarm3)'};
Blockly.Words['pushsafer_sound_8']       = {'ru': 'Buzzer (Alarm4)' , 'en': 'Buzzer (Alarm4)' , 'de': 'Buzzer (Alarm4)'};
Blockly.Words['pushsafer_sound_9']       = {'ru': 'Camera (Alarm5)' , 'en': 'Camera (Alarm5)' , 'de': 'Kamera (Alarm5)'};
Blockly.Words['pushsafer_sound_10']      = {'ru': 'Car Horn (Alarm6)' , 'en': 'Car Horn (Alarm6)' , 'de': 'Auto Hupe (Alarm6)'};
Blockly.Words['pushsafer_sound_11']      = {'ru': 'Cash Register (Alarm7)' , 'en': 'Cash Register (Alarm7)' , 'de': 'Registrierkasse (Alarm7)'};
Blockly.Words['pushsafer_sound_12']      = {'ru': 'Chime (Alarm8)' , 'en': 'Chime (Alarm8)' , 'de': 'Glockenspiel (Alarm8)'};
Blockly.Words['pushsafer_sound_13']      = {'ru': 'Creaky Door (Alarm9)' , 'en': 'Creaky Door (Alarm9)' , 'de': 'Knarrende Tür (Alarm9)'};
Blockly.Words['pushsafer_sound_14']      = {'ru': 'Cuckoo Clock (Alarm10)' , 'en': 'Cuckoo Clock (Alarm10)' , 'de': 'Kuckucksuhr (Alarm10)'};
Blockly.Words['pushsafer_sound_15']      = {'ru': 'Disconnect (Call)' , 'en': 'Disconnect (Call)' , 'de': 'Verbindung trennen (Call)'};
Blockly.Words['pushsafer_sound_16']      = {'ru': 'Dog (Call2)' , 'en': 'Dog (Call2)' , 'de': 'Hund (Call2)'};
Blockly.Words['pushsafer_sound_17']      = {'ru': 'Doorbell (Call3)' , 'en': 'Doorbell (Call3)' , 'de': 'Türklingel (Call3)'};
Blockly.Words['pushsafer_sound_18']      = {'ru': 'Fanfare (Call4)' , 'en': 'Fanfare (Call4)' , 'de': 'Fanfare (Call4)'};
Blockly.Words['pushsafer_sound_19']      = {'ru': 'Gun Shot (Call5)' , 'en': 'Gun Shot (Call5)' , 'de': 'Pistole (Call5)'};
Blockly.Words['pushsafer_sound_20']      = {'ru': 'Honk (Call6)' , 'en': 'Honk (Call6)' , 'de': 'Hupen (Call6)'};
Blockly.Words['pushsafer_sound_21']      = {'ru': 'Jaw Harp (Call7)' , 'en': 'Jaw Harp (Call7)' , 'de': 'Maultrommel (Call7)'};
Blockly.Words['pushsafer_sound_22']      = {'ru': 'Morse (Call8)' , 'en': 'Morse (Call8)' , 'de': 'Morsen (Call8)'};
Blockly.Words['pushsafer_sound_23']      = {'ru': 'Electricity (Call9)' , 'en': 'Electricity (Call9)' , 'de': 'Elektrizität (Call9)'};
Blockly.Words['pushsafer_sound_24']      = {'ru': 'Radio Tuner (Call10)' , 'en': 'Radio Tuner (Call10)' , 'de': 'Radio Tuner (Call10)'};
Blockly.Words['pushsafer_sound_25']      = {'ru': 'Sirens' , 'en': 'Sirens' , 'de': 'Sirene'};
Blockly.Words['pushsafer_sound_26']      = {'ru': 'Military Trumpets' , 'en': 'Military Trumpets' , 'de': 'Militär Trompeten'};
Blockly.Words['pushsafer_sound_27']      = {'ru': 'Ufo' , 'en': 'Ufo' , 'de': 'Ufo'};
Blockly.Words['pushsafer_sound_28']      = {'ru': 'Whah Whah Whah' , 'en': 'Whah Whah Whah' , 'de': 'Whah Whah Whah'};

Blockly.Words['pushsafer_anyInstance']   = {'en': 'all instances',               'de': 'Alle Instanzen',                     'ru': 'На все драйвера'};
Blockly.Words['pushsafer_tooltip']       = {'en': 'Send message to telegram',    'de': 'Sende eine Meldung über Telegram',   'ru': 'Послать сообщение через Pushover'};
Blockly.Words['pushsafer_help']          = {'en': 'https://github.com/ioBroker/ioBroker.pushsafer/blob/master/README.md', 'de': 'https://github.com/ioBroker/ioBroker.pushsafer/blob/master/README.md', 'ru': 'https://github.com/ioBroker/ioBroker.pushsafer/blob/master/README.md'};

Blockly.Sendto.blocks['pushsafer'] =
    '<block type="pushsafer">'
    + '     <value name="INSTANCE">'
    + '     </value>'
    + '     <value name="MESSAGE">'
    + '         <shadow type="text">'
    + '             <field name="TEXT">text</field>'
    + '         </shadow>'
    + '     </value>'
    + '     <value name="TITLE">'
    + '     </value>'
    + '     <value name="SOUND">'
    + '     </value>'
    + '     <value name="ICON">'
    + '     </value>'
    + '     <value name="URL">'
    + '     </value>'
    + '     <value name="URL_TITLE">'
    + '     </value>'
    + '     <value name="DEVICE">'
    + '     </value>'
    + '     <value name="VIBRATION">'
    + '     </value>'
    + '     <value name="PICTURE">'
    + '     </value>'
    + '     <value name="LOG">'
    + '     </value>'
    + '</block>';

Blockly.Blocks['pushsafer'] = {
    init: function() {
        this.appendDummyInput('INSTANCE')
            .appendField(Blockly.Words['pushsafer'][systemLang])
            .appendField(new Blockly.FieldDropdown([[Blockly.Words['pushsafer_anyInstance'][systemLang], ''], ['pushsafer.0', '.0'], ["pushsafer.1", ".1"], ["pushsafer.2", ".2"], ["pushsafer.3", ".3"], ["pushsafer.4", ".4"]]), "INSTANCE");

        this.appendValueInput('MESSAGE')
            .appendField(Blockly.Words['pushsafer_message'][systemLang]);

        this.appendDummyInput('SOUND')
            .appendField(Blockly.Words['pushsafer_sound'][systemLang])
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Words['pushsafer_sound_'][systemLang],    ''],
                [Blockly.Words['pushsafer_sound_0'][systemLang] , '0'],
                [Blockly.Words['pushsafer_sound_1'][systemLang] , '1'],
                [Blockly.Words['pushsafer_sound_2'][systemLang] , '2'],
                [Blockly.Words['pushsafer_sound_3'][systemLang] , '3'],
                [Blockly.Words['pushsafer_sound_4'][systemLang] , '4'],
                [Blockly.Words['pushsafer_sound_5'][systemLang] , '5'],
                [Blockly.Words['pushsafer_sound_6'][systemLang] , '6'],
                [Blockly.Words['pushsafer_sound_7'][systemLang] , '7'],
                [Blockly.Words['pushsafer_sound_8'][systemLang] , '8'],
                [Blockly.Words['pushsafer_sound_9'][systemLang] , '9'],
                [Blockly.Words['pushsafer_sound_10'][systemLang], '10'],
                [Blockly.Words['pushsafer_sound_11'][systemLang], '11'],
                [Blockly.Words['pushsafer_sound_12'][systemLang], '12'],
                [Blockly.Words['pushsafer_sound_13'][systemLang], '13'],
                [Blockly.Words['pushsafer_sound_14'][systemLang], '14'],
                [Blockly.Words['pushsafer_sound_15'][systemLang], '15'],
                [Blockly.Words['pushsafer_sound_16'][systemLang], '16'],
                [Blockly.Words['pushsafer_sound_17'][systemLang], '17'],
                [Blockly.Words['pushsafer_sound_18'][systemLang], '18'],
                [Blockly.Words['pushsafer_sound_19'][systemLang], '19'],
                [Blockly.Words['pushsafer_sound_20'][systemLang], '20'],
                [Blockly.Words['pushsafer_sound_21'][systemLang], '21'],
                [Blockly.Words['pushsafer_sound_22'][systemLang], '22'],
                [Blockly.Words['pushsafer_sound_23'][systemLang], '23'],
                [Blockly.Words['pushsafer_sound_24'][systemLang], '24'],
                [Blockly.Words['pushsafer_sound_25'][systemLang], '25'],
                [Blockly.Words['pushsafer_sound_26'][systemLang], '26'],
                [Blockly.Words['pushsafer_sound_27'][systemLang], '27'],
                [Blockly.Words['pushsafer_sound_28'][systemLang], '28']
            ]), 'SOUND');

        this.appendDummyInput('VIBRATION')
            .appendField(Blockly.Words['pushsafer_vibration'][systemLang])
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Words['pushsafer_vibration_'][systemLang],   ''],
                [Blockly.Words['pushsafer_vibration_1'][systemLang], '1'],
                [Blockly.Words['pushsafer_vibration_2'][systemLang], '2'],
                [Blockly.Words['pushsafer_vibration_3'][systemLang], '3']
            ]), 'VIBRATION');

        var input = this.appendValueInput('ICON')
            .setCheck('Number')
            .appendField(Blockly.Words['pushsafer_icon'][systemLang]);
        if (input.connection) input.connection._optional = true;

        input = this.appendValueInput('TITLE')
            .setCheck('String')
            .appendField(Blockly.Words['pushsafer_title'][systemLang]);
        if (input.connection) input.connection._optional = true;

        input = this.appendValueInput('URL')
            .setCheck('String')
            .appendField(Blockly.Words['pushsafer_url'][systemLang]);
        if (input.connection) input.connection._optional = true;

        input = this.appendValueInput('URL_TITLE')
            .setCheck('String')
            .appendField(Blockly.Words['pushsafer_url_title'][systemLang]);
        if (input.connection) input.connection._optional = true;

        input = this.appendValueInput('DEVICE')
            .setCheck('String')
            .appendField(Blockly.Words['pushsafer_device'][systemLang]);
        if (input.connection) input.connection._optional = true;

        input = this.appendValueInput('PICTURE')
            .setCheck('String')
            .appendField(Blockly.Words['pushsafer_filename'][systemLang]);
        if (input.connection) input.connection._optional = true;

        this.appendDummyInput('LOG')
            .appendField(Blockly.Words['pushsafer_log'][systemLang])
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Words['pushsafer_log_none'][systemLang],  ''],
                [Blockly.Words['pushsafer_log_info'][systemLang],  'log'],
                [Blockly.Words['pushsafer_log_debug'][systemLang], 'debug'],
                [Blockly.Words['pushsafer_log_warn'][systemLang],  'warn'],
                [Blockly.Words['pushsafer_log_error'][systemLang], 'error']
            ]), 'LOG');

        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);

        this.setColour(Blockly.Sendto.HUE);
        this.setTooltip(Blockly.Words['pushsafer_tooltip'][systemLang]);
        this.setHelpUrl(Blockly.Words['pushsafer_help'][systemLang]);
    }
};

Blockly.JavaScript['pushsafer'] = function(block) {
    var dropdown_instance = block.getFieldValue('INSTANCE');
    var logLevel = block.getFieldValue('LOG');
    var message  = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
    var text = '{\n';
    text += '   message: ' + message + ',\n';
    text += '   sound: "' + block.getFieldValue('SOUND') + '",\n';
    text += '   vibration: "' + block.getFieldValue('VIBRATION') + '",\n';

    var value = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC);
    if (value)     text += '   url: ' + value + ',\n';

    value = Blockly.JavaScript.valueToCode(block, 'ICON', Blockly.JavaScript.ORDER_ATOMIC);
    if (value)     text += '   icon: ' + value + ',\n';

    value = Blockly.JavaScript.valueToCode(block, 'URL_TITLE', Blockly.JavaScript.ORDER_ATOMIC);
    if (value)     text += '   url_title: ' + value + ',\n';

    value = Blockly.JavaScript.valueToCode(block, 'TITLE', Blockly.JavaScript.ORDER_ATOMIC);
    if (value)     text += '   title: ' + value + ',\n';

    value = Blockly.JavaScript.valueToCode(block, 'DEVICE', Blockly.JavaScript.ORDER_ATOMIC);
    if (value)     text += '   device: ' + value + ',\n';

    value = Blockly.JavaScript.valueToCode(block, 'PICTURE', Blockly.JavaScript.ORDER_ATOMIC);
    if (value)     text += '   picture: ' + value + ',\n';
    text = text.substring(0, text.length - 2);
    text += '\n';

    text += '}';
    var logText;

    if (logLevel) {
        logText = 'console.' + logLevel + '("pushsafer: " + ' + message + ');\n'
    } else {
        logText = '';
    }

    return 'sendTo("pushsafer' + dropdown_instance + '", "send", ' + text + ');\n' + logText;
};